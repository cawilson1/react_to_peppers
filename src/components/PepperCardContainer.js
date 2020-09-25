import React, { useState } from "react";
import PepperCard from "./PepperCard";
import MyPeppers from "./MyPeppers";

export default function PepperCardContainer({
  peppersDb,
  allPeppers,
  jwtToken
}) {
  const [expandedPepperId, setExpandedPepperId] = useState(undefined);
  if (!allPeppers) {
    return (
      <div style={styles.cardContainer}>
        {peppersDb.map((pepper, index) => (
          <PepperCard
            jwtToken={jwtToken}
            key={index}
            pepper={pepper}
            setExpandedPepperId={setExpandedPepperId}
            expandedPepperId={expandedPepperId}
          />
        ))}
      </div>
    );
  } else {
    return (
      <MyPeppers
        jwtToken={jwtToken}
        styles={styles}
        peppersDb={peppersDb}
        setExpandedPepperId={setExpandedPepperId}
        expandedPepperId={expandedPepperId}
      />
    );
  }
}
const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap"
  }
};
