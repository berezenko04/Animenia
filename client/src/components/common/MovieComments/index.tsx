import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

//  components
import MoviesBlockHead from "../MoviesBlockHead";
import CommentForm from "../forms/CommentForm";
import Comment from "../Comment";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieComment } from "@/api/movie/movie.types";

// icons
import { EmailOutlined } from "@mui/icons-material";

type MovieCommentsProps = {
  movieId: string;
};

const MovieComments: React.FC<MovieCommentsProps> = ({ movieId }) => {
  const [comments, setComments] = useState<MovieComment[]>([]);

  useEffect(() => {
    (async () => {
      const result = await MovieService.getComments(movieId);
      setComments(result);
    })();
  }, []);

  return (
    <Stack sx={{ gap: 4 }}>
      <MoviesBlockHead title="Comments" icon={EmailOutlined} />
      <Stack sx={{ gap: 2.5, px: 2.5 }}>
        <CommentForm movieId={movieId} />
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MovieComments;
