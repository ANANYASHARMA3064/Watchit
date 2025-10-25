import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
    >
      Log In
    </button>
  );
};

export default LoginButton;
