import { Box } from "@mui/material";

// components
import CustomLink from "@/components/common/CustomLink";

type ListItemProps = {
  imgSrc: string;
};

const ListItem: React.FC<ListItemProps> = ({ imgSrc }) => {
  return (
    <CustomLink sx={{ width: "100%" }} to="#">
      <Box
        component="img"
        src={imgSrc}
        sx={{
          borderRadius: "10px",
          height: { xs: 160, lg: 120 },
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      />
    </CustomLink>
  );
};

export default ListItem;
