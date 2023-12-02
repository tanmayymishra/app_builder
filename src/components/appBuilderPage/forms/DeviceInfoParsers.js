export default function DeviceInfoParsers(values) {
  let modesList = {};
  const deviceInfo = values.deviceInfo;

  const newModes = deviceInfo.bikeModels.map((bikeModel, i) => {
    bikeModel.modes.map((mode, ind) => {
      modesList[mode.Eco.modeName] = mode.Eco;
    });
    Object.keys(modesList).forEach((k) => {
      delete modesList[k]["modeName"];
    });
    deviceInfo.bikeModels[i].modes = modesList;
    modesList = {};
  });
  values.deviceInfo["bikeModels"] = deviceInfo.bikeModels;
  return values;
}
