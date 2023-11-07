import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewForm from "./screens/newFormScreen/NewForm";
import LoginFormScreen from "./screens/loginScreen/LoginFormScreen";
import Protected from "./Protected";
import "./App.css";
import FormScreens from "./FormScreens";
import EditForm from "./screens/editForm/EditForm";
import ChooseForm from "./screens/chooseForm/ChooseForm";
import SnackbarComponenet from "./components/snackbarComponent/SnackbarComponent";
import LoaderComponent from "./components/loaderComponent/LoaderComponent"
// import SelectFormScreen from "./screens/selectFormScreen/SelectFormScreen";

const RoutingApp = ({ activeStep, appDetails, buildDetails }) => {
  const [selectForm, setSelectForm] = useState("");
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginFormScreen />} />
          <Route
            path="/editform"
            element={
              selectForm.length < 1 ? (
                <Navigate to="/chooseform" setSelectForm={setSelectForm} />
              ) : (
                <EditForm/>
              )
            }
          />
          <Route
            path="/newform"
            element={
              selectForm.length < 1 ? (
                <Navigate to="/chooseform" setSelectForm={setSelectForm} />
              ) : (
                <NewForm/>
              )
            }
          />
         
          <Route
            path="/chooseform"
            element={
              <Protected>
                <ChooseForm setSelectForm={setSelectForm}/>
              </Protected>
            }
          />
          <Route
            path="/form"
            element={
              !buildDetails.version ? (
                <Navigate to="/chooseform" setSelectForm={setSelectForm} />
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
      <SnackbarComponenet />
      <LoaderComponent />
    </>
  );
};

export default RoutingApp;
