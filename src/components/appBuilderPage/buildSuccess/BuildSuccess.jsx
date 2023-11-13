import React, { useContext, useState } from "react";
import "./BuildSuccess.css";
import { Typography, Grid, Tooltip, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  LoaderContext,
  BuildContext,
  SnackbarContext,
} from "../../../context/contexts";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import {base_url} from "../../../Config";

const useStyles = makeStyles({
  buildIdHeading: {
    backgroundColor: "#ffff1a",
  },
});

function BuildSuccess() {
  const classes = useStyles();
  const [status, setStatus] = useState(false);
  const { setLoading } = useContext(LoaderContext);
  const { buildDetails, setBuildDetails } = useContext(BuildContext);
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);

  const FileDownload = require("js-file-download");
  const handleRefresh = () => {
    setLoading(true);
    try {
      axios
        .get(
          `${base_url}/build?appname=${buildDetails.app}&buildid=${buildDetails.newBuildId}`,
          {
            headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
          }
        )
        .then((res) => {
          setStatus(res.data.data.BuildStatus);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      setSnackbarDetails({
        open: true,
        data: error.message ? error.message : "Network Error",
        type: "error",
      });
    }
  };
  const handleDownload = () => {
    setLoading(true);
    try {
      axios({
        // url: `http://15.206.158.9:3001/build/download?appname=EVApp&buildid=c264c03a-9707-4bce-b131-3e5fd3f5fefe`,
        url: `${base_url}/build/download?appname=${buildDetails.app}&buildid=${buildDetails.newBuildId}`,
        method: "GET",
        timeout:300000,
        headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        responseType: "blob", // Important
      })
        .then((response) => {
          FileDownload(response.data, "build.zip");
          // setTimeout(() => {
          //   setLoading(false);
          // }, 4000);
        })
        .catch((e) => {
          setLoading(false);
          setSnackbarDetails({
            open: true,
            data: e.message ? e.message : "Failed to Download",
            type: "error",
          });
        });
   
    } catch (e) {
      setLoading(false);
      setSnackbarDetails({
        open: true,
        data: e.message ? e.message : "Failed to Download",
        type: "error",
      });
    }
  };

  const handleDownloadApk = () => {
    setLoading(true);
    try {
      axios({
        url: `${base_url}/build/download/apk?appname=${buildDetails.app}&buildid=${buildDetails.newBuildId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        responseType: "blob", // Important
      })
        .then((response) => {
          FileDownload(response.data, "build.zip");
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  };


  return (
    <React.Fragment>
      <div className="buildContainer">
        <Typography variant="h4" gutterBottom>
          Your App Has Been Build Successfully.
        </Typography>
        <Typography variant="h6">
          Build ID -
          <span className={classes.buildIdHeading}>
            {buildDetails.newBuildId}
          </span>
        </Typography>

        {/* <Tooltip title="Check Status">
          <IconButton
            aria-label="download"
            size="large"
            color="primary"
            onClick={handleRefresh}
          >
       
            <RefreshIcon />
          </IconButton> 
        </Tooltip> */}

        <Button
          sx={{ borderRadius: 10 }}
          variant="contained"
          color="secondary"
          startIcon={<RefreshIcon />}
          onClick={handleRefresh}
        >
          Check Status
        </Button>
        <h4>{status && status === "Inprogress" ? "In Progress" : status}</h4>
        <Stack direction="row" spacing={3}>
          {status === "Success" && (
            <Button
              sx={{ borderRadius: 10 }}
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
            >
              Download Build
            </Button>
          )}
          {status === "Success" && (
            <Button
              sx={{ borderRadius: 10 }}
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadApk}
            >
              Download APK
            </Button>
          )}
        </Stack>
      </div>
    </React.Fragment>
  );
}

export default BuildSuccess;
