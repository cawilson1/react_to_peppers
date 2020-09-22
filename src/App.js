import React from "react";
import peppersDb from "./fakeDb/pepperDb";
import PepperCard from "./components/PepperCard";

function App() {
  return (
    <div style={styles.cardContainer}>
      {peppersDb.map(pepper => (
        <PepperCard pepper={pepper} />
      ))}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap"
  }
};

export default App;
