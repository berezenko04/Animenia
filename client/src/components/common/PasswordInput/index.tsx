import { useState } from "react";
import { IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material";

// icons
import { LockOpenOutlined, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

type PasswordInputProps = TextFieldProps & {
  value: string;
  setValue: (v: string) => void;
  readOnly?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ value, setValue, error, readOnly, helperText, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((show) => !show);

  return (
    <TextField
      {...rest}
      size="small"
      type={showPassword ? "text" : "password"}
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          readOnly,
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenOutlined />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: "pointer" }}>
              {value.length > 0 && (
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                </IconButton>
              )}
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default PasswordInput;
