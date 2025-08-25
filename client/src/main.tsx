import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ReactLenis } from "@studio-freight/react-lenis";

// styles
import "swiper/css";

// app
import App from "./App.tsx";

// theme
import theme from "./theme.ts";

// store
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position="top-center" toastOptions={{ style: { maxWidth: 600 } }} />
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true,
          }}
        >
          <App />
        </ReactLenis>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
