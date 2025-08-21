import { alpha, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

// components
import CustomLink from "@/components/common/CustomLink";

// icons
import { LockOpenOutlined, PersonOutlineOutlined } from "@mui/icons-material";

// theme
import theme from "@/theme";

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>();

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
