import { Stack, Typography } from "@mui/material";

// icons
import { InfoOutline } from "@mui/icons-material";

const AlreadyCommentedNotice: React.FC = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        backgroundColor: "backgroundPrimary.main",
        p: 2,
        borderRadius: "10px",
      }}
    >
      <InfoOutline />
      <Typography>You have already commented on this movie</Typography>
    </Stack>
  );
};

export default AlreadyCommentedNotice;
