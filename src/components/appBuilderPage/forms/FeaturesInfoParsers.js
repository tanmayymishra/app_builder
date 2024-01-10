export default function FeaturesInfoParsers(values) {
   
    let appFeatures = values.features;
    console.log("in app Features parser",appFeatures);
    for (let k in appFeatures) {
        if(k === "splashScreen"){
            for(let i in appFeatures["splashScreen"]){
                if(appFeatures["splashScreen"].hasOwnProperty(i) && appFeatures["splashScreen"][i] === false ){
                    delete appFeatures["splashScreen"][i];
                }
            }
        }
        else if(k === "screens"){
            for(let i in appFeatures["screens"]){
                if(appFeatures["screens"].hasOwnProperty(i) && appFeatures["screens"][i] === false ){
                    delete appFeatures["screens"][i];
                }
            }
        }
        else if(k === "bikeParameters"){
            for(let i in appFeatures["bikeParameters"]){
                if(appFeatures["bikeParameters"].hasOwnProperty(i) && appFeatures["bikeParameters"][i] === false ){
                    delete appFeatures["bikeParameters"][i];
                }
            }
        }
        else if(k === "weather"){
            if(appFeatures["weather"].hasOwnProperty("weather") && appFeatures["weather"]["weather"] === false){
                delete appFeatures["weather"]["weather"];
                delete appFeatures["weather"]["interval"];
            }
        }
    }
    console.log("in app Features parser 1",appFeatures);
    values.features = appFeatures;
    return values;
  } 
  