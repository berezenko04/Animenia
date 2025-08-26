import { Box, Stack, Typography, type SvgIconProps } from "@mui/material";

// components
import IconBoxWithBackground from "@/components/ui/IconBoxWithBackground";
import IconButtonWithBackground from "@/components/ui/IconButtonWithBackground";

// icons
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";

// types
import type { Swiper } from "swiper/types";

export type MoviesBlockHeadProps = {
  title: string;
  icon: React.ElementType<SvgIconProps>;
  isSwipe?: boolean;
  swiperRef: React.RefObject<Swiper | null>;
};

const MoviesBlockHead: React.FC<MoviesBlockHeadProps> = ({ title, icon, isSwipe, swiperRef }) => {
  return (
    <Box sx={{ backgroundColor: "white.main", borderRadius: "10px", py: "18px", px: "20px" }}>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
          <IconBoxWithBackground icon={icon} />
          <Typography variant="h2">{title}</Typography>
        </Stack>
        {isSwipe && (
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
            <IconButtonWithBackground onClick={() => swiperRef.current?.slidePrev()} icon={ArrowBackOutlined} />
            <IconButtonWithBackground onClick={() => swiperRef.current?.slideNext()} icon={ArrowForwardOutlined} />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default MoviesBlockHead;
