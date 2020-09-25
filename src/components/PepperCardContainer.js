import React, { useState, useEffect } from "react";
import PepperCard from "./PepperCard";
import MyPeppers from "./MyPeppers";
import axios from "axios";

export default function PepperCardContainer({
  peppersDb,
  allPeppers,
  jwtToken,
  setPeppersDb
}) {
  const [expandedPepperId, setExpandedPepperId] = useState(undefined);
  if (allPeppers) {
    return (
      <div style={styles.cardContainer}>
        {peppersDb.map((pepper, index) => (
          <PepperCard
            key={index}
            pepper={pepper}
            setExpandedPepperId={setExpandedPepperId}
            expandedPepperId={expandedPepperId}
          />
        ))}
      </div>
    );
  } else {
    // return (
    // <div style={styles.cardContainer}>
    //   {peppersDb &&
    //     peppersDb.map(pepper => (
    //       <PepperCard
    //         pepper={pepper}
    //         setExpandedPepperId={setExpandedPepperId}
    //         expandedPepperId={expandedPepperId}
    //       />
    //     ))}
    // </div>
    // );
    return (
      <MyPeppers
        // jwtToken={jwtToken}
        styles={styles}
        peppersDb={peppersDb}
        setExpandedPepperId={setExpandedPepperId}
        expandedPepperId={expandedPepperId}
        // setPeppersDb={setPeppersDb}
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
