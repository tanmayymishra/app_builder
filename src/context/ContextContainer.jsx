import React, { useState } from "react";
import {
  ColorContext,
  DefaultContext,
  AppDetailsContext,
  StepContext,
  BuildContext,
  InitialFormContext,
  SnackbarContext,
  LoaderContext,
} from "./contexts";
import RoutingApp from "../RoutingApp";

const ContextContainer = () => {
  const [buildDetails, setBuildDetails] = useState({
    credBase64: "",
    app: "",
    version: "",
    buildId: "",
  });
  const [loading, setLoading] = useState(false);
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
  const [activeStep, setActiveStep] = useState(0);
  const [initialEditForm, setInitialEditForm] = useState();
  const [snackbarDetails, setSnackbarDetails] = useState({
    open: false,
    data: "",
    type: "error",
  });
  return (
    <>
      <StepContext.Provider value={{ activeStep, setActiveStep }}>
        <DefaultContext.Provider value={{ defaultBike, setDefaultBike }}>
          <InitialFormContext.Provider
            value={{ initialEditForm, setInitialEditForm }}
          >
            <AppDetailsContext.Provider value={{ appDetails, setAppDetails }}>
              <ColorContext.Provider value={{ colors, setColors }}>
                <BuildContext.Provider
                  value={{ buildDetails, setBuildDetails }}
                >
                  <SnackbarContext.Provider
                    value={{ snackbarDetails, setSnackbarDetails }}
                  >
                    <LoaderContext.Provider value={{ loading, setLoading }}>
                      <RoutingApp
                        activeStep={activeStep}
                        appDetails={appDetails}
                        buildDetails={buildDetails}
                      />
                    </LoaderContext.Provider>
                  </SnackbarContext.Provider>
                </BuildContext.Provider>
              </ColorContext.Provider>
            </AppDetailsContext.Provider>
          </InitialFormContext.Provider>
        </DefaultContext.Provider>
      </StepContext.Provider>
    </>
  );
};

export default ContextContainer;
