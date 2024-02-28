import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, FileField, SelectField } from "../../formFields";
import { ChromePicker } from "react-color";
import { ColorContext, AppDetailsContext,  } from "../../../context/contexts";
import reactCSS from "reactcss";
import { useField, useFormikContext } from "formik";

const AppThemeForm = (props) => {

  const [color1, setColor1] = useState("");
  const [displayColorPicker, setDisplayColorPicker] = useState({
    primary: false,
    secondary: false,
    accent: false,
    screenBackColorLight:false,
    textTitleColorLight:false,
    textSubtitleColorLight:false,
    screenBackColorDark:false,
    textTitleColorDark:false,
    textSubtitleColorDark:false
  });
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");

  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [color6, setColor6] = useState("");
  const [color7, setColor7] = useState("");
  const [color8, setColor8] = useState("");
  const [color9, setColor9] = useState("");


  const { values, setFieldValue } = useFormikContext();
  const {appDetails, setAppDetails} = useContext(AppDetailsContext)
  useEffect(()=>{
    setColor1(values.appTheme.primaryColor)
    setColor2(values.appTheme.secondaryColor)
    setColor3(values.appTheme.accentColor)
    setColor4(values.appTheme.screenBackColorLight)
    setColor5(values.appTheme.textTitleColorLight)
    setColor6(values.appTheme.textSubtitleColorLight)
    setColor7(values.appTheme.screenBackColorDark)
    setColor8(values.appTheme.textTitleColorDark)
    setColor9(values.appTheme.textSubtitleColorDark)
    setColors(
      {primary: values.appTheme.primaryColor,
        secondary:values.appTheme.secondaryColor,
        accent:values.appTheme.accentColor,
        screenBackColorLight:values.appTheme.screenBackColorLight,
        textTitleColorLight:values.appTheme.textTitleColorLight,
        textSubtitleColorLight:values.appTheme.textSubtitleColorLight,
        screenBackColorDark:values.appTheme.screenBackColorDark,
        textTitleColorDark:values.appTheme.textTitleColorDark,
        textSubtitleColorDark:values.appTheme.textSubtitleColorDark
      }
    )
  },[])
  useEffect(()=>{
    setAppDetails({
      ...appDetails, 
      theme:values.appTheme.type,
      appLauncherName:values.appTheme.appLauncherName,
      launcherLogo:values.appTheme.launcherLogo
    })
  },[values.appTheme.launcherLogo, values.appTheme.appLauncherName, values.appTheme.type])
  const { colors,setColors } = useContext(ColorContext);
  const [field] = useField(props);
  const {errors}= props
  const themeOptions=[]
  const handleColorChange = (type, e) => {
    setFieldValue(`appTheme.${type}Color`, e.hex)
    type === "primary"
      ? setColors({ ...colors, primary: e.hex })
      : "secondary"
      ? setColors({ ...colors, secondary: e.hex })
      : "accent" 
      ? setColors({  ...colors, accent: e.hex })
      : "screenBackColorLight"
      ? setColors({  ...colors, screenBackColorLight: e.hex })
      : "textTitleColorLight"
      ? setColors({  ...colors, textTitleColorLight: e.hex })
      : "textSubtitleColorLight"
      ? setColors({  ...colors, textSubtitleColorLight: e.hex })
      : "screenBackColorDark"
      ? setColors({  ...colors, screenBackColorDark: e.hex })
      : "textTitleColorDark"
      ? setColors({  ...colors, textTitleColorDark: e.hex })
      : setColors({  ...colors, textSubtitleColorDark: e.hex });
      
      
    // setColor(col.hex);
    if (type === "primary") {
      setColor1(e.hex);
    } else {
      if (type === "secondary") {
        setColor2(e.hex);
      }
    }

    if (type === "accent") {
      setColor3(e.hex);
    }
  };
  const handleDisplayColor = (type) => {
    type === "primary"
      ? setDisplayColorPicker({
          primary: !displayColorPicker.primary,
          accent: false,
          secondary: false,
        })
      : type === "accent"
      ? setDisplayColorPicker({
          primary:false,
          accent: !displayColorPicker.accent,
          secondary: false,
        })
      : setDisplayColorPicker({
        primary: false,
        accent: false,
          secondary: !displayColorPicker.secondary,
        });
    
  };

  const themeData=[
    { 
      value:"Modern",
      label:"Modern"
    },
    { 
      value:"Fusion",
      label:"Fusion"
    },
    { 
      value:"Classic",
      label:"Classic"
    },
  ]

  const themeTypes=[
    {
      value:"light",
      label:"Light"
    },
    {
      value:"dark",
      label:"Dark"
    }
  ]

  const handleColorClose=()=>{
   setDisplayColorPicker({primary:false, secondary:false, accent:false})
  }
  const styles = reactCSS({
    default: {
      color1: {
        width: "100%",
        height: "14px",
        borderRadius: "2px",
        background: `${color1}`,
      },
      color2: {
        width: "100%",
        height: "14px",
        borderRadius: "2px",
        background: `${color2}`,
      },
      color3: {
        width: "100%",
        height: "14px",
        borderRadius: "2px",
        background: `${color3}`,
      },
      swatch: {
        width: "100%",
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        App Theme
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}></Grid>
        <Grid item xs={12} sm={12}>
          {/* <InputField name="appTheme.type" label="Theme Name" fullWidth /> */}
          <SelectField name="appTheme.type" label="Theme Name" fullWidth
            select
            data={themeData}
          />
        </Grid>
        <Grid item xs={12}>
          <label>Primary Color</label>
          <div
            style={styles.swatch}
            onClick={() => handleDisplayColor("primary")}
          >
            <div style={styles.color1} />
          </div>
          
          {displayColorPicker.primary ? (
             <div style={ styles.popover }>
             <div style={ styles.cover } onClick={handleColorClose}/>
             <ChromePicker
              name="appTheme.primaryColor"
              label="Primary Color"
              color={color1}
              disableAlpha
              onChange={(e) => handleColorChange("primary", e)}
            />
           </div>
          ) : (
            ""
          )}
        </Grid>
        <br />
        <Grid item xs={12}>
          <label>Secondary Color</label>
          <div
            style={styles.swatch}
            onClick={() => handleDisplayColor("secondary")}
          >
            <div style={styles.color2} />
          </div>
          {displayColorPicker.secondary ? (
             <div style={ styles.popover }>
             <div style={ styles.cover } onClick={handleColorClose}/>
             <ChromePicker
              name="appTheme.secondaryColor"
              label="Secondary Color"
              color={color2}
              disableAlpha
              onChange={(e) => handleColorChange("secondary", e)}
              // onChangeComplete={color=> onChange(color.hex) }
            />
             </div>
           
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12}>
          <label>Accent Color</label>
          <div
            style={styles.swatch}
            onClick={() => handleDisplayColor("accent")}
          >
            <div style={styles.color3} />
          </div>
          {displayColorPicker.accent ? (
            <div style={ styles.popover }>
            <div style={ styles.cover } onClick={handleColorClose}/>
            <ChromePicker
              name="appTheme.accentColor"
              color={color3}
              disableAlpha
              onChange={(e) => handleColorChange("accent", e)}
              // onChangeComplete={color=> onChange(color.hex) }
            />
           </div>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
        <SelectField name="appTheme.theme" label="Theme Type" fullWidth
            select
            data={themeTypes}
        />
        </Grid>
        <Grid item xs={13}>
          <FileField
            name="appTheme.appLogo"
            label="App Logo"
            type="file"
            InputLabelProps={{
              shrink: true,
            }}
            // error={meta.touched && meta.error && true}
            value={undefined}
            fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField
            name="appTheme.appLauncherName"
            label="App Launcher Name"
            // inputProps={{ maxLength: 10 }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FileField
            name="appTheme.launcherLogo"
            label="Launcher Logo"
            type="file"
            InputLabelProps={{
              shrink: true,
            }}
            value={undefined}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AppThemeForm;
