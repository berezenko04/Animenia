import { Button, type ButtonProps } from "@mui/material";

// icons
import { EditOutlined } from "@mui/icons-material";

const EditButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.light",
        backdropFilter: "blur(5px)",
        borderRadius: "5px",
        width: 26,
        height: 26,
        minWidth: 0,
      }}
      size="small"
      {...props}
    >
      <EditOutlined fontSize="small" sx={{ color: "primary.main", width: 16, height: 16 }} />
    </Button>
  );
};

export default EditButton;
