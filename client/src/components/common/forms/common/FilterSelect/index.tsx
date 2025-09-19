import { FormControl, FormLabel, MenuItem, Select, type SelectProps } from "@mui/material";

type FilterOption = { value: string; label: string };

type FilterSelectProps = SelectProps & {
  label: string;
  options: FilterOption[];
  onChangeValue: (value: string) => void;
};

const FilterSelect: React.FC<FilterSelectProps> = ({ label, onChangeValue, options, ...props }) => {
  return (
    <FormControl variant="standard" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
      <FormLabel component="span" sx={{ fontSize: 14 }}>
        {label}
      </FormLabel>
      <Select variant="standard" disableUnderline {...props} onChange={(e) => onChangeValue(e.target.value as string)}>
        <MenuItem value="all">All</MenuItem>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
