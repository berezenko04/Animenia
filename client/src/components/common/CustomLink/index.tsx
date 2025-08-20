import { Link, type LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CustomLink: React.FC<LinkProps<typeof RouterLink>> = (props) => {
  return <Link component={RouterLink} {...props} />;
};

export default CustomLink;
