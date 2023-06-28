import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

export default function useManagerOnlyPage() {
  const { user, isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading && !isLoggedIn) {
      navigate("/");
    }  else if (isLoggedIn) {
      if (user?.is_manager) {
      } else if (user?.is_expat) {
        navigate("/expathome");
      } else if (user?.is_supporter) {
        navigate("/supporterhome");
      }
    }
  }, [userLoading, isLoggedIn, user, navigate]);
  return;
}