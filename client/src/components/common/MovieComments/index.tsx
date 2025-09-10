import { Stack } from "@mui/material";

//  components
import MoviesBlockHead from "../MoviesBlockHead";
import CommentForm from "../forms/CommentForm";
import Comment from "../Comment";

// icons
import { EmailOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

type MovieCommentsProps = {
  movieId: string;
};

const MovieComments: React.FC<MovieCommentsProps> = ({ movieId }) => {
  const [comments, setComments] = useState<[]>([]);

  useEffect(() => {}, []);

  return (
    <Stack sx={{ gap: 4 }}>
      <MoviesBlockHead title="Comments" icon={EmailOutlined} />
      <Stack sx={{ gap: 2.5, px: 2.5 }}>
        <CommentForm movieId={movieId} />
        <Comment />
      </Stack>
    </Stack>
  );
};

export default MovieComments;
