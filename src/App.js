import React, { useState, useEffect } from "react";
// import peppersDb from "./fakeDb/pepperDb";
import Navbar from "./components/Navbar";
import PepperCardContainer from "./components/PepperCardContainer";
import axios from "axios";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [peppersDb, setPeppersDb] = useState([]);
  const [jwtToken, setJwtToken] = useState(undefined);
  const [allPeppers, setAllPeppers] = useState(false);
  // console.log(jwtToken);
  useEffect(() => {
    if (signedIn) {
      // console.log(window.localStorage.getItem("jwt"));
      setJwtToken(window.localStorage.getItem("jwt"));
      fetchPeppers();
    }
  }, [signedIn]);

  function fetchPeppers() {
    console.log("FETCH PEPPERS");
    // if (jwtToken && signedIn) {
    console.log(jwtToken);
    let url;
    if (allPeppers) {
      url = "http://localhost:4000/getpeppers";
    } else {
      url = "http://localhost:4000/getpeppersbyuser";
    }
    (async () => {
      try {
        const response = await axios.post(url, {
          jwt: window.localStorage.getItem("jwt")
        });
        console.log(response);
        setAllPeppers(!allPeppers);
        setPeppersDb([...response.data]);
      } catch (error) {
        console.log(error);
      }
    })();
    // }
  }

  // useEffect(() => {
  //   if (jwtToken && signedIn) callIt();
  // }, []);
  // useEffect(() => {
  //   (async function() {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:4000/getpeppersbyuser",
  //         {
  //           jwt: jwtToken
  //         }
  //       );
  //       console.log(response.data);
  //       setPeppersDb(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  // console.log(signedIn);
  // console.log(peppersDb);
  // console.log(jwtToken);
  console.log(allPeppers, " and ", peppersDb);

  return (
    <>
      <Navbar
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        allPeppers={allPeppers}
        fetchPeppers={fetchPeppers}
      />

      {
        <PepperCardContainer
          peppersDb={peppersDb}
          allPeppers={allPeppers}
          jwtToken={jwtToken}
          setPeppersDb={setPeppersDb}
        />
      }
    </>
  );
}

export default App;
