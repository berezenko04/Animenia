import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/store";

// api
import UserService from "@/api/user/user.service";

// redux
import { userSelector } from "@/redux/user/user.selectors";
import { fetchMe } from "@/redux/user/user.actions";

// icons
import { BadgeOutlined } from "@mui/icons-material";

type ChangeNameFormProps = {
  onSuccess: () => void;
};

type ChangeNameFormFields = {
  firstName: string;
  lastName: string;
};

const ChangeNameForm: React.FC<ChangeNameFormProps> = ({ onSuccess }) => {
  const dispatch = useAppDispatch();
  const { user } = useSelector(userSelector);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ChangeNameFormFields>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
    },
  });

  const onSubmit = async (data: ChangeNameFormFields) => {
    const result = await UserService.update(data);
    await dispatch(fetchMe());
    toast.success(result.message);
    onSuccess();
  };

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ gap: 1.5 }}>
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
        fullWidth
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
        fullWidth
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

      <Button type="submit" variant="contained" fullWidth size="medium" disabled={isSubmitting}>
        Save
      </Button>
    </Stack>
  );
};

export default ChangeNameForm;
