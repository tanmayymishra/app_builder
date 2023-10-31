import React, { useContext } from "react";
import { ColorPicker, useColor } from "react-color-palette";
// import "react-color-palette/lib/css/styles.css";
import { useField } from 'formik';
import {ColorContext} from "../../context/contexts"


export default function ColorPickerField(props) {
    const {colors, setColors} = useContext(ColorContext)
  const [color, setColor] = useColor("hex", "#00FF00");
  const [field, meta] = useField(props);
  const {...rest} = props;
  // const {type,title} = props;

  const handleOnChange=()=>{
    // setColor(color)
      console.log(color, "color")
    //   type==="primary"? setColors({primary:color}):"secondary"?setColors({secondary:color}):setColors({accent:color})
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* <h1>{title}</h1> */}
      <ColorPicker
        width={600}
        height={100}
        color={color}
        onChange={()=>handleOnChange()}
        hideHSV
        dark
        {...field}
        {...rest}
      />
    </div>
  );
}
