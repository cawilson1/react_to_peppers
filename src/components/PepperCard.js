import React from "react";

export default function PepperCard({ pepper }) {
  return (
    <div style={styles.box}>
      <div style={styles.cardHeader}>
        <img src={pepper.pic} alt="pepper" width="200 px" />
        <div>{pepper.id}</div>{" "}
        <div>
          <h1>{pepper.name}</h1>
          <h3>{pepper.species}</h3>
        </div>
      </div>
      <br />

      <div>{pepper.flavor}</div>
      <div>{pepper.scoville}</div>
      <div>{pepper.size}</div>
      <div>{pepper.growthTimeMonths}</div>
      <div>{pepper.color}</div>
    </div>
  );
}

const styles = {
  box: {
    position: "relative",
    width: "400px",
    padding: "50px",
    margin: "10px",
    backgroundColor: "#fff",
    webkitBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2) inset 0 0 50px rgba(0, 0, 0, 0.1)",
    mozBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px"
  },
  cardHeader: {
    display: "flex"
  }
};
