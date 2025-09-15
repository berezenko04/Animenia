import { ButtonBase, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";

// components
import FilterSelect from "@/components/common/forms/FilterSelect";

// data
import { genres } from "@/data";

// icons
import { Clear, TuneOutlined } from "@mui/icons-material";

const VerticalDivider = () => <Divider orientation="vertical" flexItem sx={{ height: 16, alignSelf: "center" }} />;

const Filters: React.FC = () => {
  const [year, setYear] = useState<string>("all");
  const [genre, setGenre] = useState<string>("all");

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
        options={genres.map((genre) => ({ label: genre, value: genre.toLowerCase() }))}
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
