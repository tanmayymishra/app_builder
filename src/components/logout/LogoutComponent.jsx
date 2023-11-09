import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { SnackbarContext } from "../../context/contexts";

const useStyles = makeStyles({
  logoutbtn: {
    position: "absolute",
    top: "1rem",
    right: "2rem",
    color: "#ffffff !important",
    width: "130px",
  },
  logoutButton: {
    "&:hover": {
      border: "1px solid #ffffff !important",
    },
  },
  logouttext: {
    marginLeft: "0.4rem",
  },
});

function LogoutComponent() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuthenticated");
    if (
      !localStorage.getItem("isAuthenticated") &&
      !localStorage.getItem("username") &&
      !localStorage.getItem("password")
    ) {
      navigate("/login");
      setSnackbarDetails({
        open: true,
        data: "Logout SuccessFully",
        type: "success",
      });
    }
  };

  return (
    <>
      <Stack className={classes.logoutbtn}>
        <Button
          variant="outlined"
          sx={{ color: "#ffffff", border: "none" }}
          onClick={handleLogout}
          className={classes.logoutButton}
        >
          <LogoutIcon /> <span className={classes.logouttext}>Logout</span>
        </Button>
      </Stack>
    </>
  );
}

export default LogoutComponent;
