import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";

// redux
import { themeSelector } from "@/redux/theme/theme.selectors";
import { toggleTheme } from "@/redux/theme/theme.slice";

// icons
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const ThemeSwitchButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const { mode } = useSelector(themeSelector);

  return (
    <IconButton onClick={() => dispatch(toggleTheme())}>
      {mode === "light" ? <DarkModeOutlined /> : <LightModeOutlined />}
    </IconButton>
  );
};

export default ThemeSwitchButton;
