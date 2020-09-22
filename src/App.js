import React, { useState } from "react";
import peppersDb from "./fakeDb/pepperDb";
import PepperCard from "./components/PepperCard";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  console.log("signed in state", signedIn);

  return (
    <>
      <button onClick={() => setSignedIn(!signedIn)}>Toggle Sign In</button>
      <div style={styles.cardContainer}>
        {peppersDb.map(pepper => (
          <PepperCard pepper={pepper} />
        ))}
      </div>
    </>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap"
  }
};

export default App;
