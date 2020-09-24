import React, { useState } from "react";
import PepperCard from "./PepperCard";

export default function PepperCardContainer({ peppersDb, allPeppers }) {
  const [expandedPepperId, setExpandedPepperId] = useState(undefined);
  console.log("expandedPepperId", expandedPepperId);
  if (allPeppers) {
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
  return <div>Show all peppers</div>;
}
const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap"
  }
};
