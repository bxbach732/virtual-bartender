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
  const signin = async (email, phone) => {
    const query = "?email=" + email + "&phone=" + phone;
    const response = await getURL("user/id" + query);
    const jsonres = await response.json();
    setUser(jsonres);
    return jsonres;
  };

  //Save the user to state
  const signup = async (email, phone) => {
    const body = {
      email: email,
      phone: phone,
      isAdmin: false,
    };
    const response = await postURL("user", body);
    const jsonres = await response.json();
    setUser(jsonres._id);
    return jsonres._id;
  };

  const signout = () => {
    setUser(false);
    navigate("/");
  };

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
  };
}
