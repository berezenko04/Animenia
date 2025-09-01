import { Stack } from "@mui/material";

//  components
import MoviesBlockHead from "../MoviesBlockHead";
import CommentForm from "../forms/CommentForm";

// icons
import { EmailOutlined } from "@mui/icons-material";

type MovieCommentsProps = {
  movieId: string;
};

const MovieComments: React.FC<MovieCommentsProps> = ({ movieId }) => {
  return (
    <Stack sx={{ gap: 4 }}>
      <MoviesBlockHead title="Comments" icon={EmailOutlined} />
      <CommentForm movieId={movieId} />
    </Stack>
  );
};

export default MovieComments;
