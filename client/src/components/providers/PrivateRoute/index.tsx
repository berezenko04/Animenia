import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

// components
import Loader from "@/components/ui/loaders/Loader";

// redux
import { authSelector } from "@/redux/auth/auth.selectors";

const PrivateRoute: React.FC = () => {
  const { isAuth, initialized } = useSelector(authSelector);

  if (!initialized) return <Loader />;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
