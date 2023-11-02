import React, { useEffect, useState, useContext } from "react";
import "./EditForm.css";
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
  InitialFormContext,
  SnackbarContext,
} from "../../context/contexts";

const EditForm = () => {
  const { buildDetails, setBuildDetails } = useContext(BuildContext);
  const { setInitialEditForm } = useContext(InitialFormContext);
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);
  const [appData, setAppData] = useState();
  const [versionData, setVersionData] = useState();
  const [buildIdData, setBuildIdData] = useState();
  // const [loading, setLoading]= useState(false)
  useEffect(() => {
    getApps();
  }, []);

  useEffect(() => {
    // setLoading(true)
    if (buildDetails.app.length > 0) {
      const baseUrl = `http://192.168.29.48:3001/apps/versions?appname=${buildDetails.app}`;
      console.log(baseUrl, "appsssss");
      axios
        .get(baseUrl, {
          headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        })
        .then((res) => {
          setVersionData(res.data.data);
        })
        .catch((e) => {
          setSnackbarDetails({
            open: true,
            data: e.message ? e.message : "Network Error",
            type: "error",
          });
        });
      axios
        .get(`http://192.168.29.48:3001/build?appname=${buildDetails.app}`, {
          headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        })
        .then((res) => {
          setBuildIdData(res.data.data);
        })
        .catch((e) => {
          setSnackbarDetails({
            open: true,
            data: e.message ? e.message : "Network Error",
            type: "error",
          });
        });
    }
  }, [buildDetails.app]);

  const getApps = async () => {
    try {
      const res = await axios.get("http://192.168.29.48:3001/apps/", {
        headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
      });
      if (res) {
        setAppData(res.data.data);
      }
    } catch (e) {
      console.log("error value getApps...",e);
      setSnackbarDetails({
        open: true,
        data: e.message ? e.message : "Can't Fetch Apps",
        type: "error",
      });
    }
  };
  const handleSelectBuildId = (e) => {
    setBuildDetails((prev) => ({ ...prev, buildId: e.target.value }));
    axios
      .get(
        `http://192.168.29.48:3001/build?appname=${buildDetails.app}&buildid=${e.target.value}`,
        {
          headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        }
      )
      .then((res) => {
        // setBuildConfig(res.data.data);
        setBuildDetails((prev) => ({
          ...prev,
          version: res.data.data.version,
        }));
        setInitialEditForm(res.data.data.buildconfig);
        console.log(res.data.data.buildconfig, "resssssssss");
      })
      .catch((e) => {
        console.log("error value",e);
        setSnackbarDetails({
          open: true,
          data: e.message ? e.message : "Can't Fetch Current Version",
          type: "error",
        });
      });
  };

  return (
    <div className="editFormContainer">
      <section className="section">
        <h1>SELECT YOUR APP</h1>
        {/* <div className="buttonsContainer"> */}
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} xm={6} sx={{ maxWidth: "100% !important" }}>
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
              <InputLabel id="buildId-label">Select Build ID</InputLabel>
              <Select
                labelId="buildId-label"
                id="select-buildId"
                value={buildDetails.buildId}
                label="Select Version"
                disabled={!buildIdData}
                onChange={(e) => handleSelectBuildId(e)}
              >
                {buildIdData?.map((item, index) => (
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

          <Grid item xs={12} xm={6}>
            <Button
              className="editButton"
              variant="contained"
              disabled={!buildDetails.version}
              sx={{
                backgroundColor: "#29242c",
                "&:hover": {
                  backgroundColor: "rgba(41, 36, 44, 0.8)",
                },
              }}
            >
              <Link to="/form" style={{ color: "white" }}>
                Start Editing
              </Link>
            </Button>
          </Grid>
        </Grid>
        {/* </div> */}
      </section>
    </div>
  );
};

export default EditForm;
