import React, { useState } from "react";
import PepperCard from "./PepperCard";

export default function PepperCardContainer({ peppersDb }) {
  const [expandedPepperId, setExpandedPepperId] = useState(undefined);
  console.log("expandedPepperId", expandedPepperId);
  return (
    <div style={styles.cardContainer}>
      {peppersDb.map(pepper => (
        <PepperCard
          pepper={pepper}
          setExpandedPepperId={setExpandedPepperId}
          expandedPepperId={expandedPepperId}
        />
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
