import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, CheckboxField, SelectField } from "../../formFields";
import { Form, FieldArray } from "formik";

const DeviceInfoForm = ({ formField, values }) => {
  
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Device Info
      </Typography>
      <FieldArray name="deviceInfo.bikeModels">
      {({ insert, remove, push }) => (
        <>
        {values.deviceInfo.bikeModels.length>0 && values.deviceInfo.bikeModels.map((model, index)=>(
          <>
         
        <Typography variant="h6" gutterBottom>
          Bike Model
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modelName"
              label="Model Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modelFrontView"
              label="Model Front View"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modelSideView"
              label="Model Side View"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modelInclinedView"
              label="Model Inclined View"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Modes
        </Typography>
        <Typography variant="h6" gutterBottom>
          Eco
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Eco.id"
              label="ID"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Eco.modeImage"
              label="Mode Image"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Typography variant="subtitle1" gutterBottom>
          Range
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Eco.range.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Eco.range.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          SOC
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Eco.SOC.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Eco.SOC.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Sports
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Sports.id"
              label="ID"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Sports.modeImage"
              label="Mode Image"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          Range
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Sports.range.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Sports.range.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          SOC
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Sports.SOC.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Sports.SOC.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Hyper
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Hyper.id"
              label="ID"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Hyper.modeImage"
              label="Mode Image"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          Range
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Hyper.range.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Hyper.range.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          SOC
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Hyper.SOC.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Hyper.SOC.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Default
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.default.id"
              label="ID"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.default.modeImage"
              label="Mode Image"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Typography variant="subtitle1" gutterBottom>
          Range
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.default.range.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.default.range.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          SOC
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.default.SOC.p1"
              label="P1"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.modes.Hyper.SOC.p2"
              label="P2"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Minimum & Maximum Voltage
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.minimumVoltage"
              label="Minimum"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.maximumVoltage"
              label="Maximum"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              name="deviceInfo.bikeModels.vehicleManual"
              label="Vehicle Manual"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom>
          Battery Alerts
        </Typography>
        <Typography variant="h6" gutterBottom>
          Battery Voltage
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.batteryAlerts.batteryVoltage.min"
              label="Min"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.batteryAlerts.batteryVoltage.max"
              label="Max"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputField
              name="deviceInfo.bikeModels.batteryAlerts.batteryVoltage.event"
              label="Event"
              fullWidth
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Battery Temperature
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.batteryAlerts.batteryTemperature.min"
              label="Min"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="deviceInfo.bikeModels.batteryAlerts.batteryTemperature.max"
              label="Max"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              name="deviceInfo.bikeModels.batteryAlerts.batteryTemperature.event"
              label="Event"
              fullWidth
            />
          </Grid>
        </Grid>
        </>
        ))}
        </>
         )}
      </FieldArray>
    </React.Fragment>
  );
};

export default DeviceInfoForm;
