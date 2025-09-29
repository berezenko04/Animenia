import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//  components
import SectionBlockHead from "@/components/ui/layout/SectionBlockHead";
import CommentForm from "@/components/forms/common/CommentForm";
import AlreadyCommented from "@/components/features/movies/AlreadyCommentedNotice";
import Comment from "@/components/features/movies/Comment";

// api
import MovieService from "@/api/movie/movie.service";

// redux
import { authSelector } from "@/redux/auth/auth.selectors";

// icons
import { EmailOutlined } from "@mui/icons-material";

type CommentsProps = {
  movieId: string;
  isCommented: boolean;
};

const Comments: React.FC<CommentsProps> = ({ movieId, isCommented: isInititalCommented }) => {
  const { isAuth } = useSelector(authSelector);
  const queryClient = useQueryClient();

  const [isCommented, setIsCommented] = useState<boolean>(isInititalCommented);

  const { data: comments = [], isLoading } = useQuery({
    queryKey: ["comments", movieId],
    queryFn: async () => await MovieService.getComments(movieId),
  });

  const addCommentMutation = useMutation({
    mutationFn: (commentText: string) => MovieService.createComment(movieId, commentText),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", movieId] });
      setIsCommented(true);
    },
  });

  const handleAddComment = async (commentText: string) => {
    if (!isAuth) return;
    addCommentMutation.mutate(commentText);
  };

  if (comments.length === 0 && !isAuth) {
    return null;
  }

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
