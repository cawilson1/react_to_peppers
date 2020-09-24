import React, { useState, useEffect } from "react";
// import peppersDb from "./fakeDb/pepperDb";
import Navbar from "./components/Navbar";
import PepperCardContainer from "./components/PepperCardContainer";
import axios from "axios";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [peppersDb, setPeppersDb] = useState([]);
  const [jwtToken, setJwtToken] = useState(undefined);
  const [allPeppers, setAllPeppers] = useState(true);

  useEffect(() => {
    console.log(window.localStorage.getItem("jwt"));
    setJwtToken(window.localStorage.getItem("jwt"));
    if (!signedIn) setPeppersDb([]);
  }, [signedIn]);

  useEffect(() => {
    if (!jwtToken) return;
    (async () => {
      try {
        const response = await axios.post("http://localhost:4000/getpeppers", {
          jwt: jwtToken
        });
        console.log(response);
        setPeppersDb(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [jwtToken]);

  return (
    <>
      <Navbar
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        setAllPeppers={setAllPeppers}
        allPeppers={allPeppers}
      />

      <PepperCardContainer peppersDb={peppersDb} allPeppers={allPeppers} />
    </>
  );
}

export default App;
