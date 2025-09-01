import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

// components
import MoviesBlockHead from "../../MoviesBlockHead";
import ProfileSessionsItem from "../ProfileSessionsItem";

// api
import AuthService from "@/api/auth/auth.service";

// utils
import { catchError } from "@/utils/catchError";

// types
import type { Session } from "@/api/auth/auth.types";

// icons
import { FolderOutlined } from "@mui/icons-material";

const ProfileSessions: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await AuthService.getSessions();
        setSessions(result);
      } catch (err) {
        catchError(err);
      }
    })();
  }, []);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title="Sessions" icon={FolderOutlined} />
      <Stack sx={{ gap: 1.5 }}>
        {sessions.map((session) => (
          <ProfileSessionsItem key={session.id} session={session} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProfileSessions;
