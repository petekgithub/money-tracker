import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      await projectAuth.signOut();

      //dispatch logout action
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setError(null);
    } catch (error) {
      console.log(error.message || error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
