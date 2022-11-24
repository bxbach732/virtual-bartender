//Auth hook from: https://usehooks.com/useAuth/
import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getURL, postURL } from "./tools";

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //Save the user to state.
  const sendotp = async (email) => {
    const body = {
      email: email,
    };
    const response = await postURL("/auth/login", body);
    const jsonres = await response.json();
    console.log(jsonres);
    return jsonres;
  };

  const checkotp = async (email, otp) => {
    const body = {
      email: email,
      otp: otp,
    };
    const response = await postURL("/auth/authenticate", body);
    const jsonres = await response.json();
    if (jsonres.access_token) {
      const profile = await getprofile(jsonres.access_token);
      return jsonres;
    } else {
      return false;
    }
  };

  const getprofile = async (token) => {
    const headers = {
      Authorization: "Bearer " + token,
    };
    const response = await getURL("/auth/profile", headers);
    if (response.status == 401) return false;
    const jsonres = await response.json();
    console.log(jsonres.sub);
    if (jsonres.email) {
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("user", jsonres.sub.split("|")[1]);
      setUser(jsonres.sub.split("|")[1]);
      navigate("/");
    }
  };

  const signout = () => {
    setUser(false);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    navigate("/");
  };

  // Return the user object and auth methods
  return {
    user,
    sendotp,
    getprofile,
    checkotp,
    signout,
  };
}
