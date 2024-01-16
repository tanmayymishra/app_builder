import React, { useEffect, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { InputField } from "../../formFields";
import {
  AppDetailsContext,
  ColorContext,
  DefaultContext,
} from "../../../context/contexts";
import { useFormikContext } from "formik";

const AccountForm = (props) => {
  const { selectForm } = props;
  const { values } = useFormikContext();
  const { colors, setColors } = useContext(ColorContext);
  const { defaultBike, setDefaultBike } = useContext(DefaultContext);

  useEffect(() => {
    localStorage.setItem("formVisited",true);
  },[])

  useEffect(() => {
   if(selectForm==="edit"){
    let models=[]
    models=values.deviceInfo.bikeModels.map((item, index)=>{
     return {
       value:item.modelName,
       label:item.modelName
     }
   })
   values.deviceInfo.default && (
     values.deviceInfo.bikeModels.map((bike, index)=>{
       if(bike.modelName=== values.deviceInfo.default){
         return setDefaultBike(bike)
       }
       // else(setFieldValue(values.deviceInfo.default,""))
     })
   )
   }
  }, []);

  const { appDetails, setAppDetails } = useContext(AppDetailsContext);
  useEffect(() => {
    setColors({
      primary: values.appTheme.primaryColor,
      secondary: values.appTheme.secondaryColor,
      accent: values.appTheme.accentColor,
    });
    setAppDetails({
      ...appDetails,
      brandName: values?.account?.brandName,
    });
  }, [values?.account?.brandName]);

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Account Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField name="account.appName" label="App Name" fullWidth />
        </Grid>

        <Grid item xs={12} sm={12}>
          <InputField name="account.brandName" label="Brand Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField name="account.brandInfo" label="Brand Info" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField
            name="account.adminAccount"
            label="Admin Account"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField
            name="account.serverURL"
            label="Server URL"
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField
            name="account.privacyPolicyURL"
            label="Privacy Policy URL"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField
            name="account.termsAndConditionURL"
            label="Terms and Condition URL"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AccountForm;
