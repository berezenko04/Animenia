import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

//  components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import CommentForm from "@/components/common/forms/CommentForm";
import AlreadyCommented from "@/components/movies/AlreadyCommented";
import Comment from "@/components/movies/Comment";

// api
import MovieService from "@/api/movie/movie.service";

// redux
import { userSelector } from "@/redux/user/user.selectors";

// utils
import { catchError } from "@/utils/catchError";

// types
import type { MovieComment } from "@/api/movie/movie.types";

// icons
import { EmailOutlined } from "@mui/icons-material";

type CommentsProps = {
  movieId: string;
  isCommented: boolean;
};

const Comments: React.FC<CommentsProps> = ({ movieId, isCommented: isInititalCommented }) => {
  const { user } = useSelector(userSelector);

  const [isCommented, setIsCommented] = useState<boolean>(isInititalCommented);
  const [comments, setComments] = useState<MovieComment[]>([]);

  const handleAddComment = async (commentText: string) => {
    if (!user) return;

    const { firstName, lastName, avatarUrl } = user;

    const tempComment: MovieComment = {
      id: `temp-${Date.now()}`,
      text: commentText,
      user: { firstName, lastName, avatarUrl },
      createdAt: new Date(),
    };

    setComments((prev) => [tempComment, ...prev]);

    try {
      const result = await MovieService.createComment(movieId, commentText);

      const resultWithUser: MovieComment = {
        ...result,
        user: { firstName, lastName, avatarUrl },
      };

      setComments((prev) => prev.map((c) => (c.id === tempComment.id ? resultWithUser : c)));
      setIsCommented(true);
    } catch (err) {
      setComments((prev) => prev.filter((c) => c.id !== tempComment.id));
      setIsCommented(false);
      catchError(err);
    }
  };

  useEffect(() => {
    (async () => {
      const result = await MovieService.getComments(movieId);
      setComments(result);
    })();
  }, [movieId]);

  return (
    <Stack sx={{ gap: 4 }}>
      <SectionBlockHead title="Comments" icon={EmailOutlined} />
      <Stack sx={{ gap: 4, px: 2.5 }}>
        {isCommented ? <AlreadyCommented /> : <CommentForm onAddComment={handleAddComment} />}
        <Stack sx={{ gap: 2.5 }}>
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Comments;
