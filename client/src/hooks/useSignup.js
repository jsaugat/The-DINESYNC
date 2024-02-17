/* 
? STEPS:
? 1. make a post request with signup email and password    
? 2. get RESPONSE back
? 3. if successful RESPONSE, update the AuthContext to { use: email }, also, store jwt in the localstorage
? 
*/
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      } else {
        //? Save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));
        //? Update the auth context
        dispatch({ type: "LOGIN", payload: json });
      }
    } catch (error) {
      console.error("SHIT!! ERROR DURING SIGNUP:", error);
      setIsLoading(false);
      setError("Network or server error occurreddd");
    }
  };

  return { signup, isLoading, error };
  //? signup - signup
  //? isLoading - to disable signup button when it isLoading
  //? error - to display error
};
