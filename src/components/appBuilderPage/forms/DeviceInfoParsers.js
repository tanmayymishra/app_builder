import _get from "lodash";
import React,{useState} from "react";


export default function DeviceInfoParsers(values){
    let modesList = {};
    console.log("Welcome In Device Info Parsers",values);
    const deviceInfo = values.deviceInfo;

    console.log("device Info Parser data",deviceInfo.bikeModels);

    const newModes = deviceInfo.bikeModels.map((bikeModel,i) => {
        console.log("bike model",bikeModel,i);
        bikeModel.modes.map((mode,ind) => {
            console.log("each bike mode",mode,ind);
            modesList[mode.Eco.modeName] = mode.Eco;
            console.log("mode list to delete",modesList); 
        })
        Object.keys(modesList).forEach( (k) => {
            console.log("k..",k);
            delete modesList[k]["modeName"];
        })
        deviceInfo.bikeModels[i].modes = modesList;
        console.log("new mode list ...",deviceInfo);
        modesList = {};
    })
    
    //console.log("New Mode List",modesList);
    console.log("new bike models",deviceInfo.bikeModels);
    values.deviceInfo["bikeModels"] = deviceInfo.bikeModels;
    return values;

}