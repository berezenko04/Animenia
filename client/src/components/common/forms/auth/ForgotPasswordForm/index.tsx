import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// components
import AuthFormLayout from "@/components/common/Forms/auth/FormLayout";

// api
import AuthService from "@/api/auth/auth.service";

// utils
import { catchError } from "@/utils/catchError";

// icons
import { PersonOutlineOutlined } from "@mui/icons-material";

type ForgotPasswordFormFields = {
  email: string;
};

const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormFields>();

  const onSubmit = async ({ email }: ForgotPasswordFormFields) => {
    try {
      const result = await AuthService.sendForgotPasswordLink(email);
      toast.success(result.message);
      navigate("/login");
    } catch (err) {
      catchError(err);
    }
  };

  return (
    <AuthFormLayout
      title="Forgot Password"
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkHref="/login"
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

        <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
          Send link
        </Button>
      </Stack>
    </AuthFormLayout>
  );
};

export default ForgotPasswordForm;
