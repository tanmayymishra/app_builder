import React, {  useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, SelectField, FileField } from "../../formFields";
import { FieldArray, useFormikContext } from "formik";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// import Button from "@mui/material/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { DefaultContext} from "../../../context/contexts"
import Tooltip from '@mui/material/Tooltip';



const DeviceInfoForm = ({ formField }) => {
  // const { setFieldValue } = useFormikContext();
  // const [field,form, meta, helpers] = useField(props);
  const {values,setFieldValue}= useFormikContext()
  const {defaultBike, setDefaultBike}= useContext(DefaultContext)
  // useEffect(() => {
  //   setFieldValue(values.deviceInfo.bikeModels[0].modelName, "hello")
  // }, [])
  const bikeModelObj = {
    modelName: "",
    frontViewImage: "",
    sideViewImage: "",
    inclinedViewImage: "",
    modes: {
      Eco: {
        id: 0,
        modeImage: "",
        range: {
          p1: 0,
          p2: 0,
        },
        SOC: {
          p1: 0,
          p2: 0,
        },
      },
      Sports: {
        id: 0,
        modeImage: "",
        range: {
          p1: 0,
          p2: 0,
        },
        SOC: {
          p1: 1,
          p2: 0,
        },
      },
      Hyper: {
        id: 0,
        modeImage: "",
        range: {
          p1: 0,
          p2: 0,
        },
        SOC: {
          p1: 1,
          p2: 0,
        },
      },
      default: {
        id: 0,
        modeImage: "",
        range: {
          p1: 0,
          p2: 0,
        },
        SOC: {
          p1: 1,
          p2: 0,
        },
      },
    },
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
                          <DeleteIcon fontSize="inherit" color="error" style={{position:"absolute"}}/>
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
                  <Typography variant="h6" gutterBottom>
                    Eco
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Eco.id`}
                        label="ID"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FileField
                        name={`deviceInfo.bikeModels.${index}.modes.Eco.modeImage`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Eco.range.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Eco.range.p2`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Eco.SOC.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Eco.SOC.p2`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Sports.id`}
                        label="ID"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FileField
                        name={`deviceInfo.bikeModels.${index}.modes.Sports.modeImage`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Sports.range.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Sports.range.p2`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Sports.SOC.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Sports.SOC.p2`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Hyper.id`}
                        label="ID"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FileField
                        name={`deviceInfo.bikeModels.${index}.modes.Hyper.modeImage`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Hyper.range.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Hyper.range.p2`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.Hyper.SOC.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Hyper.SOC.p2`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.default.id`}
                        label="ID"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FileField
                        name={`deviceInfo.bikeModels.${index}.modes.default.modeImage`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.default.range.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.default.range.p2`}
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
                        name={`deviceInfo.bikeModels.${index}.modes.default.SOC.p1`}
                        label="P1"
                        type="number"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputField
                        name={`deviceInfo.bikeModels.${index}.modes.Hyper.SOC.p2`}
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
            {/* <Button variant="contained" sx={{fontSize:"50"}} style={{marginTop:"20px"}}>+</Button> */}
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
          <Grid item xs={12} sx={{mt:9}}>
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
