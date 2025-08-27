import { Stack } from "@mui/material";
import { useParams } from "react-router";
import { useState } from "react";

// components
import MovieListItem from "@/components/common/MovieListItem";

const MoviePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return <Stack></Stack>
};

export default MoviePage;
