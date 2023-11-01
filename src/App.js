import React, {  useState } from "react";
import "./App.css";
import {
  ColorContext,
  DefaultContext,
  AppDetailsContext,
  StepContext,
  BuildContext,
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
    credBase64:"YWRtaW46YWRtaW4=",
    app: "",
    version: "",
    buildId: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <StepContext.Provider value={{ activeStep, setActiveStep }}>
        <DefaultContext.Provider value={{ defaultBike, setDefaultBike }}>
          <AppDetailsContext.Provider value={{ appDetails, setAppDetails }}>
            <ColorContext.Provider value={{ colors, setColors }}>
              <BuildContext.Provider value={{buildDetails, setBuildDetails}}>
                <RoutingApp activeStep={activeStep} appDetails={appDetails} buildDetails={buildDetails}/>
              </BuildContext.Provider>
            </ColorContext.Provider>
          </AppDetailsContext.Provider>
        </DefaultContext.Provider>
      </StepContext.Provider>
    </>
  );
}

export default App;
