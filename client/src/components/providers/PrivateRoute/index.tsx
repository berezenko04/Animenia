import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

// components
import Loader from "@/components/ui/Loader";

// redux
import { authSelector } from "@/redux/auth/auth.selectors";
import { fetchMe } from "@/redux/user/user.actions";

// types
import { Statuses } from "@/types/enums.types";

const PrivateRoute: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, status } = useSelector(authSelector);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchMe());
    }
  }, [isAuth, dispatch]);

  if (status === Statuses.LOADING) return <Loader />;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
