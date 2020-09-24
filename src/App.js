import React, { useState, useEffect } from "react";
// import peppersDb from "./fakeDb/pepperDb";
import Navbar from "./components/Navbar";
import PepperCardContainer from "./components/PepperCardContainer";
import axios from "axios";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [peppersDb, setPeppersDb] = useState([]);
  const [jwtToken, setJwtToken] = useState(undefined);

  useEffect(() => {
    setJwtToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJlbiIsImlhdCI6MTYwMDk2MjM1Mn0.-SIe_o49FGm0CR1bKo3FhpeuiLnxUIDdteXMZ3WIY4w"
    );
  }, []);

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
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      <PepperCardContainer peppersDb={peppersDb} />
    </>
  );
}

export default App;
