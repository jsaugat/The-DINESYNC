import { useAuthContext } from "./useAuthContext.js";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //? remove "user" from localstorage
    localStorage.removeItem("user");
    //? dispatch "LOGOUT" action type
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
