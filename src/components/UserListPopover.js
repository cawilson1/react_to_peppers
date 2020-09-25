import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

function sharePepper(token, userToShare, pepperId) {
  try {
    (async function() {
      const response = await axios.post("http://localhost:4000/sharepepper", {
        jwt: token,
        user: userToShare,
        pepperid: pepperId
      });
      console.log(response);
    })();
  } catch (error) {
    console.log(error);
  }
}

export default function UserListPopoverPopover({ users, jwtToken, pepperId }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   console.log(jwtToken);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        {users.map(user => (
          <Typography
            onClick={() => sharePepper(jwtToken, user.username, pepperId)}
            className={classes.typography}
          >
            {user.username}
          </Typography>
        ))}
      </Popover>
    </div>
  );
}
