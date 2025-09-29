import { authSelector } from "@/redux/auth/auth.selectors";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

type CommentFormProps = {
  onAddComment: (text: string) => void;
};

type CommentFormFields = {
  comment: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormFields>();

  const { isAuth } = useSelector(authSelector);

  const onSubmit = async ({ comment }: CommentFormFields) => {
    onAddComment(comment);
    reset();
  };

  if (!isAuth) {
    return null;
  }

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ gap: 1.5, alignItems: "flex-end" }}>
      <TextField
        label="Write a comment"
        {...register("comment", {
          required: "Comment is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
          maxLength: { value: 256, message: "Maximum 256 characters" },
        })}
        multiline
        fullWidth
        rows={3}
        error={!!errors.comment}
        helperText={errors.comment?.message}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "12px",
            height: "100%",
            backgroundColor: "backgroundPrimary.main",
            padding: "10px",
          },
        }}
      />

      <Button type="submit" variant="contained" size="medium" disabled={isSubmitting}>
        Submit
      </Button>
    </Stack>
  );
};

export default CommentForm;
