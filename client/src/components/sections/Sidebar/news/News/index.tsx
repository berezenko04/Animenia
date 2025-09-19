import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import NewsItemSkeleton from "@/components/ui/loaders/skeletons/NewsItemSkeleton";
import NewsItem from "../ListItem";

// api
import MovieService from "@/api/movie/movie.service";

// utils
import { catchError } from "@/utils/catchError";

// icons
import { ArticleOutlined } from "@mui/icons-material";

// types
import type { MovieNewsItem } from "@/api/movie/movie.types";

const News: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<MovieNewsItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await MovieService.getNews();
        setNews(result);
      } catch (err) {
        catchError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Latest News" icon={ArticleOutlined} />
      <Stack sx={{ px: 2.5, gap: 1.5 }}>
        {isLoading
          ? [...Array(5)].map((_, idx) => <NewsItemSkeleton key={idx} />)
          : news.map((item) => <NewsItem key={item.id} {...item} />)}
      </Stack>
    </Stack>
  );
};

export default News;
