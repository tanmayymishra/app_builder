


export default function DeviceEditInfoParsers(values){
    let modesList = [];
    const deviceInfo = values.deviceInfo;
    const newModes = deviceInfo.bikeModels.map((bikeModel,i) => {
        for(let key in bikeModel.modes){
            bikeModel.modes[key]["modeName"] = key;
            let newEntry = {
                Eco:bikeModel.modes[key]
            }
            if(newEntry.Eco.modeName === "default"){
                modesList[0] = newEntry;
            }else{
                modesList.push(newEntry);
            }
            newEntry = {};
        }
        deviceInfo.bikeModels[i].modes = modesList;
        modesList = [];
    })
    values.deviceInfo = deviceInfo;
    return values;
}

