import React, { useState } from "react";
import "./App.css";
import {
  ColorContext,
  DefaultContext,
  AppDetailsContext,
  StepContext,
  BuildContext,
  InitialFormContext,
  SnackbarContext,
} from "./context/contexts";
import RoutingApp from "./RoutingApp";

function App() {
  const [colors, setColors] = useState({
    primary: "#26d2c4",
    secondary: "#3b37ff",
    accent: "#dc2626",
  });
  const [defaultBike, setDefaultBike] = useState({
    modelInclinedView: "",
    modelName: "",
  });
  const [appDetails, setAppDetails] = useState({
    theme: "",
    brandName: "",
    appLauncherName: "",
    launcherLogo: "",
  });
  const [buildDetails, setBuildDetails] = useState({
    credBase64: "",
    app: "",
    version: "",
    buildId: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [initialEditForm, setInitialEditForm] = useState();
  const [snackbarDetails, setSnackbarDetails] = useState({
    open:false, 
    data:"",
    type:"error"
  });
  return (
    <>
      <StepContext.Provider value={{ activeStep, setActiveStep }}>
        <DefaultContext.Provider value={{ defaultBike, setDefaultBike }}>
          <AppDetailsContext.Provider value={{ appDetails, setAppDetails }}>
            <ColorContext.Provider value={{ colors, setColors }}>
              <BuildContext.Provider value={{ buildDetails, setBuildDetails }}>
                <InitialFormContext.Provider
                  value={{ initialEditForm, setInitialEditForm }}
                >
                  <SnackbarContext.Provider
                    value={{ snackbarDetails, setSnackbarDetails }}
                  >
                    <RoutingApp
                      activeStep={activeStep}
                      appDetails={appDetails}
                      buildDetails={buildDetails}
                    />
                  </SnackbarContext.Provider>
                </InitialFormContext.Provider>
              </BuildContext.Provider>
            </ColorContext.Provider>
          </AppDetailsContext.Provider>
        </DefaultContext.Provider>
      </StepContext.Provider>
    </>
  );
}

export default App;
