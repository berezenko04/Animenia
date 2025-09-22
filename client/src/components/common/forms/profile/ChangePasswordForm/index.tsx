import { Button, Stack } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

// components
import PasswordInput from "@/components/common/Forms/common/PasswordInput";

// api
import AuthService from "@/api/auth/auth.service";

type ChangePasswordFormProps = {
  onSuccess: () => void;
};

type ChangePasswordFormFields = {
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ onSuccess }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormFields>();

  const onSubmit = async (data: ChangePasswordFormFields) => {
    const result = await AuthService.changePassword(data);
    toast.success(result.message);
    onSuccess();
  };

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ gap: 1.5 }}>
      <Controller
        name="currentPassword"
        control={control}
        rules={{
          required: "Password is required",
        }}
        render={({ field }) => (
          <PasswordInput
            placeholder="Current Password"
            value={field.value || ""}
            setValue={field.onChange}
            error={!!errors.currentPassword}
            helperText={errors.currentPassword?.message}
          />
        )}
      />

      <Controller
        name="newPassword"
        control={control}
        rules={{
          required: "Password is required",
          minLength: { value: 8, message: "Password is too short (minimum 8 characters)" },
        }}
        render={({ field }) => (
          <PasswordInput
            placeholder="New Password"
            value={field.value || ""}
            setValue={field.onChange}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
          />
        )}
      />

      <Controller
        name="repeatNewPassword"
        control={control}
        rules={{
          required: "Password is required",
          validate: (value) => value === control._formValues.newPassword || "Passwords do not match",
        }}
        render={({ field }) => (
          <PasswordInput
            placeholder="New Password"
            value={field.value || ""}
            setValue={field.onChange}
            error={!!errors.repeatNewPassword}
            helperText={errors.repeatNewPassword?.message}
          />
        )}
      />

      <Button type="submit" variant="contained" fullWidth size="medium" disabled={isSubmitting}>
        Change
      </Button>
    </Stack>
  );
};

export default ChangePasswordForm;
