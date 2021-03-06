import React, { useEffect, useState } from "react";
import axios from "axios";
import PepperCard from "./PepperCard";

export default function SharedPeppers({ jwtToken }) {
  const [sharedPeppers, setSharedPeppers] = useState([]);
  const [expandedPepperId, setExpandedPepperId] = useState(undefined);

  useEffect(() => {
    console.log("fetch the shared peppers");
    try {
      (async function() {
        const response = await axios.post(
          "http://localhost:4000/sharedpeppersbyuser",
          {
            jwt: jwtToken
          }
        );
        console.log(response);
        setSharedPeppers(response.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      SharedPeppers
      {sharedPeppers.map(pepper => {
        return (
          <PepperCard
            jwtToken={jwtToken}
            pepper={pepper}
            setExpandedPepperId={setExpandedPepperId}
            expandedPepperId={expandedPepperId}
          />
        );
      })}
    </>
  );
}
