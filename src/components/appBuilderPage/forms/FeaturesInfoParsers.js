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
    }
    console.log("in app Features parser 1",appFeatures);
    values.features = appFeatures;
    return values;
  } 
  