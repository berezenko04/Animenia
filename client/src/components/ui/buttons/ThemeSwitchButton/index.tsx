import { IconButton } from "@mui/material";
import { useState } from "react";

// icons
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const ThemeSwitchButton: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<"day" | "night">("day");

  const handleChangeTheme = () => {
    setCurrentTheme(currentTheme === "day" ? "night" : "day");
  };

  return (
    <IconButton onClick={handleChangeTheme}>
      {currentTheme === "day" ? <DarkModeOutlined /> : <LightModeOutlined />}
    </IconButton>
  );
};

export default ThemeSwitchButton;
