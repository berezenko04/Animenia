import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type CommentFormFields = {
  comment: string;
};

const CommentForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormFields>();

  const onSubmit = async (data: CommentFormFields) => {
    // const result = await dispatch(login(data));
    // if (login.rejected.match(result)) {
    //   return toast.error(result?.payload?.message?.message);
    // }
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
        {...register("comment", { required: "Comment is required" })}
        multiline
        fullWidth
        rows={3}
        error={!!errors.comment}
        helperText={errors.comment?.message}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "12px",
            height: "100%",
            backgroundColor: "#fff",
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
