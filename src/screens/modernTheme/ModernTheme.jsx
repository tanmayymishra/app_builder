import React, { useContext } from "react";
  import "./style.css";
  import "./styleguide.css";
  import "./globals.css";
import styled from "styled-components";
import { ColorContext, DefaultContext } from "../../context/contexts";
import Battery from "../../assets/Battery";
import CardBg from "../../assets/CardBg";
import HomeIcon from "../../assets/HomeIcon";

const ModernTheme = () => {

  const { colors } = useContext(ColorContext);
  const { defaultBike } = useContext(DefaultContext);

  

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
    let hex = colors[key];
    let values = hex.match(/\w\w/g);
    let [r, g, b] = values.map((k) => parseInt(k, 16));
    let rgb = `rgb(${r},${g},${b})`;
    let rgba = `rgba( ${r}, ${g}, ${b}, 0 )`;
    // setColorsRgb(prev=>({...prev, [key]:rgb}))
    objRgb[key] = rgb;
    objRgba[key] = rgba;
  });
  
  const Rectangle = styled.div`
    position: absolute;
    width: 414px;
    height: 812px;
    top: 33px;
    left: 0;
    background: linear-gradient(
      358.45deg,
      #e4eafe -0.49%,
      rgba(233, 236, 242, 0) 96.85%
    );
  `;
  const Ellipse = styled.div`
    position: absolute;
    width: 217px;
    height: 217px;
    top: 17px;
    left: 166px;
    border-radius: 108.5px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      ${objRgb.secondary} 0%,
      ${objRgba.secondary} 100%
    );
  `;
  const Ellipse2 = styled.div`
    position: absolute;
    width: 340px;
    height: 340px;
    top: 42px;
    left: 207px;
    border-radius: 170px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      ${objRgb.primary} 0%,
      ${objRgba.primary} 100%
    );
  `;

  const VectorWrapper = styled.div`
    position: absolute;
    width: 91px;
    height: 60px;
    top: 421px;
    left: 290px;
    background-color: ${colors.primary};
    border-radius: 8.38px;
  `;

  return (
    <>
      
      <div className="silverContainer">
    <img className="phoneBg" src={require("../../assets/iphone13.png")}/>
        <div className="div">
          <div className="overlap">
            <div className="overlap-group">
              <Rectangle />
              <Ellipse />
              <Ellipse2 />
              <div className="text-wrapper">Connected</div>
              <img
                className="ic-round-bluetooth"
                src="https://c.animaapp.com/7pdrDurb/img/ic-round-bluetooth.svg"
                alt="img"
              />
              <img
                className="element-eu"
                src={defaultBike.inclinedViewImage ? defaultBike.inclinedViewImage:`${require("../../assets/default_bike_img.png")}`}
                alt="img"
              />
              <div className="rectangle-2" />
              <div className="text-wrapper-2">Home</div>
              <div className="group">
                <img
                  className="material-symbols"
                  src="https://c.animaapp.com/7pdrDurb/img/material-symbols-person-outline-rounded.svg"
                  alt="img"
                />
                <div className="text-wrapper-3">Profile</div>
              </div>
              <div className="group-2">
                <div className="text-wrapper-4">Trip</div>
                <img
                  className="ic-baseline-map"
                  src="https://c.animaapp.com/7pdrDurb/img/ic-baseline-map.svg"
                  alt="img"
                />
              </div>
              <div className="group-3">
                <img
                  className="img"
                  src="https://c.animaapp.com/7pdrDurb/img/material-symbols-explore-outline-rounded.svg"
                  alt="img"
                />
                <div className="text-wrapper-5">Explore</div>
              </div>
          
              <img
                className="ic-round-home"
                src="https://c.animaapp.com/7pdrDurb/img/ic-round-home.svg"
                alt="img"
              />
              <div className="rectangle-3" />
           
               <Battery   primary={colors.primary} />
              <div className="group-4">
                <div className="text-wrapper-6">86</div>
                <div className="overlap-2">
                  <div className="text-wrapper-7">Range</div>
                  <div className="text-wrapper-8">Km</div>
                </div>
                <img
                  className="ic-baseline-eco"
                  src="https://c.animaapp.com/7pdrDurb/img/ic-baseline-eco-1.svg"
                  alt="img"
                />
                <div className="text-wrapper-9">Eco</div>
                <div className="text-wrapper-10">35 Kmph</div>
                <div className="text-wrapper-11">Speed</div>
                <div className="text-wrapper-12">76%</div>
                <div className="text-wrapper-13">Battery</div>
              </div>
              <img
                className="ph-dots-three"
                src="https://c.animaapp.com/7pdrDurb/img/ph-dots-three-vertical-bold.svg"
                alt="img"
              />
              <div className="rectangle-4" />
              <img
                className="majesticons-arrow-up"
                src="https://c.animaapp.com/7pdrDurb/img/majesticons-arrow-up.svg"
                alt="img"
              />
              <div className="text-wrapper-14">Swipe to Off</div>
              <VectorWrapper>
                <img
                  className="vector"
                  src="https://c.animaapp.com/7pdrDurb/img/vector-1.svg"
                  alt="img"
                />
              </VectorWrapper>
              <div className="group-5">
                <div className="text-wrapper-15">Detail</div>
                <img
                  className="mdi-motorbike"
                  src="https://c.animaapp.com/7pdrDurb/img/mdi-motorbike.svg"
                  alt="img"
                />
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-3">
                  <div className="text-wrapper-16">Last Data Sync:</div>
                  <div className="text-wrapper-17">Today, 15:05:04 Pm</div>
                </div>
              </div>
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <img
                className="mask-group-2"
                src="https://c.animaapp.com/7pdrDurb/img/mask-group-2@2x.png"
                alt="img"
              />
              <CardBg className="mask-group-2" left="148px" primary={colors.primary} secondary={colors.secondary}/>
              <div className="rectangle-7" />
              <CardBg className="mask-group-3"  left="280px" primary={colors.primary} secondary={colors.secondary}/>
              <div className="group-6">
                <div className="text-wrapper-18">86 Km</div>
                <div className="text-wrapper-19">Hyper</div>
              </div>
              <div className="group-7">
                <div className="text-wrapper-20">86 Km</div>
                <div className="text-wrapper-21">Eco</div>
                <img
                  className="ic-baseline-eco-2"
                  src="https://c.animaapp.com/7pdrDurb/img/ic-baseline-eco.svg"
                  alt="img"
                />
              </div>
              <div className="group-8">
                <div className="text-wrapper-sports">86 Km</div>
                <div className="text-wrapper-sports2">Sports</div>
                <img
                  className="ic-baseline-sports-2"
                  src={require("../../assets/sports.png")}
                  alt="img"
                />
              </div>
              <img
                className="vector-2"
                src="https://c.animaapp.com/7pdrDurb/img/vector.svg"
                alt="img"
              />
            <CardBg className="mask-group-4" top="542px" left="16px" primary={colors.primary} secondary={colors.secondary}/>
            </div>
            <div className="text-wrapper-22">{defaultBike.modelName? defaultBike.modelName:"ThingsUp"}</div>
          </div>
          <div className="iphone-SE">
            <div className="time">9:41 AM</div>
            <div className="right-side">
              <div className="icon-battery">
                <div className="reserve-wrapper">
                  <img
                    className="reserve"
                    src="https://c.animaapp.com/7pdrDurb/img/reserve-2.svg"
                    alt="img"
                  />
                </div>
                <img
                  className="terminal"
                  src="https://c.animaapp.com/7pdrDurb/img/terminal-2.svg"
                  alt="img"
                />
              </div>
              <div className="text-wrapper-23">100%</div>
              <div className="icon-alarm">
                <img
                  className="alarm"
                  src="https://c.animaapp.com/7pdrDurb/img/alarm-2.svg"
                  alt="img"
                />
              </div>
              <div className="icon-bluetooth">
                <img
                  className="bluetooth"
                  src="https://c.animaapp.com/7pdrDurb/img/bluetooth.svg"
                  alt="img"
                />
              </div>
            </div>
            <div className="left-side">
              <div className="icon-signal">
                <img
                  className="empty-bar"
                  src="https://c.animaapp.com/7pdrDurb/img/empty-bar.svg"
                  alt="img"
                />
                <img
                  className="full-bars"
                  src="https://c.animaapp.com/7pdrDurb/img/full-bars-2.svg"
                  alt="img"
                />
              </div>
              <div className="carrier">Figma</div>
              <div className="icon-wifi">
                <img
                  className="wi-fi"
                  src="https://c.animaapp.com/7pdrDurb/img/wi-fi-2.svg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernTheme;
