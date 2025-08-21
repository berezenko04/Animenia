import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense, useEffect } from "react";

// components
import AuthLayout from "./components/layouts/AuthLayout";
import LoginPage from "./pages/Login";
import { useAppDispatch } from "./redux/store";
import { refresh } from "./redux/auth/auth.actions";
import PublicRoute from "./components/providers/PublicRoute";
import PrivateRoute from "./components/providers/PrivateRoute";

const RegisterPage = lazy(() => import("@/pages/Register"));

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
