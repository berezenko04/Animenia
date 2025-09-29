import { Skeleton, Stack } from "@mui/material";

const CommentSkeleton: React.FC = () => {
  return (
    <Stack direction="row" gap={4}>
      <Skeleton variant="circular" width={56} height={56} sx={{ flexShrink: 0 }} />
      <Stack sx={{ width: "100%" }}>
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="20%" />
        <Skeleton variant="text" width="60%" />
      </Stack>
    </Stack>
  );
};

export default CommentSkeleton;
