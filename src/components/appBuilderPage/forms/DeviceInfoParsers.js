import _get from "lodash";
import React,{useState} from "react";


export default function DeviceInfoParsers(values){
    let modesList = {};
    const deviceInfo = values.deviceInfo;


    const newModes = deviceInfo.bikeModels.map((bikeModel,i) => {
        bikeModel.modes.map((mode,ind) => {
            modesList[mode.Eco.modeName] = mode.Eco;
        })
        Object.keys(modesList).forEach( (k) => {
            delete modesList[k]["modeName"];
        })
        deviceInfo.bikeModels[i].modes = modesList;
        modesList = {};
    })
    
    //console.log("New Mode List",modesList);
    values.deviceInfo["bikeModels"] = deviceInfo.bikeModels;
    return values;

}