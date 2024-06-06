import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handlegoogleLogin } from "../store/loginAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUrlParameter = (name) => {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    };
    const idToken = getUrlParameter("code");
    if (idToken) dispatch(handlegoogleLogin(idToken));
  }, []);

  return <h1>Under Construction</h1>;
};

export default Dashboard;
