import { Skeleton } from "@mui/material";

const MovieCardSkeleton: React.FC = () => {
  return <Skeleton variant="rounded" animation="wave" sx={{ minHeight: 350, height: "100%", width: "100%" }} />;
};

export default MovieCardSkeleton;
