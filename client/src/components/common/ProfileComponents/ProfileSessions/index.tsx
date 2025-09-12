import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

// components
import SectionBlockHead from "../../SectionBlockHead";
import LogoutAllButton from "../../LogoutAllButton";
import ProfileSessionsItem from "../ProfileSessionsItem";
import ProfileSessionItemSkeleton from "@/components/ui/loaders/ProfileSessionItemSkeleton";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await AuthService.getSessions();
        setSessions(result);
      } catch (err) {
        catchError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Sessions" icon={FolderOutlined} additionalContent={!isLoading && <LogoutAllButton />} />
      <Stack sx={{ gap: 1.5 }}>
        {isLoading
          ? [...Array(3)].map((_, idx) => <ProfileSessionItemSkeleton key={idx} />)
          : sessions.map((session) => (
              <ProfileSessionsItem key={session.id} session={session} setSessions={setSessions} />
            ))}
      </Stack>
    </Stack>
  );
};

export default ProfileSessions;
