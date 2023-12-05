import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, SelectField, FileField } from "../../formFields";
import { FieldArray, useFormikContext } from "formik";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { DefaultContext } from "../../../context/contexts";
import Tooltip from "@mui/material/Tooltip";

const DeviceInfoForm = ({ formField }) => {
  // const { setFieldValue } = useFormikContext();
  // const [field,form, meta, helpers] = useField(props);
  const { values, setFieldValue } = useFormikContext();
  const { defaultBike, setDefaultBike } = useContext(DefaultContext);

  console.log("Edit App Form", values);
  const modesObj = {
    Eco: {
      id: "",
      modeName: "",
      modeImage: "",
      range: {
        p1: "",
        p2: "",
      },
      SOC: {
        p1: "",
        p2: "",
      },
      maxRange:""
    },
  };

  const bikeModelObj = {
    modelName: "",
    frontViewImage: "",
    sideViewImage: "",
    inclinedViewImage: "",
    modes: [
      {
        Eco: {
          id: 0,
          modeName: "default",
          modeImage: "",
          range: {
            p1: "1.2",
            p2: "0.0659",
          },
          SOC: {
            p1: "1",
            p2: "0",
          },
          maxRange:100
        },
      },
    ],
    minimumVoltage: 0,
    maximumVoltage: 0,
    vehicleManual: "",
    batteryAlerts: {
      batteryVoltage: {
        min: 0,
        max: 0,
        event: "",
      },
      batteryTemperature: {
        min: 0,
        max: 0,
        event: "",
      },
    },
  };

  let models = [];
  models = values.deviceInfo.bikeModels.map((item, index) => {
    return {
      value: item.modelName,
      label: item.modelName,
    };
  });
  values.deviceInfo.default &&
    values.deviceInfo.bikeModels.map((bike, index) => {
      if (bike.modelName === values.deviceInfo.default) {
        return setDefaultBike(bike);
      }
      // else(setFieldValue(values.deviceInfo.default,""))
    });
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Device Information
      </Typography>
      <FieldArray name="deviceInfo.bikeModels">
        {({ insert, remove, push }) => (
          <>
            {values.deviceInfo.bikeModels.length > 0 &&
              values.deviceInfo.bikeModels.map((model, index) => (
                <>
                  <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} sm={11}>
                      <Typography variant="h5" gutterBottom>
                        Bike Model
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      {index > 0 ? (
                        <Tooltip title="Delete Vehicle">
                          <IconButton
                            aria-label="delete"
                            size="large"
                            onClick={() => remove(index)}
                          >
                            <DeleteIcon
                              fontSize="inherit"
                              color="error"
                              style={{ position: "absolute" }}
                            />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modelName`}
                        label="Model Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FileField
                        name={`deviceInfo.bikeModels.${index}.frontViewImage`}
                        label="Front View Image"
                        type="file"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={undefined}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FileField
                        name={`deviceInfo.bikeModels.${index}.sideViewImage`}
                        label="Side View Image"
                        type="file"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={undefined}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FileField
                        name={`deviceInfo.bikeModels.${index}.inclinedViewImage`}
                        label="Inclined View Image"
                        type="file"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={undefined}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Typography variant="h6" gutterBottom>
                    Modes
                  </Typography>
                  <FieldArray name={`deviceInfo.bikeModels.${index}.modes`}>
                    {({ insert, remove, push }) => (
                      <>
                        {values.deviceInfo.bikeModels[index].modes.length > 0 &&
                          values.deviceInfo.bikeModels[index].modes.map(
                            (mode, ind) => (
                              <>
                                <Grid container spacing={3} mt={1} mb={1}>
                                  <Grid item xs={12} sm={11}>
                                    <Typography variant="h6" gutterBottom>
                                      {`Mode${ind + 1}`}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={1}>
                                    {ind > 0 ? (
                                      <Tooltip title="Delete Mode">
                                        <IconButton
                                          aria-label="delete"
                                          size="large"
                                          onClick={() => remove(ind)}
                                        >
                                          <DeleteIcon
                                            fontSize="inherit"
                                            color="error"
                                            style={{ position: "absolute" }}
                                          />
                                        </IconButton>
                                      </Tooltip>
                                    ) : (
                                      ""
                                    )}
                                  </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                  <Grid item xs={12} sm={6} mb={2}>
                                    <InputField
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.modeName`}
                                      label="Mode"
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} mb={2}>
                                    <InputField
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.maxRange`}
                                      label="Maximum Range"
                                      type="number"
                                      fullWidth
                                    />
                                  </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                  <Grid item xs={12} sm={6}>
                                    <InputField
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.id`}
                                      label="ID"
                                      type="number"
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <FileField
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.modeImage`}
                                      label="Mode Image"
                                      type="file"
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                      value={undefined}
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
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.range.p1`}
                                      label="P1"
                                      type="number"
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <InputField
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.range.p2`}
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
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.SOC.p1`}
                                      label="P1"
                                      type="number"
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <InputField
                                      name={`deviceInfo.bikeModels.${index}.modes.${ind}.Eco.SOC.p2`}
                                      label="P2"
                                      type="number"
                                      fullWidth
                                    />
                                  </Grid>
                                </Grid>
                              </>
                            )
                          )}

                        <Tooltip title="Add Mode">
                          <IconButton
                            aria-label="Add"
                            size="large"
                            onClick={() => push(modesObj)}
                            style={{ position: "absolute", fontSize: 40 }}
                          >
                            <AddCircleRoundedIcon
                              fontSize="inherit"
                              color="primary"
                            />
                          </IconButton>
                        </Tooltip>
                      </>
                    )}
                  </FieldArray>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ marginTop: "4rem" }}
                  >
                    Minimum & Maximum Voltage
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        type="number"
                        name={`deviceInfo.bikeModels.${index}.minimumVoltage`}
                        label="Minimum"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        type="number"
                        name={`deviceInfo.bikeModels.${index}.maximumVoltage`}
                        label="Maximum"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.vehicleManual`}
                        label="Vehicle Manual"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}></Grid>
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
                        type="number"
                        name={`deviceInfo.bikeModels.${index}.batteryAlerts.batteryVoltage.min`}
                        label="Min"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        type="number"
                        name={`deviceInfo.bikeModels.${index}.batteryAlerts.batteryVoltage.max`}
                        label="Max"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.batteryAlerts.batteryVoltage.event`}
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
                        type="number"
                        name={`deviceInfo.bikeModels.${index}.batteryAlerts.batteryTemperature.min`}
                        label="Min"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        type="number"
                        name={`deviceInfo.bikeModels.${index}.batteryAlerts.batteryTemperature.max`}
                        label="Max"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.batteryAlerts.batteryTemperature.event`}
                        label="Event"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </>
              ))}
            <Tooltip title="Add Vehicle">
              <IconButton
                aria-label="Add"
                size="large"
                onClick={() => push(bikeModelObj)}
                style={{ position: "absolute", fontSize: 40 }}
              >
                <AddCircleRoundedIcon fontSize="inherit" color="primary" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </FieldArray>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ mt: 9 }}>
          <SelectField
            name="deviceInfo.default"
            label="Default Vehicle"
            select
            data={models}
            // defaultValue={models[0]?models[0]:""}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DeviceInfoForm;
