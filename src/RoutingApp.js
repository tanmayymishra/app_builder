import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewForm from "./screens/newFormScreen/NewForm";
import LoginFormScreen from "./screens/loginScreen/LoginFormScreen";
import Protected from "./Protected";

import "./App.css";
import FormScreens from "./FormScreens";

// import SelectFormScreen from "./screens/selectFormScreen/SelectFormScreen";

const RoutingApp = ({ activeStep, appDetails, buildDetails }) => {
  const [selectForm, setSelectForm] = useState("new");
  console.log(buildDetails, "builddddd");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginFormScreen />} />
          <Route
            path="/newform"
            element={
              <Protected>
                <NewForm setSelectForm={setSelectForm}/>
              </Protected>
            }
          />
          {/* <Route path="/newform" element={<NewForm setSelectForm={setSelectForm} />} /> */}
          <Route
            path="/form"
            element={
              !buildDetails.version ? (
                <Navigate to="/newform" setSelectForm={setSelectForm} />
              ) : (
                <FormScreens
                  selectForm={selectForm}
                  activeStep={activeStep}
                  appDetails={appDetails}
                />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingApp;
