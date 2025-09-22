import { ButtonBase, Divider, Stack, Typography } from "@mui/material";

// components
import FilterSelect from "@/components/common/Forms/common/FilterSelect";

// utils
import { formatGenres } from "@/utils/formatGenres";

// data
import { filterGenres } from "@/data";

// types
import type { Genre } from "@/types/enums.types";

// icons
import { Clear, TuneOutlined } from "@mui/icons-material";

type FiltersProps = {
  year: string;
  genre: Genre | "all";
  setYear: (i: string) => void;
  setGenre: (i: Genre | "all") => void;
};

const VerticalDivider = () => <Divider orientation="vertical" flexItem sx={{ height: 16, alignSelf: "center" }} />;

const Filters: React.FC<FiltersProps> = ({ year, genre, setYear, setGenre }) => {
  const years = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => {
    const year = 2000 + i;
    return { value: year.toString(), label: year.toString() };
  });

  const handleClear = () => {
    setYear("all");
    setGenre("all");
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Stack direction="row" alignItems="center" spacing={0.8}>
        <TuneOutlined sx={{ color: "primary.main", width: 18, height: 18 }} fontSize="small" />
        <Typography color="primary">Filters</Typography>
      </Stack>

      <VerticalDivider />

      <FilterSelect label="Year" value={year} onChangeValue={setYear} options={years} />
      <VerticalDivider />
      <FilterSelect
        label="Genre"
        value={genre}
        onChangeValue={setGenre}
        options={filterGenres.map((genre) => ({ label: formatGenres([genre]), value: genre }))}
      />

      <VerticalDivider />

      <ButtonBase sx={{ color: "primary.main" }} onClick={handleClear}>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Clear fontSize="small" sx={{ width: 18, height: 18 }} />
          <Typography fontSize={14}>Clear</Typography>
        </Stack>
      </ButtonBase>
    </Stack>
  );
};

export default Filters;
