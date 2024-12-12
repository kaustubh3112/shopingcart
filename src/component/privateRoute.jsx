import { Outlet, useNavigate } from "react-router-dom";
import { useFireBase } from "../Context/Firebase";
import { useEffect } from "react";

const PrivateRoute = () => {
  const fireBase = useFireBase();
  const navigate = useNavigate();
  console.log(fireBase);
  useEffect(() => {
    !fireBase.isLoggedIn && navigate("/login");
  }, [fireBase.isLoggedIn, navigate]);

  return fireBase.isLoggedIn ? <Outlet /> : "";
};
export default PrivateRoute;
