import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, user} = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
        >
          Log In
        </button>
      ) : (
       <div className="flex items-center gap-4">
          <span className="text-white font-semibold">Hi, {user.name}!</span>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
          >
            Log Out
          </button>
        </div>
      )}
    </>
  );
};

export default LoginButton;
