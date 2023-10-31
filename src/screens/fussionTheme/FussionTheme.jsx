import React, {useContext} from 'react'
import "./style.css";
import "./styleguide.css";
import "./globals.css";
import { ColorContext, DefaultContext, AppDetailsContext } from "../../context/contexts";

const FussionTheme = () => {

  const { colors } = useContext(ColorContext);
  const { defaultBike } = useContext(DefaultContext);
  const {appDetails}= useContext(AppDetailsContext)

  let objRgb = {
    primary: "",
    secondary: "",
    accent: "",
  };
  let objRgba = {
    primary: "",
    secondary: "",
    accent: "",
  };
  Object.keys(colors).forEach(function (key) {
    // console.log(key, colors[key], "aaaaa");
    let hex = colors[key];
    let values = hex.match(/\w\w/g);
    let [r, g, b] = values.map((k) => parseInt(k, 16));
    let rgb = `rgb(${r},${g},${b})`;
    let rgba = `rgba( ${r}, ${g}, ${b}, 0 )`;
    // setColorsRgb(prev=>({...prev, [key]:rgb}))
    objRgb[key] = rgb;
    objRgba[key] = rgba;
  });
  console.log(objRgb, objRgba, "rgbbbb");

  return (
    <>
  <div className="platinumContainer">
  <img className="phoneBg" src={require("../../assets/iphone13.png")}/>
    <div className="div">
      <div className="overlap">
        <div className="rectangle" />
        <div className="iphone-SE">
          <div className="time">9:41 AM</div>
          <div className="right-side">
            <div className="icon-battery">
              <div className="overlap-group">
                <img
                  className="reserve"
                  src="https://c.animaapp.com/izv1LLfW/img/reserve-2.svg"
                />
              </div>
              <img
                className="terminal"
                src="https://c.animaapp.com/izv1LLfW/img/terminal-2.svg"
              />
            </div>
            <div className="text-wrapper">100%</div>
            <div className="icon-alarm">
              <img
                className="alarm"
                src="https://c.animaapp.com/izv1LLfW/img/alarm-2.svg"
              />
            </div>
            <div className="icon-bluetooth">
              <img
                className="bluetooth"
                src="https://c.animaapp.com/izv1LLfW/img/bluetooth.svg"
              />
            </div>
          </div>
          <div className="left-side">
            <div className="icon-signal">
              <img
                className="empty-bar"
                src="https://c.animaapp.com/izv1LLfW/img/empty-bar.svg"
              />
              <img
                className="full-bars"
                src="https://c.animaapp.com/izv1LLfW/img/full-bars-2.svg"
              />
            </div>
            <div className="carrier">Figma</div>
            <div className="icon-wifi">
              <img
                className="wi-fi"
                src="https://c.animaapp.com/izv1LLfW/img/wi-fi-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="brandNameContainer">

        <div className="text-wrapper-2" style={{background: `linear-gradient(180deg, ${colors.primary} 0%, ${objRgba.primary} 100%)`}}>{appDetails.brandName?appDetails.brandName:"ThingsUp"}</div>
        </div>
        <img
          className="ic-baseline-battery"
          src="https://c.animaapp.com/izv1LLfW/img/ic-baseline-battery-20.svg"
        />
        <div className="text-wrapper-3">31%</div>
        <div className="text-wrapper-4">22 Km</div>
        <div className="text-wrapper-5">Range</div>
        <img
          className="ic-baseline-eco"
          src="https://c.animaapp.com/izv1LLfW/img/ic-baseline-eco-2.svg"
        />
        <div className="rectangle-2" />
        <div className="text-wrapper-6">Bluetooth Pairing</div>
        <img
          className="ic-round-bluetooth"
          src="https://c.animaapp.com/izv1LLfW/img/ic-round-bluetooth-2.svg"
        />
        <div className="text-wrapper-7">Eco mode on</div>
        <div className="rectangle-3" />
        <img
          className="material-symbols"
          src="https://c.animaapp.com/izv1LLfW/img/material-symbols-person-outline-rounded.svg"
        />
        <img
          className="ic-baseline-map"
          src="https://c.animaapp.com/izv1LLfW/img/ic-baseline-map.svg"
        />
        <img
          className="img"
          src="https://c.animaapp.com/izv1LLfW/img/material-symbols-explore-outline-rounded.svg"
        />
        <img
          className="ic-outline-electric"
          src="https://c.animaapp.com/izv1LLfW/img/ic-outline-electric-moped.svg"
        />
        <div className="rectangle-4" style={{backgroundColor:colors.primary}}/>
        <img
          className="vector"
          src="https://c.animaapp.com/izv1LLfW/img/vector-3.svg"
        />
        <img
          className="ic-baseline-info"
          src="https://c.animaapp.com/izv1LLfW/img/ic-baseline-info.svg"
        />
        <img
          className="ph-dots-three"
          src="https://c.animaapp.com/izv1LLfW/img/ph-dots-three-vertical-bold.svg"
        />
        <div className="text-wrapper-8">35 Kmph</div>
        <div className="text-wrapper-9">Speed</div>
        <div className="group" />
        <div className="text-wrapper-10">Pair</div>
        <div className="avatar">
          <img
            className="photo"
            src="https://c.animaapp.com/izv1LLfW/img/photo-1@2x.png"
          />
        </div>
        <div className="text-wrapper-11">{defaultBike.modelName? defaultBike.modelName:"ThingsUp"}</div>
        <div className="text-wrapper-12">Connected</div>
        <img
          className="ic-round-bluetooth-2"
          src="https://c.animaapp.com/izv1LLfW/img/ic-round-bluetooth-1.svg"
        />
        <img
          className="figure"
          src={defaultBike.sideViewImage ? defaultBike.sideViewImage:require("../../assets/defaultSideView.png")}
                alt="img"
        />
        <div className="text-wrapper-13">Today, 15:05:04 Pm</div>
        <img
          className="vector-2"
          src="https://c.animaapp.com/izv1LLfW/img/vector-2.svg"
        />
        <img
          className="vector-3"
          src="https://c.animaapp.com/izv1LLfW/img/vector-1.svg"
        />
        <div className="text-wrapper-3">31%</div>
        <div className="text-wrapper-4">22 Km</div>
        <div className="text-wrapper-5">Range</div>
        <img
          className="ic-baseline-eco"
          src="https://c.animaapp.com/izv1LLfW/img/ic-baseline-eco-2.svg"
        />
        <div className="rectangle-5" />
        <div className="text-wrapper-6">Bluetooth Pairing</div>
        <img
          className="ic-round-bluetooth"
          src="https://c.animaapp.com/izv1LLfW/img/ic-round-bluetooth-2.svg"
        />
        <div className="text-wrapper-7">Eco mode on</div>
        <img
          className="vector-4"
          src="https://c.animaapp.com/izv1LLfW/img/vector.svg"
        />
        <div className="text-wrapper-8">35 Kmph</div>
        <div className="text-wrapper-9">Speed</div>
        <div className="group-2" style={{backgroundColor:colors.primary}}/>
        <div className="text-wrapper-10">Pair</div>
        <div className="rectangle-6" />
        <div className="text-wrapper-14">Last Data Sync:</div>
        <div className="text-wrapper-15">Today, 15:05:04 Pm</div>
        <div className="rectangle-7" />
        <img
          className="mask-group"
          src="https://c.animaapp.com/izv1LLfW/img/mask-group-2@2x.png"
        />
        <div className="rectangle-8" />
        <img
          className="mask-group-2"
          src="https://c.animaapp.com/izv1LLfW/img/mask-group-1@2x.png"
        />
        <div className="rectangle-9" />
        <img
          className="mask-group-3"
          src="https://c.animaapp.com/izv1LLfW/img/mask-group@2x.png"
        />
        <div className="text-wrapper-16">110 KM</div>
        <div className="text-wrapper-17">Sports</div>
        <img
          className="ic-round-directions"
          src="https://c.animaapp.com/izv1LLfW/img/ic-round-directions-run-1.svg"
        />
        <div className="group-3">
          <div className="text-wrapper-18">86 Km</div>
          <div className="text-wrapper-19">Hyper</div>
          <img
            className="ic-round-directions-2"
            src="https://c.animaapp.com/izv1LLfW/img/ic-round-directions-run.svg"
          />
        </div>
        <div className="group-4">
          <div className="text-wrapper-20">86 Km</div>
          <div className="text-wrapper-21">Eco</div>
          <img
            className="ic-baseline-eco-2"
            src="https://c.animaapp.com/izv1LLfW/img/ic-baseline-eco.svg"
          />
        </div>
      </div>
      <img
        className="cib-facebook-f"
        src="https://c.animaapp.com/izv1LLfW/img/cib-facebook-f@2x.png"
      />
    </div>
  </div>
</>

  )
}

export default FussionTheme