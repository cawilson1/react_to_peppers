import React from "react";
import peppersDb from "./fakeDb/pepperDb";

const classes = {
  box: {
    position: "relative",
    width: "400px",
    padding: "50px",
    margin: "0 auto",
    backgroundColor: "#fff",
    webkitBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2) inset 0 0 50px rgba(0, 0, 0, 0.1)",
    mozBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px"
  }
};

function App() {
  console.log(peppersDb);
  return (
    <div style={classes.box}>
      <div>
        <img src={peppersDb[0].pic} alt="pepper" width="200 px" />
        {/* <div>{peppersDb[0].id}</div> */}
        <h1>{peppersDb[0].name}</h1>
      </div>
      <h3>{peppersDb[0].species}</h3>

      <div>{peppersDb[0].flavor}</div>
      <div>{peppersDb[0].scoville}</div>
      <div>{peppersDb[0].size}</div>
      <div>{peppersDb[0].growthTimeMonths}</div>
      <div>{peppersDb[0].color}</div>
    </div>
  );
}

export default App;
