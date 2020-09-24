import React, { useState } from "react";
import axios from "axios";

async function attemptLogin(un, pw, setSignedIn, signedIn) {
  try {
    if (signedIn) {
      window.localStorage.setItem("jwt", "");
      setSignedIn(false);
      return;
    }

    const response = await axios.post("http://localhost:4000/login", {
      username: un,
      password: pw
    });
    console.log(response);
    if (response.data.jwt) {
      setSignedIn(true);
      window.localStorage.setItem("jwt", response.data.jwt);
    }
  } catch (error) {
    console.log(error);
  }
}
export default function Navbar({
  signedIn,
  setSignedIn,
  setAllPeppers,
  allPeppers
}) {
  const defaultValue = {
    un: "",
    pw: ""
  };
  const [signInForm, setSignInForm] = useState(defaultValue);

  // console.log(signInForm);
  return (
    <>
      Username:
      <input
        value={signInForm.un}
        onChange={event =>
          setSignInForm({ ...signInForm, un: event.target.value })
        }
      />
      Password:
      <input
        value={signInForm.pw}
        onChange={event =>
          setSignInForm({ ...signInForm, pw: event.target.value })
        }
        type="password"
      />
      <button
        onClick={() => {
          attemptLogin(signInForm.un, signInForm.pw, setSignedIn, signedIn);
          setSignInForm({ ...defaultValue });
        }}
      >
        {signedIn ? "Sign Out" : "Sign In"}
      </button>
      <button onClick={() => setAllPeppers(!allPeppers)}>
        {allPeppers ? "Show only my peppers" : "Show all peppers"}
      </button>
    </>
  );
}
