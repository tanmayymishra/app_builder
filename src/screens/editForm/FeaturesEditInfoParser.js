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
    return values;
  }