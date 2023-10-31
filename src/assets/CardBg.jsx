import React from "react";

function CardBg({left, primary, secondary}) {
  return (
    <svg
    style={{position:"absolute", left :left, top: "542px"}}
      xmlns="http://www.w3.org/2000/svg"
      width="125"
      height="157"
      fill="none"
      viewBox="0 0 125 157"
    >
      <g filter="url(#filter0_d_1005_19795)">
        <mask
          id="mask0_1005_19795"
          style={{ maskType: "alpha" }}
          width="111"
          height="143"
          x="7"
          y="7"
          maskUnits="userSpaceOnUse"
        >
          <rect width="111" height="143" x="7" y="7" fill="#fff" rx="8"></rect>
        </mask>
        <g mask="url(#mask0_1005_19795)">
          <ellipse
            cx="46.775"
            cy="52.539"
            fill="url(#paint0_radial_1005_19795)"
            rx="46.775"
            ry="52.539"
            transform="matrix(.9935 -.11381 .09 .99594 -16 4.135)"
          ></ellipse>
          <ellipse
            cx="73.288"
            cy="82.319"
            fill="url(#paint1_radial_1005_19795)"
            rx="73.288"
            ry="82.319"
            transform="matrix(.9935 -.11381 .09 .99594 2.65 14.18)"
          ></ellipse>
          <rect
            width="111"
            height="143"
            x="7"
            y="7"
            fill="#fff"
            fillOpacity="0.65"
            rx="8"
          ></rect>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1005_19795"
          width="111"
          height="143"
          x="7"
          y="7"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.271667 0 0 0 0 0.271667 0 0 0 0 0.271667 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1005_19795"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1005_19795"
            result="shape"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_1005_19795"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(83.677 -5.954 52.391) scale(52.8602 47.2104)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={secondary}></stop>
          <stop offset="1" stopColor={secondary} stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_1005_19795"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(85.498 -7.883 80.802) scale(68.5166 61.0982)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primary}></stop>
          <stop offset="1" stopColor={primary} stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default CardBg;