import React,{useContext} from 'react'
import "./style.css";
import "./styleguide.css";
import "./globals.css";
import { ColorContext, DefaultContext, AppDetailsContext } from "../../context/contexts";

const ClassicTheme = () => {

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



  return (
<>
<>

<div className="goldContainer">
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
                src="https://c.animaapp.com/hYkRxqnJ/img/reserve-2.svg"
              />
            </div>
            <img
              className="terminal"
              src="https://c.animaapp.com/hYkRxqnJ/img/terminal-2.svg"
            />
          </div>
          <div className="overlap-2">
            <div className="text-wrapper">100%</div>
            <div className="img-wrapper">
              <img
                className="bluetooth"
                src="https://c.animaapp.com/hYkRxqnJ/img/bluetooth.svg"
              />
            </div>
          </div>
          <div className="img-wrapper">
            <img
              className="alarm"
              src="https://c.animaapp.com/hYkRxqnJ/img/alarm-2.svg"
            />
          </div>
        </div>
        <div className="left-side">
          <div className="icon-signal">
            <img
              className="empty-bar"
              src="https://c.animaapp.com/hYkRxqnJ/img/empty-bar-2.svg"
            />
            <img
              className="full-bars"
              src="https://c.animaapp.com/hYkRxqnJ/img/full-bars-2.svg"
            />
          </div>
          <div className="carrier">Figma</div>
          <div className="icon-wifi">
            <img
              className="wi-fi"
              src="https://c.animaapp.com/hYkRxqnJ/img/wi-fi.svg"
            />
          </div>
        </div>
      </div>
      <div className="rectangle-2" style={{
        background: `linear-gradient(180deg, ${colors.primary} 0%, ${objRgba.primary} 100%)`
      }}/>
      <img
        className="ic-baseline-eco"
        src="https://c.animaapp.com/hYkRxqnJ/img/ic-baseline-eco-1.svg"
      />
      <div className="text-wrapper-2">Eco mode on</div>
      <div className="text-wrapper-3">86</div>
      <div className="text-wrapper-4">Range</div>
      <div className="text-wrapper-5">Km</div>
      <div className="rectangle-3" />
      <div className="rectangle-4" />
      <div className="text-wrapper-6">Hyper</div>
      <p className="element-km">
        <span className="span">80</span>
        <span className="text-wrapper-7">&nbsp;</span>
        <span className="text-wrapper-8">Km</span>
      </p>
      <div className="rectangle-5" />
      <div className="rectangle-6" />
      <div className="text-wrapper-9">Sports</div>
      <p className="p">
        <span className="span">110 </span>{" "}
        <span className="text-wrapper-8">Km</span>
      </p>
      <div className="rectangle-7" />
      <div className="text-wrapper-10">Bluetooth Pairing</div>
      <img
        className="ic-round-bluetooth"
        src="https://c.animaapp.com/hYkRxqnJ/img/ic-round-bluetooth-1.svg"
      />
      <div className="text-wrapper-11">Eco</div>
      <p className="element-km-2">
        <span className="text-wrapper-12">86</span>
        <span className="text-wrapper-7">&nbsp;</span>
        <span className="text-wrapper-8">Km</span>
        <span className="text-wrapper-7">&nbsp;</span>
      </p>
      <div className="rectangle-8" />
      <div className="rectangle-9" style={{backgroundColor:colors.primary}}/>
      <img
        className="vector"
        src="https://c.animaapp.com/hYkRxqnJ/img/vector-2.svg"
      />
      <div className="text-wrapper-13">Home</div>
      <img
        className="material-symbols"
        src="https://c.animaapp.com/hYkRxqnJ/img/material-symbols-person-outline-rounded.svg"
      />
      <img
        className="ic-baseline-map"
        src="https://c.animaapp.com/hYkRxqnJ/img/ic-baseline-map.svg"
      />
      <img
        className="img"
        src="https://c.animaapp.com/hYkRxqnJ/img/material-symbols-explore-outline-rounded.svg"
      />
      <img
        className="ic-outline-electric"
        src="https://c.animaapp.com/hYkRxqnJ/img/ic-outline-electric-moped.svg"
      />
      <div className="group">
        <div className="div-wrapper" style={{
          backgroundColor:colors.primary
        }}>
          <div className="text-wrapper-14">Pair</div>
        </div>
      </div>
      <div className="text-wrapper-15">current speed</div>
      <p className="element-kmph">
        <span className="text-wrapper-12">35</span>
        <span className="text-wrapper-7">&nbsp;</span>
        <span className="text-wrapper-8">Kmph</span>
      </p>
      <div className="rectangle-10" />
      <div className="text-wrapper-16">Last Data Sync:</div>
      <div className="text-wrapper-17">Today, 15:05:04 Pm</div>
      <img
        className="ph-dots-three"
        src="https://c.animaapp.com/hYkRxqnJ/img/ph-dots-three-vertical-bold.svg"
      />
      <div className="avatar">
        <img
          className="photo"
          src="https://c.animaapp.com/hYkRxqnJ/img/photo-1@2x.png"
        />
      </div>
      <div className="text-wrapper-18">{defaultBike.modelName? defaultBike.modelName:"ThingsUp"}</div>
      <div className="text-wrapper-19">Connected</div>
      <img
        className="ic-round-bluetooth-2"
        src="https://c.animaapp.com/hYkRxqnJ/img/ic-round-bluetooth.svg"
      />
      <img
        className="figure"
        src={defaultBike.sideViewImage ? defaultBike.sideViewImage:"https://c.animaapp.com/hYkRxqnJ/img/figure.png"}
        alt="img"
      />
      <div className="group-2">
        <div className="rectangle-11" />
        <div className="rectangle-12" />
      </div>
      <div className="text-wrapper-20">Battery</div>
      <div className="text-wrapper-21">83%</div>
      <img
        className="vector-2"
        src="https://c.animaapp.com/hYkRxqnJ/img/vector-1.svg"
      />
      <img
        className="vector-3"
        src="https://c.animaapp.com/hYkRxqnJ/img/vector.svg"
      />
      <img
        className="mdi-map-marker"
        src="https://c.animaapp.com/hYkRxqnJ/img/mdi-map-marker-distance.svg"
      />
      <img
        className="ic-baseline-eco-2"
        src="https://c.animaapp.com/hYkRxqnJ/img/ic-baseline-eco.svg"
      />
    </div>
    <img
      className="cib-facebook-f"
      src="https://c.animaapp.com/hYkRxqnJ/img/cib-facebook-f@2x.png"
    />
  </div>
</div>
</>

</>

  )
}

export default ClassicTheme