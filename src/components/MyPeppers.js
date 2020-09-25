import React from "react";
import PepperCard from "./PepperCard"; //!!!!!!!!!!

export default function MyPeppers({
  peppersDb,
  styles,
  setExpandedPepperId,
  expandedPepperId,
  jwtToken
}) {
  //   console.log(jwtToken);
  console.log("MY PEPPER", peppersDb);
  return (
    <div style={styles.cardContainer}>
      {peppersDb &&
        peppersDb.map(pepper => (
          <PepperCard
          jwtToken={jwtToken}
            share={true}
            pepper={pepper}
            setExpandedPepperId={setExpandedPepperId}
            expandedPepperId={expandedPepperId}
          />
        ))}
    </div>
  );
}
