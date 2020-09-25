import React, { useEffect, useState } from "react";
import ShareIcon from "@material-ui/icons/Share";
import axios from "axios";
import UserListPopover from "./UserListPopover";

function isExpandedPepper(currentPepperId, expandedPepperId) {
  return currentPepperId === expandedPepperId;
}

export default function PepperCard({
  pepper,
  setExpandedPepperId,
  expandedPepperId,
  share,
  jwtToken,
  user
}) {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    console.log("inside use effect");
    if (share) {
      (async function() {
        try {
          const response = await axios.get("http://localhost:4000/allusers");
          setUserList(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  console.log(user);

  return (
    <>
      <div
        onClick={() =>
          isExpandedPepper(pepper.id, expandedPepperId)
            ? setExpandedPepperId(undefined)
            : setExpandedPepperId(pepper.id)
        }
        style={
          isExpandedPepper(pepper.id, expandedPepperId)
            ? styles.expandedBox
            : styles.box
        }
      >
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
        <div>{user ? user : pepper.user}</div>
      </div>
      {share ? (
        <button>
          <ShareIcon />
          <UserListPopover
            pepperId={pepper.id}
            jwtToken={jwtToken}
            users={userList}
          />
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = {
  box: {
    position: "relative",
    width: "400px",
    padding: "50px",
    margin: "10px",
    backgroundColor: "#fff",
    WebkitBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2) inset 0 0 50px rgba(0, 0, 0, 0.1)",
    MozBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px"
  },
  expandedBox: {
    position: "relative",
    width: "800px",
    height: "900px",
    padding: "50px",
    margin: "10px",
    backgroundColor: "#fff",
    WebkitBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2) inset 0 0 50px rgba(0, 0, 0, 0.1)",
    MozBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px"
  },
  cardHeader: {
    display: "flex"
  }
};
