import React, { useState } from "react";
import { at } from "lodash";
import { getIn, ErrorMessage, useField, useFormikContext } from "formik";
import Thumb from "./Thumb";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export default function FileField(props) {
  const { values, setFieldValue } = useFormikContext();
  const [field, form, meta] = useField(props);
  const { errorText, type, ...rest } = props;
  const { value } = field;
  // const [currFile, setCurrFile] = useState(value.file)
  // const [currSrc, setCurrSrc] = useState(value.src)
  console.log(value, "valueeee");
  function _renderHelperText() {
    const [touched, error, value] = at(form, "touched", "error");
    if (touched && error) {
      return error;
    } else {
      return form.value?.length > 1 ? "Choose another File" : "Select a Field";
    }
  }
  // console.log(form, field, "formik form values")
  console.log(form, "metaaaaaaa");
  const handleChange = async (e) => {
    console.log(e.currentTarget.files[0], "file field event");
    // console.log(field, "field props in file field")
    const file = e.currentTarget.files[0];
    // const files= e.currentTarget.files.length >1 ? e.currentTarget.files:""
    const reader = new FileReader();
    // setFieldValue(field.name, e.currentTarget.files[0]);

    reader.readAsDataURL(file);
    let base64String;

    reader.onload = await function (event) {
      base64String = event.target?.result;
      setFieldValue(field.name, base64String);
    };
  };

  return (
    <>
        <TextField
          type={type ? type : "file"}
          error={
            field.value.length < 1 && form.error?.length > 1 && form.touched
              ? true
              : false
          }
          helperText={_renderHelperText()}
          {...field}
          {...rest}
          inputProps={{
            style: {
              // color: "white"
              color:
                field.value.length < 1 && form.error?.length > 1 && form.touched
                  ? "#900000"
                  : "rgba(0, 0, 0, 0.54)",
              // color: form.error?.length > 1 ? "black" : "white"
            },
            // accept:"image/png, .svg"
          }}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {field.value && (
          <Thumb file={field.value} src={field.value} variant="small"></Thumb>
        )}
    </>
  );
}
