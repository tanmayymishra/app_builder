


export default function DeviceEditInfoParsers(values){
    let modesList = [];
    console.log("Welcome In Device Edit Info Parsers",values);
    const deviceInfo = values.deviceInfo;
    console.log("device info",deviceInfo.bikeModels);
    const newModes = deviceInfo.bikeModels.map((bikeModel,i) => {
        console.log("bike model",bikeModel,i);
        console.log("bike model modes..",bikeModel.modes);
        for(let key in bikeModel.modes){
            console.log("key in bike model",key);
            bikeModel.modes[key]["modeName"] = key;
            let newEntry = {
                Eco:bikeModel.modes[key]
            }
            console.log("new Entry Data",newEntry);
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
    console.log("New Array Modes List",values);
    values.deviceInfo = deviceInfo;
    return values;
}

