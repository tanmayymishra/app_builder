import React, { useContext, useState } from "react";
import "./BuildSuccess.css";
import { Typography, Grid, Tooltip, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { LoaderContext, BuildContext } from "../../../context/contexts";
import axios from "axios";

function BuildSuccess() {
  const [status, setStatus] = useState(false);
  const { setLoading } = useContext(LoaderContext);
  const { buildDetails, setBuildDetails } = useContext(BuildContext);
  const FileDownload = require("js-file-download");
  const handleRefresh = () => {
    setLoading(true);
    try {
      axios
        .get(
          `http://15.206.158.9:3001/build?appname=${buildDetails.app}&buildid=${buildDetails.newBuildId}`,
          {
            headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
          }
        )
        .then((res) => {
          console.log(res.data, "resssssssssssssss")
          setStatus(res.data.data.BuildStatus);
          console.log(res.data, "refresh button response");
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error, "refresh button error");
    }
  };
  const handleDownload = () => {
    setLoading(true);
    try {
      axios({
        url: `http://15.206.158.9:3001/build/download?appname=${buildDetails.app}&buildid=${buildDetails.newBuildId}`,
        method: "GET",
        headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        responseType: "blob", // Important
      })
        .then((response) => {
          FileDownload(response.data, "build.zip");
          setLoading(false);
        })
        .catch((e) => {
          console.log(e, "download api error");
          setLoading(false);
        });
      // axios.get(`http://http://15.206.158.9:3001/build/download?appname=${buildDetails.app}&buildid=${buildDetails.newBuildId}`)
      // .then((res)=>{

      // })
    } catch (error) {
      setLoading(false);
    }
  };
  console.log(status, "statussss")
  return (
    <React.Fragment>
      <div className="buildContainer">
        <Typography variant="h4" gutterBottom>
          Your App has been build successfully.
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
        <h4>{status ? status : "Inprogress"}</h4>
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
      </div>
    </React.Fragment>
  );
}

export default BuildSuccess;
