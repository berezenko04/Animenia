import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

// components
import MoviesBlockHead from "@/components/common/MoviesBlockHead";
import NewsItem from "../NewsItem";

// api
import MovieService from "@/api/movie/movie.service";

// utils
import { catchError } from "@/utils/catchError";

// icons
import { ArticleOutlined } from "@mui/icons-material";

// types
import type { MovieNewsItem } from "@/api/movie/movie.types";

const LatestNews: React.FC = () => {
  const [news, setNews] = useState<MovieNewsItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await MovieService.getNews();
        setNews(result);
      } catch (err) {
        catchError(err);
      }
    })();
  }, []);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title="Latest News" icon={ArticleOutlined} />
      <Stack sx={{ px: 2.5 }}>
        {news.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default LatestNews;
