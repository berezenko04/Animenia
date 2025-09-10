import { Skeleton, Stack } from "@mui/material";
import React from "react";

const NewsItemSkeleton: React.FC = () => {
  return (
    <Stack sx={{ gap: 0.5 }}>
      <Skeleton variant="rounded" width="100%" height={18} />
      <Skeleton variant="rounded" width="50%" height={14} />
      <Skeleton variant="rounded" width="30%" height={14} />
    </Stack>
  );
};

export default NewsItemSkeleton;
