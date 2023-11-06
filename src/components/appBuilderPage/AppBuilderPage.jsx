import React, { useContext, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Formik, Form, useFormikContext } from "formik";
import AccountForm from "./forms/AccountForm";
import AppThemeForm from "./forms/AppThemeForm";
import DeviceInfoForm from "./forms/DeviceInfoForm";
import FeaturesForm from "./forms/FeaturesForm";
import PackagesForm from "./forms/PackagesForm";
import BuildForm from "./forms/BuildForm";
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
import BuildSuccess from "./buildSuccess/BuildSuccess";

//const steps = ["Account Details", "App Theme", "Models", "Features", "Build"];

const { formId, formField } = BuilderFormModel;

function _renderStepContent(step, values, setFieldValue, errors, checkBuildId) {
 // console.log(values, "formik data values");
 // console.log("checkBuildId id", checkBuildId);
  if (checkBuildId) {
   // console.log("In Steppers Count 6");
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
      case 5:
        return <BuildForm formField={formField} />;
      // case 5:
      //   return <BuildSuccess formField={formField}/>;
      default:
        return <div>Not Found</div>;
    }
  } else {
   // console.log("In Steppers Count 5");
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
  const [steps, setSteps] = useState([]);
  const [finalData, setFinalData] = useState({});
  const { colors } = useContext(ColorContext);
  const { initialEditForm, setInitialEditForm } =
    useContext(InitialFormContext);
  const { activeStep, setActiveStep } = useContext(StepContext);
  const { defaultBike, setDefaultBike } = useContext(DefaultContext);
  const { buildDetails, setBuildDetails, buildId, credBase64 } =
    useContext(BuildContext);
  const checkBuildId = buildDetails.buildId;
  //console.log("build context values", checkBuildId,buildDetails);
  const { snackbarDetails, setSnackbarDetails } = useContext(SnackbarContext);
  const { loading, setLoading } = useContext(LoaderContext);
  const classes = useStyles();
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = ValSchema[activeStep];
  console.log("is last step",steps[activeStep]);
 // console.log(initialEditForm, buildDetails, "initial edit form");
  useEffect(() => {
  //  console.log("Welcome To The App Builder Page !");
    checkBuildId
      ? setSteps([
          "Account Details",
          "App Theme",
          "Models",
          "Features",
          "Packages",
          "Previous Build",
        ])
      : setSteps([
          "Account Details",
          "App Theme",
          "Models",
          "Features",
          "Build",
        ]);
  },[checkBuildId]);

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
              id: "",
              modeImage: "",
              range: {
                p1: "",
                p2: "",
              },
              SOC: {
                p1: "",
                p2: "",
              },
            },
            Sports: {
              id: "",
              modeImage: "",
              range: {
                p1: "",
                p2: "",
              },
              SOC: {
                p1: "",
                p2: "",
              },
            },
            Hyper: {
              id: "",
              modeImage: "",
              range: {
                p1: "",
                p2: "",
              },
              SOC: {
                p1: "",
                p2: "",
              },
            },
            default: {
              id: "",
              modeImage: "",
              range: {
                p1: "",
                p2: "",
              },
              SOC: {
                p1: "",
                p2: "",
              },
            },
          },
          minimumVoltage: "",
          maximumVoltage: "",
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
        transmittingFrequency: "",
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
          clusterBLEName: "",
          securityCode: "",
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
              `http://15.206.158.9:3001/build?appname=${buildDetails.app}`,
              postData,
              axiosConfig
            )
            .then((res) => {
              setLoading(false);
              setBuildDetails((prev) => ({
                ...prev,
                newBuildId: res?.data?.data?.buildid,
              }));
              setActiveStep(activeStep + 1);
              console.log(res, "after build axios response");
            })
            .catch((err) => {
              setLoading(false);
              console.log(err, "after build axios error");
              setSnackbarDetails({
                open: true,
                data: err.message ? err.message : "Network Error",
                type: "error",
              });
              console.log(err, "after build axios error");
            })
        : axios
            .post(
              `http://15.206.158.9:3001/build?appname=${buildDetails.app}&buildid=${buildDetails.buildId}`,
              postData,
              axiosConfig
            )
            .then((res) => {
              setLoading(false);
              setBuildDetails((prev) => ({
                ...prev,
                newBuildId: res?.data?.data?.buildid,
              }));
              setActiveStep(activeStep + 1);
              console.log(res, "after build axios response");
            })
            .catch((err) => {
              setLoading(false);
              setSnackbarDetails({
                open: true,
                data: err.message ? err.message : "Network Error",
                type: "error",
              });
              console.log(err, "after build axios error");
            });
    }
    actions.setSubmitting(false);
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
  console.log(buildDetails, "bbbbbbbbbb");
  console.log(finalData, "final submit data");
  return (
    <div className={classes.container}>
      <React.Fragment>
        <React.Fragment>
          {activeStep === steps.length ? (
            <BuildSuccess />
          ) : (
            // <>
            //   <div style={{ height: "75vh" }}>
            //     <h1 style={{ color: "green" }}>SUCCESS</h1>
            //   </div>
            // </>
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
                    errors,
                    checkBuildId
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
                    {/* {
                      steps[activeStep] === "Previous Build"  ? "Rebuild App" : isLastStep ? "Build App" : "Next"
                    }     */}
                        {isLastStep ? "Build App" : "Next"}
                      </Button>
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
