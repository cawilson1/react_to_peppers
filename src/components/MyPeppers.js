import React from "react";
import PepperCard from "./PepperCard"; //!!!!!!!!!!
import Divider from "@material-ui/core/Divider";
import SharedPeppers from "./SharedPeppers";

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
    <>
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
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <br />
      <br />
      <br />
      <br />
      <SharedPeppers jwtToken={jwtToken} />
    </>
  );
}
