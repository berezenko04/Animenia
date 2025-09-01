import { Stack } from "@mui/material";

//  components
import MoviesBlockHead from "../MoviesBlockHead";
import CommentForm from "../forms/CommentForm";

// icons
import { EmailOutlined } from "@mui/icons-material";

const MovieComments: React.FC = () => {
  return (
    <Stack sx={{ gap: 4 }}>
      <MoviesBlockHead title="Comments" icon={EmailOutlined} />
      <CommentForm />
    </Stack>
  );
};

export default MovieComments;
