import { alpha, Button, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

// components
import CustomLink from "@/components/common/CustomLink";
import PasswordInput from "@/components/common/forms/PasswordInput";

// redux
import { login } from "@/redux/auth/auth.actions";

// icons
import { PersonOutlineOutlined } from "@mui/icons-material";

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const theme = useTheme();
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

    navigate("/");
  };

  return (
    <Stack
      sx={{
        p: "40px 60px 60px",
        backgroundColor: alpha(theme.palette.backgroundPrimary.main, 0.7),
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        maxWidth: 540,
        width: "100%",
      }}
    >
      <Stack sx={{ gap: 2.5 }}>
        <Typography variant="h1" sx={{ fontSize: 38, textAlign: "center" }}>
          Login
        </Typography>
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
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.25,
            "*": { fontSize: 14 },
          }}
        >
          <Typography>Don't have an account?</Typography>
          <CustomLink to="/register" sx={{ color: "primary.main", textDecoration: "underline" }}>
            Register
          </CustomLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
