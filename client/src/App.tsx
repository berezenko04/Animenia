import { BrowserRouter, Route, Routes } from "react-router";

// components
import AuthLayout from "./components/layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" />
          <Route path="/all" />
          <Route path="/by-genres" />

          <Route path="/profile" />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" />
          <Route path="/login" />
        </Route>

        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
