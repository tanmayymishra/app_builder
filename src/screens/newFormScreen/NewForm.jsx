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
import { BuildContext, SnackbarContext } from "../../context/contexts";

const NewForm = () => {
    const {buildDetails, setBuildDetails}= useContext(BuildContext)
    const {snackbarDetails, setSnackbarDetails}= useContext(SnackbarContext)
  const [appData, setAppData] = useState();
  const [versionData, setVersionData] = useState();
    // const [loading, setLoading]= useState(false)
    useEffect(() => {
      getApps();
    }, []);
    
    useEffect(()=>{
      // setLoading(true)
     if (buildDetails.app.length > 0) {
    const baseUrl = `http://192.168.29.46:3001/apps/versions?appname=${buildDetails.app}`;
    console.log(baseUrl, "appsssss");
    axios.get(baseUrl, { headers: { Authorization: `Bearer ${buildDetails.credBase64}`}})
    .then((res)=>{
        setVersionData(res.data.data)
    })
    .catch((error)=>{
      setSnackbarDetails({ open:true, data:error.message?error.message:"Server Error", type:"error"});
    })
  }
  },[buildDetails.app])

      const getApps = async () => {
        try {
          const res = await axios.get("http://192.168.29.46:3001/apps/", {
            headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
          });
          if (res.status == 200){
            setAppData(res.data.data);    
          }
        } catch (error) {
          console.log(error, "errorrr")
          setSnackbarDetails({ open:true, data:error.message?error.message:"Server Error", type:"error"});
        }
        // const res = await axios.get("http://192.168.29.46:3001/apps/", {
        //   headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
        // });
        // console.log(res, "errorrrr")
      };
  return (
    <div className="newFormContainer">
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
                onChange={(e) =>setBuildDetails(prev=>({...prev, app:e.target.value}))}
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
                onChange={(e) => setBuildDetails(prev=>({...prev, version:e.target.value}))}
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
              <Link to="/form" style={{color:"white"}}>Start Building</Link>
            </Button>
          </Grid>
        {/* </div> */}
      </section>
    </div>
  );
};

export default NewForm;
