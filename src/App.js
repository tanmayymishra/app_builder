import React, { useEffect, useState } from "react";
import "./App.css";
import {
  ColorContext,
  DefaultContext,
  AppDetailsContext,
  StepContext,
  BuildContext,
} from "./context/contexts";
import RoutingApp from "./RoutingApp";
import build from "@date-io/date-fns";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import AppBuilderPage from "./components/appBuilderPage/AppBuilderPage";
import MaterialLayout from "./components/layout/MaterialLayout";
import SelectFormScreen from "./screens/selectFormScreen/SelectFormScreen";
import LoginFormScreen from "./screens/loginScreen/LoginFormScreen";
import Protected from "./Protected";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [initValueForm, setInitValueForm] = useState("");
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
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Navigate to="/login" />} />
                  <Route path="/login" element={<LoginFormScreen />} />
                  <Route
                    path="/select-form"
                    element={
                      <Protected>
                        <SelectFormScreen />
                      </Protected>
                    }
                  />
                </Routes>
              </BrowserRouter>
              {/* {selectForm.length > 0 ? (
                <MaterialLayout>
                  <div className={activeStep === 1 ? "appHomeScreen" : "app"}>
                    <AppBuilderPage selectForm={selectForm} />
                    {appDetails.theme === "Classic" ? (
                      <ClassicTheme />
                    ) : appDetails.theme === "Fusion" ? (
                      <FussionTheme />
                    ) : (
                      <ModernTheme />
                    )}
                    {activeStep === 1 ? <HomeScreen /> : ""}
                  </div>
                </MaterialLayout>
              ) : (
                <SelectFormScreen setSelectForm={setSelectForm} />
              )} */}
            </ColorContext.Provider>
          </AppDetailsContext.Provider>
        </DefaultContext.Provider>
      </StepContext.Provider>
    </>
  );
}

export default App;
