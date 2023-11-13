import React, { useState, useEffect, useContext } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { StepContext, BuildContext } from "../../context/contexts";
import useStyles from "../appBuilderPage/styles";
import StepButton from "@mui/material/StepButton";


const StepperComponent = () => {
  const [steps, setSteps] = useState([]);
  const { buildDetails, setBuildDetails, credBase64 } =
    useContext(BuildContext);
  const buildId = buildDetails.buildId;

  useEffect(() => {
    buildId
      ? setSteps([
          "Account Details",
          "App Theme",
          "Models",
          "Features",
          "Packages",
          "Previous Build"
        ])
      : setSteps([
          "Account Details",
          "App Theme",
          "Models",
          "Features",
          "Build",
        ]);
  }, [buildId]);
 
  const { activeStep, setActiveStep } = useContext(StepContext);
  const classes = useStyles();
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  return (
    <>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label, index) => (
          <Step
            key={label}
            className={classes.step}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "primary.light", // circle color (COMPLETED)
                // color: 'secondary.dark', // circle color (COMPLETED)
              },
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "grey.500", // Just text label (COMPLETED)
                },
              "& .MuiStepLabel-root .Mui-active": {
                color: "common.white", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "common.white", // Just text label (ACTIVE)
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "black", // circle's number (ACTIVE)
              },
              ".css-1hv8oq8-MuiStepLabel-label": {
                color: "grey",
              },
            }}
          >
            {/* <StepLabel>{label}</StepLabel> */}
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepperComponent;
