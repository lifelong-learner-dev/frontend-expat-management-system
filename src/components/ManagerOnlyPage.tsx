import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

export default function useManagerOnlyPage() {
  const { user, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
        if (user?.is_expat) {
          navigate("/expathome");
        } else if (user?.is_supporter) {
          navigate("/supporterhome");
        }
      }
  }, [userLoading, user, navigate]);
  return;
}