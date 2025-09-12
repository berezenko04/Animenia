import { Skeleton } from "@mui/material";

const MovieListItemSkeleton: React.FC = () => {
  return <Skeleton variant="rounded" animation="wave" sx={{ minHeight: 400, height: "100%", width: "100%" }} />;
};

export default MovieListItemSkeleton;
