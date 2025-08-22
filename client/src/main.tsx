import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

// app
import App from "./App.tsx";

// theme
import theme from "./theme.ts";

// store
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position="top-center" toastOptions={{ style: { maxWidth: 600 } }} />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
