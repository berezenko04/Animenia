import { Link, type LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CustomLink: React.FC<LinkProps<typeof RouterLink>> = ({ sx, ...props }) => {
  return <Link sx={{ transition: "all .25s ease-in-out", ...sx }} component={RouterLink} {...props} />;
};

export default CustomLink;
