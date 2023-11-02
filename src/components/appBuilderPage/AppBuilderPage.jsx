import React, { useContext, useState, useEffect } from "react";
import { Button, Typography, CircularProgress } from "@mui/material";
import { Formik, Form, useFormikContext } from "formik";
import AccountForm from "./forms/AccountForm";
import AppThemeForm from "./forms/AppThemeForm";
import DeviceInfoForm from "./forms/DeviceInfoForm";
import FeaturesForm from "./forms/FeaturesForm";
import PackagesForm from "./forms/PackagesForm";
import { BuilderFormModel } from "./formModel/BuilderFormModel";
import {
  ColorContext,
  StepContext,
  DefaultContext,
  BuildContext,
  InitialFormContext,
  SnackbarContext,
  LoaderContext,
} from "../../context/contexts";
import useStyles from "./styles";
import ValSchema from "../validation/ValSchema";
import axios from "axios";

const steps = ["Account Details", "App Theme", "Models", "Features", "Build"];
const { formId, formField } = BuilderFormModel;

function _renderStepContent(step, values, setFieldValue, errors) {
  console.log(values, "formik data values");
  switch (step) {
    case 0:
      return <AccountForm formField={formField} />;
    case 1:
      return <AppThemeForm formField={formField} errors={errors} />;
    case 2:
      return <DeviceInfoForm formField={formField} />;
    case 3:
      return <FeaturesForm formField={formField} />;
    case 4:
      return <PackagesForm formField={formField} />;
    // case 5:
    //   return <BuildSuccess formField={formField}/>;
    default:
      return <div>Not Found</div>;
  }
}

export function ScrollToError() {
  const formik = useFormikContext();
  const submitting = formik?.isSubmitting;

  useEffect(() => {
    const el = document.querySelector(".Mui-error, [data-error]");
    (el?.parentElement ?? el)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [submitting]);
  return null;
}

export default function AppBuilderPage({ selectForm }) {
  const [finalData, setFinalData] = useState({});
  const { colors } = useContext(ColorContext);
  const { initialEditForm, setInitialEditForm } =
    useContext(InitialFormContext);
  const { activeStep, setActiveStep } = useContext(StepContext);
  const { defaultBike, setDefaultBike } = useContext(DefaultContext);
  const { buildDetails, setBuildDetails, buildId, credBase64 } =
    useContext(BuildContext);
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);
  const { loading, setLoading } = useContext(LoaderContext);
  const classes = useStyles();
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = ValSchema[activeStep];
  console.log(initialEditForm, buildDetails.buildId, "initial edit form");

  const initValues = {
    account: {
      appName: "",
      brandName: "",
      brandInfo: "",
      adminAccount: "",
      serverURL: "https://trackapi.thingsup.io",
      privacyPolicyURL: "",
      termsAndConditionURL: "",
    },
    appTheme: {
      type: "Modern",
      primaryColor: `${colors.primary}`,
      secondaryColor: `${colors.secondary}`,
      accentColor: `${colors.accent}`,
      appLogo: "",
      appLauncherName: "",
      launcherLogo: "",
    },
    deviceInfo: {
      bikeModels: [
        {
          modelName: "",
          frontViewImage: "",
          sideViewImage: "",
          inclinedViewImage: "",
          modes: {
            Eco: {
              id: 1,
              modeImage: "",
              range: {
                p1: 0.6,
                p2: 0,
              },
              SOC: {
                p1: 1,
                p2: 0,
              },
            },
            Sports: {
              id: 2,
              modeImage: "",
              range: {
                p1: 0.9,
                p2: 0,
              },
              SOC: {
                p1: 1,
                p2: 0,
              },
            },
            Hyper: {
              id: 3,
              modeImage: "",
              range: {
                p1: 1.1,
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
                p1: 0.6,
                p2: 0,
              },
              SOC: {
                p1: 1,
                p2: 0,
              },
            },
          },
          minimumVoltage: 52,
          maximumVoltage: 82,
          vehicleManual: "",
          batteryAlerts: {
            batteryVoltage: {
              min: "",
              max: "",
              event: "",
            },
            batteryTemperature: {
              min: "",
              max: "",
              event: "",
            },
          },
        },
      ],
      default: "",
    },
    features: {
      mapLocation: {
        showDeviceLocation: false,
        androidKey: "",
        iosKey: "",
        view: false,
      },
      tripPlanning: {
        turnByTurnNavigation: false,
        mapBoxAccessToken: "",
        view: false,
      },
      alerts: {
        periodicAlert: false,
        geofenceAlert: false,
        view: false,
      },
      ticketSystem: false,
      pushNotification: false,
      rewards: false,
      envBenefits: {
        savedTrees: {
          p1: "",
          p2: "",
        },
        co2Emission: {
          p1: "",
          p2: "",
        },
        savedMoneyOnFuel: {
          p1: "",
          p2: "",
        },
        view: false,
      },
      immobilization: false,
      tripAnalysis: false,
      userDocumentUpload: false,
      // chargingStation:false,
      notifications: false,
      sendDataToCloud: {
        transmittingFrequency: 0,
        view: false,
      },
      serviceStation: {
        serviceStationUrl: "",
        view: false,
      },
      chargingStation: {
        chargingStationUrl: "",
        view: false,
      },
      bleFeatures: {
        bleCommunication: {
          clusterBLEName: "Thingsup",
          securityCode: "R2hISb",
        },
        callDetails: false,
        smsDetails: false,
        view: false,
      },
    },
    packages: {
      android: {
        packageName: "",
        googleServiceJson: "",
        releaseStorePassword: "",
        releaseKeyPassword: "",
        releaseKeyAlias: "",
        releaseStoreFile: "",
      },
    },
  };
  let axiosConfig = {
    headers: { Authorization: `Bearer ${buildDetails.credBase64}` },
  };

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function _submitForm(values, actions) {
    setLoading(true);
    const postData = {
      appname: buildDetails.app,
      version: buildDetails.version,
      buildconfig: values,
    };
    await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    {
      selectForm === "new"
        ? axios
            .post(
              `http://192.168.29.48:3001/build?appname=${buildDetails.app}`,
              postData,
              axiosConfig
            )
            .then((res) => {
              setLoading(false);
              console.log(res, "after build axios response");
            })
            .catch((err) => {
              setLoading(false);
              console.log(err, "after build axios error");
              setSnackbarDetails({
                open: true,
                data:err.message ? err.message:"Network Error",
                type: "error",
              });
              console.log(err, "after build axios error") 
            })
        : axios
            .post(
              `http://192.168.29.48:3001/build?appname=${buildDetails.app}&buildid=${buildDetails.buildId}`,
              postData,
              axiosConfig
            )
            .then((res) => {
              setLoading(false);
              console.log(res, "after build axios response");
            })
            .catch((err) => {
              setLoading(false);
              setSnackbarDetails({
                open: true,
                data:err.message ? err.message:"Network Error",
                type: "error",
              });
              console.log(err, "after build axios error");
            });
    }
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      setFinalData(values);
      const oj = {};
      values.deviceInfo.bikeModels.forEach((item, index) => {
        let key = item.modelName;
        oj[key] = item;
      });

      setFinalData((prev) => ({
        ...prev,
        deviceInfo: {
          ...prev.deviceInfo,
          bikeModels: oj,
          default: defaultBike,
        },
      }));
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  console.log(finalData, "final submit data");
  return (
    <div className={classes.container}>
      <React.Fragment>
        <React.Fragment>
          {activeStep === steps.length ? (
            //   <CheckoutSuccess />
            <>
              <div style={{ height: "75vh" }}>
                <h1 style={{ color: "green" }}>SUCCESS</h1>
              </div>
            </>
          ) : (
            <Formik
              initialValues={
                selectForm === "new" ? initValues : initialEditForm
              }
              // validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              validateOnMount={true}
              // enableReintialize={true}
            >
              {({ isSubmitting, values, setFieldValue, errors }) => (
                <Form id={formId}>
                  <ScrollToError />
                  {_renderStepContent(
                    activeStep,
                    values,
                    setFieldValue,
                    errors
                  )}

                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={_handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <div className={classes.wrapper}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {isLastStep ? "Build App" : "Next"}
                      </Button>
                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </React.Fragment>
      </React.Fragment>
    </div>
  );
}
