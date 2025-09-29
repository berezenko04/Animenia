import { Pagination, PaginationProps, useMediaQuery, useTheme } from "@mui/material";
import { memo, useMemo } from "react";

const ResponsivePagination: React.FC<PaginationProps> = memo((props) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const siblingCount = useMemo(() => {
    if (isXs) return 0;
    else if (isSm) return 1;
    else if (isMdUp) return 2;
    return 0;
  }, [isXs, isSm, isMdUp]);

  return <Pagination {...props} siblingCount={siblingCount} boundaryCount={1} shape="rounded" />;
});

export default ResponsivePagination;
