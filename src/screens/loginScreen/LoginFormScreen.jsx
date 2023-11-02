import React, { useState, useContext } from "react";
import "./LoginFormScreen.css";
import { Stack, Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SnackbarContext } from "../../context/contexts";
import SnackbarComponenet from "../../components/snackbarComponent/SnackbarComponent";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& label.Mui-focused": {
      color: "#004080",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#004080",
      },
    },
  },
});

const LoginFormScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const {snackbarDetails, setSnackbarDetails}= useContext(SnackbarContext)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLoginChange = (e) => {
    if (e.target.name == "username") {
      setLoginDetails({ ...loginDetails, username: e.target.value });
    } else if (e.target.name == "password") {
      setLoginDetails({ ...loginDetails, password: e.target.value });
    }
  };

  const handleLoginSubmit = async () => {
    const { username, password } = loginDetails;
    if (username && password) {
      try {
        const response = await axios.post("http://192.168.29.46:3001/login", {
          username,
          password,
        });
        if (response.status == 200) {
          setSnackbarDetails({ open:true, data:response.message?response.message:"Logged In", type:"success"});
          // <SnackbarComponenet open={()=>setOpenSnackbar(true)}/>
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("isAuthenticated", true);
          navigate("/chooseform");
          setLoginDetails({ username: "", password: "" });
        } else {
          navigate("/login");
        }
      } catch (e) {
        setSnackbarDetails({open:true, data:e.message, type:"error"});
      }
    } else {
      console.log("plz fill the login form");
    }
  };

  return (
    <>
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Stack sx={{ p: 4 }} className="loginform">
          <p className="formheading">Sign In</p>
          <Stack spacing={3} sx={{ p: 3 }} className="loginfields">
            <TextField
              required
              id="username"
              className={classes.root}
              label="UserName"
              name="username"
              placeholder="Enter Username"
              value={loginDetails.username}
              onChange={handleLoginChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ cursor: "pointer" }}>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              id="password"
              className={classes.root}
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={loginDetails.password}
              onChange={handleLoginChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ cursor: "pointer" }}
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{ p: 1.5, backgroundColor: "#3085C3!important" }}
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default LoginFormScreen;
