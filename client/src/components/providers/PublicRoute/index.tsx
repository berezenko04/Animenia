import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

// components
import Loader from "@/components/ui/Loader";

// types
import { Statuses } from "@/types/enums.types";

// redux
import { authSelector } from "@/redux/auth/auth.selectors";

const PublicRoute = () => {
  const { isAuth, status } = useSelector(authSelector);

  if (status === Statuses.LOADING) {
    return <Loader />;
  }

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
