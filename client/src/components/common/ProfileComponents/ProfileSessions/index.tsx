import { Stack } from "@mui/material";
import { useState } from "react";

// components
import MoviesBlockHead from "../../MoviesBlockHead";

// icons
import { FolderOutlined } from "@mui/icons-material";

const ProfileSessions: React.FC = () => {
  const [sessions, setSessions] = useState([]);
  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title="Sessions" icon={FolderOutlined} />
    </Stack>
  );
};

export default ProfileSessions;
