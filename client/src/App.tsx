import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import { useAppDispatch } from "./redux/store";

// components
import AuthLayout from "./components/layouts/AuthLayout";
import PublicRoute from "./components/providers/PublicRoute";
import PrivateRoute from "./components/providers/PrivateRoute";
import PrimaryLayout from "./components/layouts/PrimaryLayout";

// redux
import { refresh } from "./redux/auth/auth.actions";
import MoviePage from "./pages/Movie";

const RegisterPage = lazy(() => import("@/pages/Register"));
const LoginPage = lazy(() => import("@/pages/Login"));
const HomePage = lazy(() => import("@/pages/Home"));
const AllAnimePage = lazy(() => import("@/pages/All"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PrimaryLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/all" element={<AllAnimePage />} />
            <Route path="/by-genres" />
            <Route path="/movies/:slug" element={<MoviePage />} />

            <Route element={<PrivateRoute />}>
              <Route path="/profile" />
            </Route>
          </Route>

          <Route element={<AuthLayout />}>
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Route>

          <Route path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
