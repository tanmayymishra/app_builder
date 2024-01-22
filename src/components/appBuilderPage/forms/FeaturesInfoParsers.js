export default function FeaturesInfoParsers(values) {
   
    let appFeatures = values.features;
    console.log("in app Features parser",appFeatures);
    for (let k in appFeatures) {
        if(k === "splashScreen"){
            for(let i in appFeatures["splashScreen"]){
                if(i !== 'view'){
                if(appFeatures["splashScreen"].hasOwnProperty(i) && appFeatures["splashScreen"][i] === false ){
                    console.log("splash screen view",i);
                    delete appFeatures["splashScreen"][i];
                }
            }
            }
        }
        else if(k === "screens"){
            for(let i in appFeatures["screens"]){
                if(i !== 'view'){
                if(appFeatures["screens"].hasOwnProperty(i) && appFeatures["screens"][i] === false ){
                    console.log("screens view",i);
                    delete appFeatures["screens"][i];
                }
            }
            }
        }
        else if(k === "bikeParameters"){
            for(let i in appFeatures["bikeParameters"]){
                if(i !== 'view'){
                if(appFeatures["bikeParameters"].hasOwnProperty(i) && appFeatures["bikeParameters"][i] === false ){
                    console.log("bikeParameters view",i);
                    delete appFeatures["bikeParameters"][i];
                }
            }
            }
        }
        else if(k === "alerts"){
            for(let i in appFeatures["alerts"]){
                if(i !== 'view'){
                if(appFeatures["alerts"].hasOwnProperty(i) && appFeatures["alerts"][i] === false ){
                    console.log("alerts view",i);
                    delete appFeatures["alerts"][i];
                }
            }
            }
        }
        else if(k === "weather"){
            if(appFeatures["weather"].hasOwnProperty("weather") && appFeatures["weather"]["weather"] === false){
                delete appFeatures["weather"]["weather"];
                delete appFeatures["weather"]["interval"];
            }
        }
        else if(k === "sendDataToCloud"){
            if(appFeatures["sendDataToCloud"].hasOwnProperty("transmittingFrequency") && appFeatures["sendDataToCloud"]["transmittingFrequency"] === ""){
                delete appFeatures["sendDataToCloud"];
            }
        }
        else if(k === "cloudDataFetch"){
           if(appFeatures["cloudDataFetch"] === false){
                delete appFeatures["cloudDataFetch"];
           }
        }
        else if(k === "activityMonitoring"){
            if(appFeatures["activityMonitoring"] === false){
                delete appFeatures["activityMonitoring"];
           }
        }
        else if(k === "chargingStation"){
            if(appFeatures["chargingStation"].hasOwnProperty("chargingStationUrl") && appFeatures["chargingStation"]["chargingStationUrl"] === "" ){
                delete appFeatures["chargingStation"];
            }
        }
        else if(k === "mapLocation"){
            if(appFeatures["mapLocation"].hasOwnProperty("showDeviceLocation") && appFeatures["mapLocation"]["showDeviceLocation"] === false && appFeatures["mapLocation"].hasOwnProperty("androidKey") && appFeatures["mapLocation"]["androidKey"] === "" )
            {
                delete appFeatures["mapLocation"];   
            }
        }
        else if(k === "tripPlanning"){
            if(appFeatures["tripPlanning"].hasOwnProperty("mapBoxAccessToken") && appFeatures["tripPlanning"]["mapBoxAccessToken"] === "" && appFeatures["tripPlanning"].hasOwnProperty("turnByTurnNavigation") && appFeatures["tripPlanning"]["turnByTurnNavigation"] === false ){
                delete appFeatures["tripPlanning"];
            }
        }
        else if(k === "envBenefits"){
            if(appFeatures["envBenefits"].hasOwnProperty("savedTrees")){
                if(appFeatures["envBenefits"]["savedTrees"].hasOwnProperty("p1") && appFeatures["envBenefits"]["savedTrees"]["p1"] === ""){
                    delete appFeatures["envBenefits"];
                }
            }
        }
        else if(k === "bleFeatures"){
            if(appFeatures["bleFeatures"].hasOwnProperty("bleCommunication")){
                if(appFeatures["bleFeatures"]["bleCommunication"].hasOwnProperty("clusterBLEName") && appFeatures["bleFeatures"]["bleCommunication"]["clusterBLEName"] === "" && appFeatures["bleFeatures"].hasOwnProperty("callDetails") && appFeatures["bleFeatures"]["callDetails"] === false && appFeatures["bleFeatures"].hasOwnProperty("smsDetails") && appFeatures["bleFeatures"]["smsDetails"] === false){
                    delete appFeatures["bleFeatures"];
                }
            }
        }
        else if(k === "serviceStation"){
            if(appFeatures["serviceStation"].hasOwnProperty("serviceStationUrl") && appFeatures["serviceStation"]["serviceStationUrl"] === "" ){
                delete appFeatures["serviceStation"];
            }
        }
        else if(k === "trackBike"){
            if(appFeatures["trackBike"] === false){
                 delete appFeatures["trackBike"];
            }
         }
         else if(k === "deviceHistory"){
            if(appFeatures["deviceHistory"] === false){
                 delete appFeatures["deviceHistory"];
            }
         }
         else if(k === "rewards"){
            if(appFeatures["rewards"] === false){
                 delete appFeatures["rewards"];
            }
         }
         else if(k === "pushNotification"){
            if(appFeatures["pushNotification"] === false){
                 delete appFeatures["pushNotification"];
            }
         }
         else if(k === "ticketSystem"){
            if(appFeatures["ticketSystem"] === false){
                 delete appFeatures["ticketSystem"];
            }
         }
         else if(k === "notifications"){
            if(appFeatures["notifications"] === false){
                 delete appFeatures["notifications"];
            }
         }
         else if(k === "userDocumentUpload"){
            if(appFeatures["userDocumentUpload"] === false){
                 delete appFeatures["userDocumentUpload"];
            }
         }
         else if(k === "tripAnalysis"){
            if(appFeatures["tripAnalysis"] === false){
                 delete appFeatures["tripAnalysis"];
            }
         }
         else if(k === "immobilization"){
            if(appFeatures["immobilization"] === false){
                 delete appFeatures["immobilization"];
            }
         }
         else if(k === "themeChange"){
            if(appFeatures["themeChange"] === false){
                 delete appFeatures["themeChange"];
            }
         }
    }
    console.log("in app Features parser 1",appFeatures);
    values.features = appFeatures;
    return values;
  } 
  