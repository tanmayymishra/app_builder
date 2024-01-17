import React, { useEffect, useState, useContext } from "react";
import "./NewForm.css";
import {
  Button,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BuildContext,
  SnackbarContext,
  LoaderContext,
} from "../../context/contexts";
import LogoutComponent from "../../components/logout/LogoutComponent";
import {base_url} from "../../Config";
import { useNavigate } from "react-router-dom";

const NewForm = () => {
  const [appData, setAppData] = useState();
  const [versionData, setVersionData] = useState();
  const { buildDetails, setBuildDetails } = useContext(BuildContext);
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);
  const { setLoading } = useContext(LoaderContext);
  const navigate = useNavigate();

  useEffect(() => {
    let appFormVisited = localStorage.getItem("formVisited");
    if(appFormVisited){
     localStorage.removeItem("formVisited");
     navigate("/chooseform");
    }
   },[localStorage.getItem("formVisited")])

  useEffect(() => {
    getApps();
    
  }, []);

  useEffect(() => {
    if (buildDetails.app.length > 0) {
      setLoading(true);
      const baseUrl = `${base_url}/apps/versions?appname=${buildDetails.app}`;
      axios
        .get(baseUrl, {
          headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        })
        .then((res) => {
          setLoading(false);
          setVersionData(res.data.data);
        })
        .catch((error) => {
          setLoading(false);
          setSnackbarDetails({
            open: true,
            data: error.message ? error.message : "Server Error",
            type: "error",
          });
        });
    }
  }, [buildDetails.app]);

  const getApps = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${base_url}/apps/`, {
        headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
      });
      if (res.status == 200) {
        setLoading(false);
        setAppData(res.data.data);
      }
    } catch (error) {
      setLoading(false);
      setSnackbarDetails({
        open: true,
        data: error.message ? error.message : "Server Error",
        type: "error",
      });
    }
    // const res = await axios.get("http://192.168.29.48:3001/apps/", {
    //   headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
    // });
  };
  return (
    <div className="newFormContainer">
      <LogoutComponent />
      <section className="section">
        <h1>BUILD A NEW APP</h1>
        {/* <div className="buttonsContainer"> */}
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} xm={6}>
            <FormControl fullWidth>
              <InputLabel id="app-label">Select APP</InputLabel>
              <Select
                labelId="app-label"
                id="select-app"
                value={buildDetails.app}
                label="Select APP"
                onChange={(e) =>
                  setBuildDetails((prev) => ({ ...prev, app: e.target.value }))
                }
              >
                {appData?.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} xm={6}>
            <FormControl fullWidth>
              <InputLabel id="version-label">Select Version</InputLabel>
              <Select
                labelId="version-label"
                id="select-version"
                value={buildDetails.version}
                label="Select Version"
                disabled={!versionData}
                onChange={(e) =>
                  setBuildDetails((prev) => ({
                    ...prev,
                    version: e.target.value,
                  }))
                }
              >
                {versionData?.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} xm={6}>
          <Link to="/form" style={{ color: "white" }}>
            <Button
              className="newButton"
              variant="contained"
              disabled={!buildDetails.version}
              sx={{
                backgroundColor: "#29242c",
                "&:hover": {
                  backgroundColor: "rgba(41, 36, 44, 0.8)",
                },
              }}
            >
              Start Building
            </Button>
          </Link>
        </Grid>
        {/* </div> */}
      </section>
    </div>
  );
};

export default NewForm;
