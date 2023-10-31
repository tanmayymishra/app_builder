import React from 'react'
import { CircularProgress, useMediaQuery } from '@mui/material'

const Thumb = (props) => {

    const {file, src, variant = "normal"}= props
    const matchWidthBigScreen = useMediaQuery("(min-width:900px)");

    if (!file || !src) {
        return null;
      }

      if (src.readyState < 2) {
        return <CircularProgress size={24} />;
        //    <p>Loading ... </p>;
      }

  return (
    <img
    src={src}
    alt="img"
    style={{
      maxWidth: `${
        variant === "small"
          ? "100px"
          : matchWidthBigScreen
          ? "800px"
          : "350px"
      }`,
      minWidth: `${
        variant === "small"
          ? "100px"
          : matchWidthBigScreen
          ? "700px"
          : "300px"
      }}`,
    // width:"400px",
    // height:"400px",
      padding: `${variant === "small" ? "1px" : "2px"}`,
      backgroundColor: "white",
      marginLeft: `${variant === "small" ? "0px" : "20px"}`,
      maxHeight: 1000
    }}
  />
  )
}

export default Thumb