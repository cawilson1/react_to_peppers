import React, { useState } from "react";
import peppersDb from "./fakeDb/pepperDb";
import Navbar from "./components/Navbar";
import PepperCardContainer from "./components/PepperCardContainer";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      <PepperCardContainer peppersDb={peppersDb} />
    </>
  );
}

export default App;
