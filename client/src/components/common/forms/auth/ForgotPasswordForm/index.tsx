import { alpha, Button, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// components
import CustomLink from "@/components/common/CustomLink";

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
  const theme = useTheme();
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
          Forgot Password
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

          <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
            Send link
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

export default ForgotPasswordForm;
