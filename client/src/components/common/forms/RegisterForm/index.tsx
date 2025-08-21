import { alpha, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

// components
import CustomLink from "@/components/common/CustomLink";

// icons
import { BadgeOutlined, LockOpenOutlined, PersonOutlineOutlined } from "@mui/icons-material";

// theme
import theme from "@/theme";

type RegisterFormFields = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
};

const RegisterForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormFields>();

  const password = watch("password");

  const onSubmit = () => {};

  return (
    <Stack
      sx={{
        p: "40px 60px 60px",
        backgroundColor: alpha(theme.palette.white.main, 0.7),
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
          <TextField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password is too short (minimum 8 characters)",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            placeholder="Password"
            type="password"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            {...register("repeatPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
            placeholder="Repeat Password"
            type="password"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenOutlined />
                  </InputAdornment>
                ),
              },
            }}
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
