import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

//  components
import MoviesBlockHead from "../MoviesBlockHead";
import CommentForm from "../forms/CommentForm";
import AlreadyCommented from "../AlreadyCommented";
import Comment from "../Comment";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieComment } from "@/api/movie/movie.types";

// icons
import { EmailOutlined } from "@mui/icons-material";

type MovieCommentsProps = {
  movieId: string;
  isCommented: boolean;
};

const MovieComments: React.FC<MovieCommentsProps> = ({ movieId, isCommented }) => {
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
      <Stack sx={{ gap: 4, px: 2.5 }}>
        {isCommented ? <AlreadyCommented /> : <CommentForm movieId={movieId} />}
        <Stack sx={{ gap: 2.5 }}>
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MovieComments;
