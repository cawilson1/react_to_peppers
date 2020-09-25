import React, { useState, useEffect } from "react";
// import peppersDb from "./fakeDb/pepperDb";
import Navbar from "./components/Navbar";
import PepperCardContainer from "./components/PepperCardContainer";
import axios from "axios";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [peppersDb, setPeppersDb] = useState([]);
  const [jwtToken, setJwtToken] = useState(undefined);
  const [allPeppers, setAllPeppers] = useState(false);
  useEffect(() => {
    if (signedIn) {
      setJwtToken(window.localStorage.getItem("jwt"));
      fetchPeppers();
    }
  }, [signedIn]);

  function fetchPeppers() {
    console.log("FETCH PEPPERS");
    console.log(jwtToken);
    let url;
    if (allPeppers) {
      url = "http://localhost:4000/getpeppers";
    } else {
      url = "http://localhost:4000/getpeppersbyuser";
    }
    (async () => {
      try {
        const response = await axios.post(url, {
          jwt: window.localStorage.getItem("jwt")
        });
        console.log(response);
        setAllPeppers(!allPeppers);
        setPeppersDb([...response.data]);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <>
      <Navbar
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        allPeppers={allPeppers}
        fetchPeppers={fetchPeppers}
      />

      {
        <PepperCardContainer
          peppersDb={peppersDb}
          allPeppers={allPeppers}
          jwtToken={jwtToken}
          setPeppersDb={setPeppersDb}
        />
      }
    </>
  );
}

export default App;
