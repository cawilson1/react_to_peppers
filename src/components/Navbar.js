import React from "react";

export default function Navbar({ signedIn, setSignedIn }) {
  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "Sign Out" : "Sign In"}
    </button>
  );
}
