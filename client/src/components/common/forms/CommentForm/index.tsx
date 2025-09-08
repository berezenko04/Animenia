import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// api
import MovieService from "@/api/movie/movie.service";

// utils
import { catchError } from "@/utils/catchError";

type CommentFormProps = {
  movieId: string;
};

type CommentFormFields = {
  comment: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ movieId }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormFields>();

  const onSubmit = async ({ comment }: CommentFormFields) => {
    try {
      const result = await MovieService.createComment(movieId, comment);
      toast.success(result.message);
    } catch (err) {
      catchError(err);
    }
  };

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ gap: 1.5, px: 2.5, alignItems: "flex-end" }}
    >
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
