import React, { useContext, useState,useEffect } from "react";
import { Typography, Grid, Tooltip, Button,Stack,FormControl,FormControlLabel,Checkbox,InputLabel,Select,MenuItem } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { LoaderContext, BuildContext, SnackbarContext } from "../../../context/contexts";
import axios from "axios";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  buildIdHeading:{
    backgroundColor:"#ffff1a"
  }
});

function BuildForm() {
  const classes = useStyles();
  const [buildChecked, setBuildChecked] = useState(false);
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);
  const { buildDetails, setBuildDetails } = useContext(BuildContext);
  const [versionData, setVersionData] = useState();
  const [version,setVersion] = useState(buildDetails.version);
  const [status, setStatus] = useState(false);
  const { setLoading } = useContext(LoaderContext);

  const handleChange = (event) => {
    setBuildChecked(event.target.checked);
  };
  console.log("build details",buildDetails);
  console.log("Rebuild this app yes or no",buildChecked,versionData);

  useEffect(() => {
    if (buildDetails.app.length > 0 && buildChecked) {
      setLoading(true)
      const baseUrl = `http://15.206.158.9:3001/apps/versions?appname=${buildDetails.app}`;
      console.log(baseUrl, "appsssss");
      axios
        .get(baseUrl, {
          headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        })
        .then((res) => {
          setVersionData(res.data.data);
          setLoading(false)
        })
        .catch((e) => {
          setLoading(false)
          setSnackbarDetails({
            open: true,
            data: e.message ? e.message : "Network Error",
            type: "error",
          });
        });
      // axios
      //   .get(`http://15.206.158.9:3001/build?appname=${buildDetails.app}`, {
      //     headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
      //   })
      //   .then((res) => {
      //     setBuildIdData(res.data.data);
      //   })
       
      //   .catch((e) => {
      //     setLoading(false)
      //     setSnackbarDetails({
      //       open: true,
      //       data: e.message ? e.message : "Network Error",
      //       type: "error",
      //     });
      //   });
    }
  }, [buildChecked]);

  return (
    <React.Fragment>
      <div className="buildContainer">
        <Typography variant="h4" gutterBottom>
          Your App has been Already Build.
        </Typography>
        <Typography variant="h6">Build ID -<span className={classes.buildIdHeading}>{buildDetails.buildId}</span></Typography>
        <Stack direction="row" spacing={3}>
        <Button
            variant="contained"
            sx={{ borderRadius: 10 }}
            startIcon={<DownloadIcon />}
            //onClick={handleDownload}
          >
            Download Build
          </Button>
        <Button
            sx={{ borderRadius: 10 }}
            variant="contained"
            startIcon={<DownloadIcon />}
            color="secondary"
           // onClick={handleDownloadApk}
          >
            Download APK
          </Button>
        </Stack>
        <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={6}>
        <FormControl>
            <FormControlLabel
              control={
                <Checkbox  checked={buildChecked} onChange={handleChange} required />
              }
              label="You Want To Rebuild This App"
            />
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
         {
          buildChecked ? <FormControl fullWidth>
          <InputLabel id="version-label">Select Version</InputLabel>
          <Select
            labelId="version-label"
            id="select-version"
            value={version}
            label="Select Version"
            disabled={!versionData}
            onChange={(e) => {
              console.log("version value",e.target.value);
              setVersion(e.target.value);
              // setBuildDetails((prev) => ({
              //   ...prev,
              //   version: e.target.value,
              // }))
            }}
          >
            {versionData?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl> : null
         } 
          </Grid>
          
          </Grid>
        
      </div>
    </React.Fragment>
  );
}

export default BuildForm;
