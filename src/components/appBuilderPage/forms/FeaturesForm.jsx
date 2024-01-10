import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, CheckboxField, SelectField } from "../../formFields";
import { useFormikContext } from "formik";

const FeauresForm = (props) => {
  const { values } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Features Details
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.splashScreen.view"
          value={values.features.splashScreen.view}
        />
        Splash Screen
      </Typography>
      <Grid container spacing={3}>
        {values.features.splashScreen.view ? (
          <>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.splashScreen.showBrandName"
                label="Show Brand Name"
              />
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.mapLocation.view"
          value={values.features.mapLocation.view}
        />
        Map Location
      </Typography>
      <Grid container spacing={3}>
        {values.features.mapLocation.view ? (
          <>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.mapLocation.showDeviceLocation"
                label="Show Device Location"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputField
                name="features.mapLocation.androidKey"
                label="Android Key"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputField
                name="features.mapLocation.iosKey"
                label="IOS Key"
                fullWidth
              />
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.tripPlanning.view"
          value={values.features.tripPlanning.view}
        />
        Trip Planning
      </Typography>

      <Grid container spacing={3}>
        {values.features.tripPlanning.view ? (
          <>
            <Grid item xs={12} sm={12}>
              <InputField
                name="features.tripPlanning.mapBoxAccessToken"
                label="Map Box Access Token"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.tripPlanning.turnByTurnNavigation"
                label="Turn by Turn Navigation"
              />
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.alerts.view"
          value={values.features.alerts.view}
        />
        Alerts
      </Typography>

      <Grid container spacing={3}>
        {values.features.alerts.view ? (
          <>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.alerts.periodicAlert"
                label="Periodic Alert"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.alerts.geofenceAlert"
                label="Geofence Alert"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.alerts.socAlert"
                label="Soc Alert"
              />
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.screens.view"
          value={values.features.screens.view}
        />
        Screens
      </Typography>
      <Grid container spacing={3}>
        {values.features.screens.view ? (
          <>
            <Grid item xs={12} sm={12}>
              <CheckboxField name="features.screens.home" label="Home" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.screens.vehicleSpecification"
                label="Vehicle Specification"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.screens.currentTripAndAlerts"
                label="Current Trips & Alerts"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.screens.tripPlanning"
                label="Trip Planning"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField name="features.screens.profile" label="Profile" />
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.bikeParameters.view"
          value={values.features.bikeParameters.view}
        />
        Bike Parameters
      </Typography>
      <Grid container spacing={3}>
        {values.features.bikeParameters.view ? (
          <>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bikeParameters.motorTemperature"
                label="Motor Temperature"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bikeParameters.batteryTemperature"
                label="Battery Temperature"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bikeParameters.batteryCapacity"
                label="Battery Capacity"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bikeParameters.timeToFullCharge"
                label="Time To Full Charge"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bikeParameters.softwareVersion"
                label="Software Version"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bikeParameters.efficiency"
                label="Efficiency"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bikeParameters.maxSpeed"
                label="Maximum Speed"
              />
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.weather.view"
          value={values.features.weather.view}
        />
        Weather
      </Typography>

      <Grid container spacing={3}>
        {values.features.weather.view ? (
          <Grid item xs={12} sm={6}>
            <CheckboxField
              name="features.weather.weather"
              value={values.features.weather.weather}
              label="weather"
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Grid container spacing={3}>
        {values.features.weather.view && values.features.weather.weather ? (
          <Grid item xs={12} sm={6}>
            <InputField
              type="number"
              name="features.weather.interval"
              label="Interval"
              fullWidth
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>

      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.envBenefits.view"
          value={values.features.envBenefits.view}
        />
        Env Benefits
      </Typography>
      <Grid item xs={12} sm={12}></Grid>
      {values.features.envBenefits.view ? (
        <>
          <Typography variant="h6" gutterBottom>
            Saved Trees
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.envBenefits.savedTrees.p1"
                type="number"
                label="P1"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.envBenefits.savedTrees.p2"
                type="number"
                label="P2"
                fullWidth
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom>
            Co2 Emission
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.envBenefits.co2Emission.p1"
                type="number"
                label="P1"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.envBenefits.co2Emission.p2"
                type="number"
                label="P2"
                fullWidth
              />
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom>
            Saved Money on Fuel
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.envBenefits.savedMoneyOnFuel.p1"
                type="number"
                label="P1"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.envBenefits.savedMoneyOnFuel.p2"
                type="number"
                label="P2"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}></Grid>
          </Grid>
        </>
      ) : (
        ""
      )}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CheckboxField
            name="features.immobilization"
            label="Immobilization"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CheckboxField name="features.tripAnalysis" label="Trip Analysis" />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <CheckboxField
          name="features.userDocumentUpload"
          label="User Document Upload"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <CheckboxField name="features.notifications" label="Notifications" />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CheckboxField name="features.ticketSystem" label="Ticket System" />
      </Grid>

      <Grid item xs={12} sm={12}>
        <CheckboxField
          name="features.pushNotification"
          label="Push Notification"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CheckboxField name="features.rewards" label="Rewards" />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CheckboxField
          name="features.cloudDataFetch"
          label="Cloud Data Fetch"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CheckboxField name="features.deviceHistory" label="Device History" />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CheckboxField name="features.trackBike" label="Track Bike" />
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CheckboxField
            name="features.chargingStation"
            label="Charging Station"
          />
        </Grid>
      </Grid> */}
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.sendDataToCloud.view"
          value={values.features.sendDataToCloud.view}
        />
        Send Data to Cloud
      </Typography>
      <Grid container spacing={3}>
        {values.features.sendDataToCloud.view ? (
          <Grid item xs={12} sm={6}>
            <InputField
              type="number"
              name="features.sendDataToCloud.transmittingFrequency"
              label="Transmitting Frequency"
              fullWidth
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>

      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.serviceStation.view"
          value={values.features.serviceStation.view}
        />
        Service Station
      </Typography>

      <Grid container spacing={3}>
        {values.features.serviceStation.view ? (
          <Grid item xs={12} sm={6}>
            <InputField
              name="features.serviceStation.serviceStationUrl"
              label="Service Station Url"
              type="url"
              fullWidth
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.chargingStation.view"
          value={values.features.chargingStation.view}
        />
        Charging Station
      </Typography>

      <Grid container spacing={3}>
        {values.features.chargingStation.view ? (
          <Grid item xs={12} sm={6}>
            <InputField
              name="features.chargingStation.chargingStationUrl"
              label="Charging Station Url"
              type="url"
              fullWidth
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={12} sm={12}></Grid>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CheckboxField
          name="features.bleFeatures.view"
          value={values.features.bleFeatures.view}
        />
        BLE Features
      </Typography>
      <Grid item xs={12} sm={12}></Grid>
      {values.features.bleFeatures.view ? (
        <>
          <Typography variant="h6" gutterBottom>
            BLE Communication
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.bleFeatures.bleCommunication.clusterBLEName"
                label="Cluster BLE Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="features.bleFeatures.bleCommunication.securityCode"
                label="Security Code"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bleFeatures.callDetails"
                label="Call Details"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <CheckboxField
                name="features.bleFeatures.smsDetails"
                label="SMS Details"
              />
            </Grid>
          </Grid>
        </>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default FeauresForm;
