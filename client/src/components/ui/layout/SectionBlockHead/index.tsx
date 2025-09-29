import { Box, Button, Stack, Typography, type SvgIconProps } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

// components
import IconBoxWithBackground from "@/components/ui/IconBoxWithBackground";

// icons
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";

// types
import type { Swiper } from "swiper/types";

export type SectionBlockHeadProps = {
  title: string;
  icon: React.ElementType<SvgIconProps>;
  additionalContent?: React.ReactNode;
  isSwipe?: boolean;
  swiperRef?: React.RefObject<Swiper | null>;
};

const SectionBlockHead: React.FC<SectionBlockHeadProps> = ({ title, icon, additionalContent, isSwipe, swiperRef }) => {
  return (
    <Box
      sx={{
        backgroundColor: "backgroundPrimary.main",
        borderRadius: "10px",
        width: "100%",
        py: 2,
        px: 2.5,
      }}
    >
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
          <IconBoxWithBackground icon={icon} />
          <Typography variant="h2">{title}</Typography>
        </Stack>
        <Fragment>{additionalContent}</Fragment>
        {isSwipe && (
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
            <Button variant="iconary" color="primary" onClick={() => swiperRef!.current?.slidePrev()}>
              <ArrowBackOutlined />
            </Button>
            <Button variant="iconary" color="primary" onClick={() => swiperRef!.current?.slideNext()}>
              <ArrowForwardOutlined />
            </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default SectionBlockHead;
