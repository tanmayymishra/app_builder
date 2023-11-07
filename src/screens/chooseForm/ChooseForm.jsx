import React, { useEffect, useContext } from "react";
import "./ChooseForm.css";
import { Link } from "react-router-dom";
import {
    Button,
    Grid,
  } from "@mui/material";
import { BuildContext,StepContext,BuildVersionContext } from "../../context/contexts";
import {Buffer} from 'buffer';


const ChooseForm = ({ setSelectForm }) => {
  
  const {buildDetails,setBuildDetails}= useContext(BuildContext);
  const { activeStep, setActiveStep } = useContext(StepContext);
  const { buildVersion, setBuildVersion } = useContext(BuildVersionContext);

  console.log("choose form builddetails",buildDetails,activeStep);
  useEffect(()=>{
    //setBuildDetails(prev=>({...prev, credBase64:Buffer.from(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`).toString('Base64') }))
    setActiveStep(0);
    setBuildDetails(prev=>({ app: "",
    version: "",
    buildId: "",
    newBuildId:"", credBase64:Buffer.from(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`).toString('Base64') }))
    setBuildVersion({version:"",isBuild:false});
  },[])
  const handleSelect = (e) => {
    setSelectForm(e);
  };

  return (
    <div className="chooseFormContainer">
      <section className="section">
        <h1>Thingsup App Builder</h1>
        {/* <div className="buttonsContainer"> */}
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} xm={6} sx={{ maxWidth: "100% !important" }}>
          <Link to="/newform"> 
            <Button className="chooseButton" sx={{
                // backgroundColor: "#29242c",
                "&:hover": {
                    // backgroundColor: "rgba(41, 36, 44, 0.8)",
                    transform:"scale(1.02)",
                    transition:"ease-in-out"
                },
              }} variant="outlined" onClick={() => handleSelect("new")}>
                Create a New APP 
            </Button>
            </Link>
          </Grid>
          <Grid item xs={12} xm={6}>
          <Link to="/editform">
            <Button
              variant="contained"
              className="chooseButton"
              sx={{
                backgroundColor: "#29242c",
                "&:hover": {
                  backgroundColor: "rgba(41, 36, 44, 0.8)",
                  transform:"scale(1.01)",
                  transition:"ease-in-out"
                },
              }}
              onClick={() => handleSelect("edit")}
            >
              Edit Existing APP
            </Button>
            </Link>
        </Grid>
          </Grid>
        {/* </div> */}
      </section>
    </div>
  );
};

export default ChooseForm;
