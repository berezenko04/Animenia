import { Pagination, PaginationProps, useMediaQuery, useTheme } from "@mui/material";

const ResponsivePagination: React.FC<PaginationProps> = (props) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  let siblingCount = 0;

  if (isXs) siblingCount = 0;
  else if (isSm) siblingCount = 1;
  else if (isMdUp) siblingCount = 2;

  return <Pagination {...props} siblingCount={siblingCount} boundaryCount={1} shape="rounded" />;
};

export default ResponsivePagination;
