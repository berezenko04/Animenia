import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

// components
import AuthLayout from "./components/layouts/AuthLayout";

const RegisterPage = lazy(() => import("@/pages/Register"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>4
          <Route path="/">
            <Route path="/" />
            <Route path="/all" />
            <Route path="/by-genres" />

            <Route path="/profile" />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" />
          </Route>

          <Route path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
