import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// components
import CustomLink from "@/components/common/CustomLink";
import AuthFormLayout from "@/components/common/Forms/auth/FormLayout";
import PasswordInput from "@/components/common/Forms/common/PasswordInput";

// redux
import { login } from "@/redux/auth/auth.actions";
import { fetchMe } from "@/redux/user/user.actions";

// icons
import { PersonOutlineOutlined } from "@mui/icons-material";

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>();

  const onSubmit = async (data: LoginFormFields) => {
    const result = await dispatch(login(data));

    if (login.rejected.match(result)) {
      return toast.error(result?.payload?.message || "Unknown Error");
    }

    await dispatch(fetchMe());
    navigate("/");
  };

  return (
    <AuthFormLayout
      title="Login"
      footerText="Don't have an account?"
      footerLinkText="Register"
      footerLinkHref="/register"
    >
      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ gap: 1.5 }}>
        <TextField
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlined />
                </InputAdornment>
              ),
            },
          }}
        />
        <Stack sx={{ gap: 1 }}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: { value: 8, message: "Password is too short (minimum 8 characters)" },
            }}
            render={({ field }) => (
              <PasswordInput
                placeholder="Password"
                value={field.value || ""}
                setValue={field.onChange}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <CustomLink to="/forgot-password" sx={{ fontSize: 14, textDecoration: "underline" }}>
            Forgot Password?
          </CustomLink>
        </Stack>

        <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
          Login
        </Button>
      </Stack>
    </AuthFormLayout>
  );
};

export default LoginForm;
