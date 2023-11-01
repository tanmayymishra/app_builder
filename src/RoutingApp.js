import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewForm from "./screens/newFormScreen/NewForm";

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
          <Route path="/" element={<NewForm setSelectForm={setSelectForm} />} />
          <Route
            path="/form"
            element={
              !buildDetails.version ? (
                <Navigate to="/" setSelectForm={setSelectForm} />
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
