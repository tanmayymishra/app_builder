import React from "react";

function Battery({ primary }) {
  return (
    <svg
    style={{position:"absolute", left:"15px"}}
      xmlns="http://www.w3.org/2000/svg"
      width="174"
      height="440"
      fill="none"
      stroke="current"
      viewBox="0 0 174 152"
    >
      <mask
        id="mask0_1005_19783"
        style={{ maskType: "alpha" }}
        width="160"
        height="145"
        x="7"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <rect width="160" height="145" x="7" fill="#fff" rx="18"></rect>
      </mask>
      <g mask="url(#mask0_1005_19783)">
        <path
          fill="url(#grad)"
          d="M51.5 39C25.5 39 6.845 52.26-6 70l-3.916 59.912L77.972 185 176 139.249V19c-3.155 5.913-13.06 41.924-43.944 39.017C100 55 86.717 39 51.5 39z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="grad"
          x1="80"
          x2="80"
          y1="19"
          y2="185"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primary}></stop>
          <stop offset="1" stopColor={primary} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Battery;
