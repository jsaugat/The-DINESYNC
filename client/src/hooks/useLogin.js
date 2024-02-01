import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true); // loading state during request
    setError(null); // reset the error on request
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      } else {
        setIsLoading(false);
        //? log the user in by updating the Auth Context
        dispatch({ type: "LOGIN", payload: json });
        //? save the user in localStorage
        localStorage.setItem("user", JSON.stringify(json))
      }
    } catch (error) {
      setError("Network or server error");
    }
  };

  return { login, error, isLoading };
};
