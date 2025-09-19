import { alpha, Button, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

// components
import CustomLink from "@/components/common/CustomLink";
import PasswordInput from "@/components/common/forms/common/PasswordInput";

// api
import AuthService from "@/api/auth/auth.service";

// icons
import { BadgeOutlined, PersonOutlineOutlined } from "@mui/icons-material";

// utils
import { catchError } from "@/utils/catchError";

type RegisterFormFields = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
};

const RegisterForm: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormFields>();

  const password = watch("password");

  const onSubmit = async (formData: RegisterFormFields) => {
    const { repeatPassword, ...data } = formData;
    void repeatPassword;

    try {
      await AuthService.register(data);
      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      catchError(err);
    }
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
          Register
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
          <TextField
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name is too short (minimum 2 characters)",
              },
              maxLength: {
                value: 32,
                message: "First name is too long (maximum 32 characters)",
              },
            })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            placeholder="First Name"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name is too short (minimum 2 characters)",
              },
              maxLength: {
                value: 32,
                message: "Last name is too long (maximum 32 characters)",
              },
            })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            placeholder="Last Name"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
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
          <Controller
            name="repeatPassword"
            control={control}
            rules={{
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <PasswordInput
                placeholder="Repeat Password"
                value={field.value || ""}
                setValue={field.onChange}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
            Register
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
          <Typography>Already have an account?</Typography>
          <CustomLink to="/login" sx={{ color: "primary.main", textDecoration: "underline" }}>
            Login
          </CustomLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RegisterForm;
