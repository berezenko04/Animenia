import { Button, Stack } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import toast from "react-hot-toast";

// components
import PasswordInput from "@/components/common/Forms/common/PasswordInput";
import AuthFormLayout from "@/components/common/Forms/auth/FormLayout";

// api
import AuthService from "@/api/auth/auth.service";

type ResetPasswordFormFields = {
  password: string;
  repeatPassword: string;
};

const ResetPasswordForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";

  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormFields>();

  const password = watch("password");

  const onSubmit = async (formData: ResetPasswordFormFields) => {
    const result = await AuthService.resetPassword({ password: formData.password, token });
    toast.success(result.message);
    navigate("/login");
  };

  return (
    <AuthFormLayout
      title="Reset password"
      footerText="Token is expired?"
      footerLinkText="Forgot Password"
      footerLinkHref="/forgot-password"
    >
      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ gap: 1.5 }}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "Password is too short (minimum 8 characters)" },
          }}
          render={({ field }) => (
            <PasswordInput
              placeholder="New password"
              value={field.value || ""}
              setValue={field.onChange}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="repeatPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <PasswordInput
              placeholder="Repeat new password"
              value={field.value || ""}
              setValue={field.onChange}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
          Reset Password
        </Button>
      </Stack>
    </AuthFormLayout>
  );
};

export default ResetPasswordForm;
