import React from "react";
import peppersDb from "./fakeDb/pepperDb";

function App() {
  console.log(peppersDb);
  return (
    <div>
      <img src={peppersDb[0].pic} alt="pepper" width="200 px" />
      <div>{peppersDb[0].id}</div>
      <h1>{peppersDb[0].name}</h1>
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
