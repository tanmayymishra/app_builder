export default function FeaturesEditInfoParsers(values) {
    console.log("features edit form",values);
    if(!values.features.hasOwnProperty("cloudDataFetch")){
    console.log("cloudDataFetch property does not exist")
    values.features["cloudDataFetch"] = false;
    }
    if(!values.features.hasOwnProperty("sendDataToCloud")){
        console.log("sendDataToCloud property does not exist")
        values.features["sendDataToCloud"] = {transmittingFrequency:"",view:false}
    }
    if(!values.features.hasOwnProperty("chargingStation")){
        console.log("chargingStation property does not exist")
        values.features["chargingStation"] = {chargingStationUrl:"",view:false}
    }
    if(!values.features.hasOwnProperty("serviceStation")){
        console.log("serviceStation property does not exist")
        values.features["serviceStation"] = {serviceStationUrl:"",view:false}
    }
    if(!values.features.hasOwnProperty("activityMonitoring")){
        console.log("activityMonitoring property does not exist")
        values.features["activityMonitoring"] = false;
    }
    if(!values.features.hasOwnProperty("trackBike")){
        console.log("trackBike property does not exist")
        values.features["trackBike"] = false;
    }
    if(!values.features.hasOwnProperty("deviceHistory")){
        console.log("deviceHistory property does not exist")
        values.features["deviceHistory"] = false;
    }
    if(!values.features.hasOwnProperty("rewards")){
        console.log("rewards property does not exist")
        values.features["rewards"] = false;
    }
    if(!values.features.hasOwnProperty("pushNotification")){
        console.log("pushNotification property does not exist")
        values.features["pushNotification"] = false;
    }
    if(!values.features.hasOwnProperty("ticketSystem")){
        console.log("ticketSystem property does not exist")
        values.features["ticketSystem"] = false;
    }
    if(!values.features.hasOwnProperty("notifications")){
        console.log("notifications property does not exist")
        values.features["notifications"] = false;
    }
    if(!values.features.hasOwnProperty("userDocumentUpload")){
        console.log("userDocumentUpload property does not exist")
        values.features["userDocumentUpload"] = false;
    }
    if(!values.features.hasOwnProperty("tripAnalysis")){
        console.log("tripAnalysis property does not exist")
        values.features["tripAnalysis"] = false;
    }
    if(!values.features.hasOwnProperty("immobilization")){
        console.log("immobilization property does not exist")
        values.features["immobilization"] = false;
    }
    if(!values.features["weather"].hasOwnProperty("weather")){
        console.log("weather property does not exist")
        values.features["weather"] = {weather:false,interval:0,view:false};
    }
    if(!values.features.hasOwnProperty("mapLocation")){
        values.features["mapLocation"] = {androidKey:"",iosKey:"",showDeviceLocation:false,view:false};
    }
    if(!values.features.hasOwnProperty("tripPlanning")){
        values.features["tripPlanning"] = {mapBoxAccessToken:"",turnByTurnNavigation:false,view:false};
    }
    if(!values.features.hasOwnProperty("envBenefits")){
        values.features["envBenefits"] = {
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
          }
    }
    if(!values.features.hasOwnProperty("bleFeatures")){
     values.features["bleFeatures"] =  {
            bleCommunication: {
              clusterBLEName: "",
              securityCode: "",
            },
            callDetails: false,
            smsDetails: false,
            view: false,
          }
    }

    return values;
  }