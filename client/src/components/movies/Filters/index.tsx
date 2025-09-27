import {
  Box,
  ButtonBase,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

// components
import FilterSelect from "@/components/common/Forms/common/FilterSelect";

// utils
import { formatGenres } from "@/utils/formatGenres";

// data
import { genres } from "@/data";

// types
import type { Genre } from "@/types/enums.types";

// icons
import { Clear, Close, TuneOutlined } from "@mui/icons-material";

type FiltersProps = {
  year: string;
  genre: Genre | "all";
  setYear: (i: string) => void;
  setGenre: (i: Genre | "all") => void;
};

const VerticalDivider = () => <Divider orientation="vertical" flexItem sx={{ height: 16, alignSelf: "center" }} />;

const Filters: React.FC<FiltersProps> = ({ year, genre, setYear, setGenre }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const years = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => {
    const year = 2000 + i;
    return { value: year.toString(), label: year.toString() };
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleClear = () => {
    setYear("all");
    setGenre("all");
    setIsOpened(false);
  };

  const filterControls = (
    <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap">
      <FilterSelect label="Year" value={year} onChangeValue={setYear} options={years} />
      <VerticalDivider />
      <FilterSelect
        label="Genre"
        value={genre}
        onChangeValue={(val: string) => setGenre(val as Genre | "all")}
        options={genres.map((genre) => ({
          label: formatGenres([genre]),
          value: genre,
        }))}
      />
      <VerticalDivider />
      <ButtonBase sx={{ color: "primary.main" }} onClick={handleClear}>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Clear fontSize="small" sx={{ width: 18, height: 18, color: "primary.main" }} />
          <Typography fontSize={14}>Clear</Typography>
        </Stack>
      </ButtonBase>
    </Stack>
  );

  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.8}
        sx={{ cursor: { xs: "pointer", md: "default" }, ml: isDesktop ? 0 : "auto" }}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <TuneOutlined sx={{ color: "primary.main", width: 18, height: 18 }} fontSize="small" />
        <Typography color="primary">Filters</Typography>
      </Stack>

      {isDesktop && (
        <>
          <VerticalDivider />
          {filterControls}
        </>
      )}

      {!isDesktop && (
        <Drawer anchor="bottom" open={isOpened} onClose={() => setIsOpened(false)}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} py={1}>
            <Typography variant="h5">Filters</Typography>
            <IconButton onClick={() => setIsOpened(false)}>
              <Close />
            </IconButton>
          </Stack>
          <Box p={2}>{filterControls}</Box>
        </Drawer>
      )}
    </Stack>
  );
};

export default Filters;
