import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ReactLenis } from "@studio-freight/react-lenis";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";

// app
import App from "./App.tsx";

// redux
import { themeSelector } from "./redux/theme/theme.selectors.ts";

// store
import { store } from "./redux/store.ts";

// theme
import getTheme from "./theme.ts";

const queryClient = new QueryClient();

const RootApp = () => {
  const { mode } = useSelector(themeSelector);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RootApp />
  </Provider>
);
