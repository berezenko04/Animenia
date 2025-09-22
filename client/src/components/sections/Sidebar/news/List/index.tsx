import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import NewsItemSkeleton from "@/components/ui/loaders/skeletons/NewsItemSkeleton";
import NewsItem from "../ListItem";

// api
import MovieService from "@/api/movie/movie.service";

// utils
import { repeat } from "@/utils/repeat";

// icons
import { ArticleOutlined } from "@mui/icons-material";

// types
import type { MovieNewsItem } from "@/api/movie/movie.types";

const News: React.FC = () => {
  const { data: news, isLoading } = useQuery<MovieNewsItem[]>({
    queryKey: ["news"],
    queryFn: async () => await MovieService.getNews(),
  });

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Latest News" icon={ArticleOutlined} />
      <Stack sx={{ px: 2.5, gap: 1.5 }}>
        {isLoading
          ? repeat(5, (idx) => <NewsItemSkeleton key={idx} />)
          : news?.map((item) => <NewsItem key={item.id} {...item} />)}
      </Stack>
    </Stack>
  );
};

export default News;
