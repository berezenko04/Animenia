import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

// components
import SectionBlockHead from "@/components/ui/layout/SectionBlockHead";
import LogoutAllButton from "@/components/ui/buttons/LogoutAllButton";
import Session from "@/components/features/profile/Session";
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
  const { data: sessions, isLoading } = useQuery<SessionType[]>({
    queryKey: ["sessions"],
    queryFn: async () => await AuthService.getSessions(),
  });

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Sessions" icon={FolderOutlined} additionalContent={!isLoading && <LogoutAllButton />} />
      <Stack sx={{ gap: 1.5 }}>
        {isLoading
          ? repeat(3, (idx) => <ProfileSessionItemSkeleton key={idx} />)
          : sessions?.map((session) => <Session key={session.id} session={session} />)}
      </Stack>
    </Stack>
  );
};

export default Sessions;
