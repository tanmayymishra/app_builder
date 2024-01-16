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
  LoaderContext,
  StepContext,
} from "../../context/contexts";
import LogoutComponent from "../../components/logout/LogoutComponent";
import { base_url } from "../../Config";
import DeviceEditInfoParsers from "./DeviceEditInfoParser";
import FeaturesEditInfoParsers from "./FeaturesEditInfoParser";

const EditForm = () => {
  const { buildDetails, setBuildDetails } = useContext(BuildContext);
  const { setInitialEditForm } = useContext(InitialFormContext);
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);
  const { activeStep, setActiveStep } = useContext(StepContext);
  const [appData, setAppData] = useState();
  const [versionData, setVersionData] = useState();
  const [buildIdData, setBuildIdData] = useState();

  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    getApps();
    setActiveStep(0);
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
          setVersionData(res.data.data);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          setSnackbarDetails({
            open: true,
            data: e.message ? e.message : "Network Error",
            type: "error",
          });
        });
      axios
        .get(`${base_url}/build?appname=${buildDetails.app}`, {
          headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        })
        .then((res) => {
          setBuildIdData(res.data.data);
        })

        .catch((e) => {
          setLoading(false);
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
      setLoading(true);
      const res = await axios.get(`${base_url}/apps/`, {
        headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
      });
      if (res) {
        setAppData(res.data.data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setSnackbarDetails({
        open: true,
        data: e.message ? e.message : "Can't Fetch Apps",
        type: "error",
      });
    }
    // const res = await axios.get("http://192.168.29.48:3001/apps/", {
    //   headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
    // });
    // setAppData(res?.data.data);
  };
  const handleSelectBuildId = (e) => {
    setLoading(true);
    setBuildDetails((prev) => ({ ...prev, buildId: e.target.value }));
    axios
      .get(
        `${base_url}/build?appname=${buildDetails.app}&buildid=${e.target.value}`,
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
        let pasrsedValues = DeviceEditInfoParsers(res.data.data.buildconfig);
        console.log("Parsed Values In Edit..", pasrsedValues);
        console.log("Build details..", buildDetails);
        let newParsedValues = FeaturesEditInfoParsers(pasrsedValues);
        setInitialEditForm(newParsedValues);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setSnackbarDetails({
          open: true,
          data: e.message ? e.message : "Can't Fetch Current Version",
          type: "error",
        });
      });
  };

  return (
    <div className="editFormContainer">
      <LogoutComponent />
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
            <Link to="/form" style={{ color: "white" }}>
              <Button
                className="editButton"
                variant="contained"
                disabled={!buildDetails.version && !buildDetails.buildId}
                sx={{
                  backgroundColor: "#29242c",
                  "&:hover": {
                    backgroundColor: "rgba(41, 36, 44, 0.8)",
                  },
                }}
              >
                Start Editing
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/* </div> */}
      </section>
    </div>
  );
};

export default EditForm;
