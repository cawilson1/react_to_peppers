import React from "react";
import PepperCard from "./PepperCard";

export default function PepperCardContainer({ peppersDb }) {
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
