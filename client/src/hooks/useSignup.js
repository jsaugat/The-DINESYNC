import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const dispatch = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null); // reset the error to be null on each request

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const jsonResponse = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(jsonResponse.error);
    }
    if (response.ok) {
      //? save the user in local storage
      localStorage.setItem("user", JSON.stringify(jsonResponse));
      //? update the auth Context
      dispatch({ type: "LOGIN", payload: jsonResponse });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
