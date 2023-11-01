import React, { useState, useEffect } from "react";
import "./LoginFormScreen.css";
import { Stack, Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginFormScreen = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

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
        console.log("login response", response);
        if (response.status == 200) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("isAuthenticated", true);
          console.log("Login Successful...");
          navigate("/newform");
          console.log("select form navigate");
          setLoginDetails({ username: "", password: "" });
        } else {
          console.log("Login Failed...");
          navigate("/login");
        }
      } catch (e) {
        console.log("login error", e);
      }
    } else {
      console.log("plz fill the login form");
    }
  };

  console.log("login form", loginDetails);
  return (
    <>
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Stack sx={{ p: 4 }} className="loginform">
          <p className="formheading">Sign In</p>
          <Stack spacing={3} sx={{ p: 3 }} className="loginfields">
            <TextField
              required
              id="username"
              label="UserName"
              name="username"
              placeholder="Enter Username"
              value={loginDetails.username}
              onChange={handleLoginChange}
            />
            <TextField
              required
              id="password"
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={loginDetails.password}
              onChange={handleLoginChange}
            />
            <Button variant="contained" onClick={handleLoginSubmit}>
              Login
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default LoginFormScreen;
