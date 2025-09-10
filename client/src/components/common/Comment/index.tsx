import { Avatar, Stack, Typography } from "@mui/material";

// types
import type { MovieComment } from "@/api/movie/movie.types";

const Comment: React.FC<MovieComment> = ({ user, createdAt, text }) => {
  return (
    <Stack sx={{ flexDirection: "row", alignItems: "flex-start", gap: 4 }}>
      <Avatar sx={{ width: 56, height: 56 }} src={user.avatarUrl} />
      <Stack sx={{ flex: 1, gap: 1.5 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant="h3">
            {user.firstName}&nbsp;{user.lastName}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>{new Date(createdAt).toLocaleDateString("en-GB")}</Typography>
        </Stack>
        <Typography>{text}</Typography>
      </Stack>
    </Stack>
  );
};

export default Comment;
