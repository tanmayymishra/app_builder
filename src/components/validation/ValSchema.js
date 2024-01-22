import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const ValSchema = [
  Yup.object().shape({
    account: Yup.object().shape({
      appName: Yup.string().required("This field is required"),
      brandName: Yup.string().required("This field is required"),
      brandInfo: Yup.string().required("This field is required"),
      adminAccount: Yup.string()
        .required("This field is required")
        .email("Enter a valid Email"),
      serverURL: Yup.string()
        .required("This field is required")
        .url("Enter a valid URL"),
      privacyPolicyURL: Yup.string()
        .required("This field is required")
        .url("Enter a valid URL"),
      termsAndConditionURL: Yup.string()
        .required("This field is required")
        .url("Enter a valid URL"),
    }),
  }),
  Yup.object().shape({
    appTheme: Yup.object().shape({
      type: Yup.string().required("This field is required"),
      theme: Yup.string().required("This field is required"),
      appLogo: Yup.mixed().required("This field is required"),
       
      appLauncherName: Yup.string().required("This field is required"),
        launcherLogo: Yup.mixed().required("This field is required"),
    }),
  }),
  
  Yup.object().shape({
    deviceInfo: Yup.object().shape({
      bikeModels: Yup.array().of(
        Yup.object().shape({
          modelName: Yup.string().ensure().required("This field is required"),
          frontViewImage: Yup.mixed().required("This field is required"),
          sideViewImage: Yup.mixed().required("This field is required"),
          inclinedViewImage: Yup.mixed().required("This field is required"),
          // modes: Yup.object().shape({
          //   Eco: Yup.object().shape({
          //     id: Yup.number().required("This field is required"),
          //     modeImage: Yup.mixed().required("This field is required"),
          //     range: Yup.object().shape({
          //       p1: Yup.number().required("This field is required"),
          //       p2: Yup.number().required("This field is required"),
          //     }),
          //     SOC: Yup.object().shape({
          //       p1: Yup.number().required("This field is required"),
          //       p2: Yup.number().required("This field is required"),
          //     }),
          //   }),
          //   // Sports: Yup.object().shape({
          //   //   id: Yup.number().required("This field is required"),
          //   //   modeImage: Yup.mixed().required("This field is required"),
          //   //   range: Yup.object().shape({
          //   //     p1: Yup.number().required("This field is required"),
          //   //     p2: Yup.number().required("This field is required"),
          //   //   }),
          //   //   SOC: Yup.object().shape({
          //   //     p1: Yup.number().required("This field is required"),
          //   //     p2: Yup.number().required("This field is required"),
          //   //   }),
          //   // }),
          //   // Hyper: Yup.object().shape({
          //   //   id: Yup.number().required("This field is required"),
          //   //   modeImage: Yup.mixed().required("This field is required"),
          //   //   range: Yup.object().shape({
          //   //     p1: Yup.number().required("This field is required"),
          //   //     p2: Yup.number().required("This field is required"),
          //   //   }),
          //   //   SOC: Yup.object().shape({
          //   //     p1: Yup.number().required("This field is required"),
          //   //     p2: Yup.number().required("This field is required"),
          //   //   }),
          //   // }),
          //   // default: Yup.object().shape({
          //   //   id: Yup.number().required("This field is required"),
          //   //   modeImage: Yup.mixed().required("This field is required"),
          //   //   range: Yup.object().shape({
          //   //     p1: Yup.number().required("This field is required"),
          //   //     p2: Yup.number().required("This field is required"),
          //   //   }),
          //   //   SOC: Yup.object().shape({
          //   //     p1: Yup.number().required("This field is required"),
          //   //     p2: Yup.number().required("This field is required"),
          //   //   }),
          //   // }),
          // }),
          modes:Yup.array().of(
            Yup.object().shape({
              Eco: Yup.object().shape({
                modeName:Yup.string().required("This field is required"),
                maxRange:Yup.number().required("This field is required"),
                id: Yup.number().required("This field is required"),
                modeImage: Yup.mixed().required("This field is required"),
                range: Yup.object().shape({
                p1: Yup.number().required("This field is required"),
                p2: Yup.number().required("This field is required"),
                }),
                SOC: Yup.object().shape({
                p1: Yup.number().required("This field is required"),
                p2: Yup.number().required("This field is required"),
               }),
              })
            })
          ),
          minimumVoltage: Yup.number().required("This field is required"),
          maximumVoltage: Yup.number().required("This field is required"),
          vehicleManual: Yup.string().required("This field is required").url("Enter a valid URL"),
          batteryAlerts: Yup.object().shape({
            batteryVoltage: Yup.object().shape({
              min: Yup.string().required("This field is required"),
              max: Yup.string().required("This field is required"),
              event: Yup.string().required("This field is required"),
            }),
            batteryTemperature: Yup.object().shape({
              min: Yup.string().required("This field is required"),
              max: Yup.string().required("This field is required"),
              event: Yup.string().required("This field is required"),
            }),
          }),
        })
      ),
      default: Yup.string().required("This field is required"),
    }),
  }),

  Yup.object().shape({
    features: Yup.object().shape({
      mapLocation: Yup.object().shape({
        view: Yup.boolean(),
        androidKey: Yup.string().when("view", {
          is: true,
          then: () => Yup.string().required("This field is required"),
        }),
        iosKey: Yup.string().when("view", {
          is: true,
          then: () => Yup.string().required("This field is required"),
        }),
      }),
      tripPlanning: Yup.object().shape({
        view: Yup.boolean(),
        mapBoxAccessToken: Yup.string().when("view", {
          is: true,
          then: () => Yup.string().required("This field is required"),
        }),
      }),
      weather:Yup.object().shape({
        view: Yup.boolean(),
        weather:Yup.boolean(),
        interval:Yup.number().when("weather",{
          is: true,
          then: () => Yup.number().required("This field is required")
        })
      }),
      screens:Yup.object().shape({
        view:Yup.boolean(),
        home:Yup.boolean().oneOf([true],"You must accept the home screen")
      }),
      envBenefits: Yup.object().shape({
        view: Yup.boolean(),
        savedTrees: Yup.object().when("view",{
            is:(view)=>view === true,
            then:()=>Yup.object().shape({
                p1:Yup.number().required("This field is required"),
                p2:Yup.number().required("This field is required")
            })
        }),
        co2Emission: Yup.object().when("view",{
            is:(view)=>view === true,
            then:()=>Yup.object().shape({
                p1:Yup.number().required("This field is required"),
                p2:Yup.number().required("This field is required")
            })
        }),
        savedMoneyOnFuel: Yup.object().when("view",{
            is:(view)=>view === true,
            then:()=>Yup.object().shape({
                p1:Yup.number().required("This field is required"),
                p2:Yup.number().required("This field is required")
            })
        }),
      }),
      sendDataToCloud: Yup.object().shape({
        view: Yup.boolean(),
        transmittingFrequency: Yup.string().when("view", {
          is: true,
          then: () => Yup.string().required("This field is required").test(
            'Is positive?', 
            'ERROR: The number must be greater than 0!', 
            (value) => value > 0
          ),
        }),
      }),
      serviceStation: Yup.object().shape({
        view: Yup.boolean(),
        serviceStationUrl: Yup.string().when("view", {
          is: true,
          then: () =>
            Yup.string()
              .required("This field is required")
              .url("Enter a valid URL"),
        }),
      }),
      chargingStation: Yup.object().shape({
        view: Yup.boolean(),
        chargingStationUrl: Yup.string().when("view", {
          is: true,
          then: () =>
            Yup.string()
              .required("This field is required")
              .url("Enter a valid URL"),
        }),
      }),
      bleFeatures: Yup.object().shape({
        view: Yup.boolean(),
        bleCommunication: Yup.object().when("view",{
            is:(view)=> view===true,
            then:()=>Yup.object().shape({
                clusterBLEName:Yup.string().required("This field is required"),
                securityCode:Yup.string().required("This field is required")
            })
        })
      }),
    }),
  }),
  Yup.object().shape({
    packages: Yup.object().shape({
        android:Yup.object().shape({
            packageName:Yup.string().required("This field is required"),
            googleServiceJson:Yup.mixed().required("This field is required"),
            releaseStorePassword:Yup.string().required("This field is required"),
            releaseKeyPassword:Yup.string().required("This field is required"),
            releaseKeyAlias:Yup.string().required("This field is required"),
            releaseStoreFile:Yup.mixed().required("This field is required"),
        })
    })
  })
];

export default ValSchema;
