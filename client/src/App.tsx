import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import { useAppDispatch } from "./redux/store";

// components
import AuthLayout from "./components/layouts/AuthLayout";
import PublicRoute from "./components/providers/PublicRoute";
import PrivateRoute from "./components/providers/PrivateRoute";

// redux
import { refresh } from "./redux/auth/auth.actions";

const RegisterPage = lazy(() => import("@/pages/Register"));
const LoginPage = lazy(() => import("@/pages/Login"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route path="/" />
            <Route path="/all" />
            <Route path="/by-genres" />

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
