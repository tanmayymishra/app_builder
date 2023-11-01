import React, { useContext, useState, useEffect } from "react";
import { Button, Typography, CircularProgress } from "@mui/material";
import { Formik, Form, useFormikContext } from "formik";
import AccountForm from "./forms/AccountForm";
import AppThemeForm from "./forms/AppThemeForm";
import DeviceInfoForm from "./forms/DeviceInfoForm";
import FeaturesForm from "./forms/FeaturesForm";
import PackagesForm from "./forms/PackagesForm";
// import BuildSuccess from './buildSuccess/BuildSuccess';
// import validationSchema from './formModel/validationSchema';
import { BuilderFormModel } from "./formModel/BuilderFormModel";
import {
  ColorContext,
  StepContext,
  DefaultContext,
  BuildContext,
} from "../../context/contexts";
// import formInitialValues from './formModel/formInitialValues';
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
      return <AppThemeForm formField={formField} errors={errors}/>;
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
      const el = document.querySelector('.Mui-error, [data-error]');
      (el?.parentElement ?? el)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [submitting]);
  return null;
}

export default function AppBuilderPage({selectForm}) {
  

  const [finalData, setFinalData] = useState({});
  const { colors } = useContext(ColorContext);
  const { activeStep, setActiveStep } = useContext(StepContext);
  const { defaultBike, setDefaultBike } = useContext(DefaultContext);
  const {buildDetails, setBuildDetails, buildId, credBase64}= useContext(BuildContext)
  const classes = useStyles();
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = ValSchema[activeStep];
  // const onunload= ()=>{
  //   window.location.href="/"
  // }
  // useEffect(()=>{
  //   onunload()
  // },[buildDetails.app])
  const initValuesDemo = {
    account: {
      appName: "zzzzzz",
      brandName: "xyz name",
      brandInfo: "no info",
      adminAccount: "tanmay.mishra@thingsup.io",
      serverURL: "https://trackapi.thingsup.io",
      privacyPolicyURL: "",
      termsAndConditionURL: "https://www.google.co.in"
    },
    appTheme: {
      type: "Modern",
      primaryColor: "#3FCC3F",
      secondaryColor: "#000000",
      accentColor: "#dc2626",
      appLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAhCAYAAAAswACjAAAAAXNSR0IArs4c6QAAA1hJREFUSEvtlVGIVGUYhp/3zGhm5eaCFyXVGoViukXLzjnOcUUKKusmURKyKAy6EiqzBMWutgQlIu+682IzY0sIpK0o2GrO7pwzFwZiiAqS91lklLYz54tz2pHZmTM7O9vSVT8MDP///e/7fe/3vf8R81z+gN1tefbJuMscTk6UdawdlObDMeRafwzjwPL6fYnDpbL2ZeHNi8Qv2AhiZzPgoussH/9Bvzbvz4tko2unDJ5qyTpmXVDR2QUhKXq2R8a7M8DE5aDMKlC8ICRgKrocEbw+DXgxB09+F+rCgvWkDjQ0ZCtq11i5so8zo6Oq/evp2rLFbrp6hZcM9kIiC1XB3lKo9ztNaMfGDwxYz5I8r0D6620BNA4Ekd6ZjagtydCA3WE5Dpp4Ebh5FhCzGHeiokpXchUL9ojESaCnkxTT5+eX9dI/Nqbrc26879o5YPX0hSrwOeIXjBdmyfZoKVQiacvKkMsc3yUBTs7i2GHF5KSu+K69B7zaobJDQaj9HX2yebPlp/5kajqwFoTKJ/99174FNmWQ/AEsvbFvnBa8lV/KF+PjSpJNs52xsklMvstvwK3N8bFDvxPzEfBA09lV4Pi1KnvmRLLJtftrcD6jip+CUH3pmOc4gXiiOcbEy5kj7LuWPA/3YZwOIj3se/YMxscZJJ8Gobb/s2/yC+xCvNZQVS12GMwk2bDB1ueMbTUxMjmpi75rh4E3Mkj2B6EONe8nz021yqp8zO/fh/qxo+MTgKJnX8t4NGM2jwdlns96eRtj50Tiu5Z8iNoZc2xZL1vbGTFzupqz9TzryxmXGvYTo65pyvTLUqiWptdjOlZSdG2b4JP6BafKnbU8w4JdjUQGj0+E+irLrFq71hbffhvHHOiNoSJRmYoJokg/pyb07G2MuosvBaHuTSfJ4yjG7gYTvhlEOpJJUnRtu2A0o6mXZUQG627IY3wYRHquHuu7dgLYkeouDpbKGs4mGbRBOZQBJytghvbGs6VIibvTtbFgwyYOdCRJR7Ro9xDzGMZDgCdYDyyaobk4tXgJW+vvUdckzRWkfbqFBx2Hghk9cvimVCYCWWNsV5V0kqnd+f8kXSn3n8jle7YTYyTJzODpiVCfZfqkq9Rbgk1Fj92K+SuI9EE7rL8BU9lKGNbLcpQAAAAASUVORK5CYII=",
      appLauncherName: "",
      launcherLogo: ""
    },
    deviceInfo: {
      bikeModels: [
        {
          modelName: "bike1",
          frontViewImage: "",
          sideViewImage: "",
          inclinedViewImage: "data:image/png;base64,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",
          modes: {
            Eco: {
              id: 1,
              modeImage: "",
              range: {
                p1: 0.6,
                p2: 0
              },
              SOC: {
                p1: 1,
                p2: 0
              }
            },
            Sports: {
              id: 2,
              modeImage: "",
              range: {
                p1: 0.9,
                p2: 0
              },
              SOC: {
                p1: 1,
                p2: 0
              }
            },
            Hyper: {
              id: 3,
              modeImage: "",
              range: {
                p1: 1.1,
                p2: 0
              },
              SOC: {
                p1: 1,
                p2: 0
              }
            },
            default: {
              id: 0,
              modeImage: "",
              range: {
                p1: 0.6,
                p2: 0
              },
              SOC: {
                p1: 1,
                p2: 0
              }
            }
          },
          minimumVoltage: 52,
          maximumVoltage: 82,
          vehicleManual: "",
          batteryAlerts: {
            batteryVoltage: {
              min: "",
              max: "",
              event: ""
            },
            batteryTemperature: {
              min: "",
              max: "",
              event: ""
            }
          }
        },
        {
          modelName: "bike2",
          frontViewImage: "",
          sideViewImage: "data:image/png;base64,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",
          inclinedViewImage: "",
          modes: {
            Eco: {
              id: 0,
              modeImage: "",
              range: {
                p1: 0,
                p2: 0
              },
              SOC: {
                p1: 0,
                p2: 0
              }
            },
            Sports: {
              id: 0,
              modeImage: "",
              range: {
                p1: 0,
                p2: 0
              },
              SOC: {
                p1: 1,
                p2: 0
              }
            },
            Hyper: {
              id: 0,
              modeImage: "",
              range: {
                p1: 0,
                p2: 0
              },
              SOC: {
                p1: 1,
                p2: 0
              }
            },
            default: {
              id: 0,
              modeImage: "",
              range: {
                p1: 0,
                p2: 0
              },
              SOC: {
                p1: 1,
                p2: 0
              }
            }
          },
          minimumVoltage: 0,
          maximumVoltage: 0,
          vehicleManual: "",
          batteryAlerts: {
            batteryVoltage: {
              min: "",
              max: "",
              event: ""
            },
            batteryTemperature: {
              min: "",
              max: "",
              event: ""
            }
          }
        }
      ],
      default:"bike2"
    },
    features: {
      mapLocation: {
        showDeviceLocation: false,
        androidKey: "",
        iosKey: "",
        view: false
      },
      tripPlanning: {
        turnByTurnNavigation: false,
        mapBoxAccessToken: "",
        view: false
      },
      alerts: {
        periodicAlert: false,
        geofenceAlert: false,
        view: false
      },
      ticketSystem: false,
      pushNotification: true,
      rewards: true,
      envBenefits: {
        savedTrees: {
          p1: "11",
          p2: "333"
        },
        co2Emission: {
          p1: "3",
          p2: "2"
        },
        savedMoneyOnFuel: {
          p1: "23",
          p2: "11"
        },
        view: true
      },
      immobilization: true,
      tripAnalysis: false,
      userDocumentUpload: false,
      // chargingStation: true,
      notifications: false,
      sendDataToCloud: {
        transmittingFrequency: 0,
        view: false
      },
      serviceStation: {
        serviceStationUrl: "https://www.google.co.in",
        view: true
      },
      chargingStation: {
        chargingStationUrl: "https://www.google.co.in",
        view: true
      },
      bleFeatures: {
        bleCommunication: {
          clusterBLEName: "Thingsup",
          securityCode: "R2hISb"
        },
        callDetails: false,
        smsDetails: true,
        view: true
      }
    },
    packages: {
      android: {
        packageName: "jojo",
        releaseStorePassword: "",
        releaseKeyPassword: "",
        releaseKeyAlias: "",
        releaseStoreFile: ""
      }
    }
  }
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
      // font: undefined,
      // assets: "",
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
        releaseStorePassword: "",
        releaseKeyPassword: "",
        releaseKeyAlias: "",
        releaseStoreFile: "",
      },
    },
  };
  let axiosConfig = {
    headers: { Authorization: `Bearer ${buildDetails.credBase64}` }
  }
 
  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function _submitForm(values, actions) {
    const postData={
      appname:buildDetails.app,
      version:buildDetails.version,
      buildconfig:{
        values
      }
    }
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    
    axios.post(`http://192.168.29.46:3001/build?appname=${buildDetails.app}`,postData, axiosConfig)
    .then((res)=>{
      console.log(res, "after build axios response")
    })
    .catch((err)=>console.log(err, "after build axios error"))

    console.log(values, "form value data");
    actions.setSubmitting(false);
    // console.log(obj, "iiiiiiiii")
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
              <div style={{height:"75vh"}}>
                <h1 style={{color:"green"}}>SUCCESS</h1>
              </div>
            </>
          ) : (
            <Formik
              initialValues={selectForm==="new"? initValues:initValuesDemo}
              // validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              validateOnMount={true}
              // enableReintialize={true}
            >
              {({ isSubmitting, values, setFieldValue, errors }) => (
                <Form id={formId}>
                  <ScrollToError/>
                  {_renderStepContent(activeStep, values, setFieldValue, errors)}

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
