import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import LogoutAllButton from "@/components/common/Buttons/LogoutAllButton";
import Session from "@/components/profile/Session";
import ProfileSessionItemSkeleton from "@/components/ui/loaders/skeletons/ProfileSessionItemSkeleton";

// api
import AuthService from "@/api/auth/auth.service";

// utils
import { repeat } from "@/utils/repeat";

// types
import type { Session as SessionType } from "@/api/auth/auth.types";

// icons
import { FolderOutlined } from "@mui/icons-material";

const Sessions: React.FC = () => {
  const { data, isLoading } = useQuery<SessionType[]>({
    queryKey: ["sessions"],
    queryFn: async () => await AuthService.getSessions(),
  });

  const [sessions, setSessions] = useState<SessionType[]>([]);

  useEffect(() => {
    if (data) setSessions(data);
  }, [data]);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Sessions" icon={FolderOutlined} additionalContent={!isLoading && <LogoutAllButton />} />
      <Stack sx={{ gap: 1.5 }}>
        {isLoading
          ? repeat(3, (idx) => <ProfileSessionItemSkeleton key={idx} />)
          : sessions?.map((session) => <Session key={session.id} session={session} setSessions={setSessions} />)}
      </Stack>
    </Stack>
  );
};

export default Sessions;
