import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import  TextField  from '@mui/material/TextField';

export default function InputField(props) {

  const { errorText,type, ...rest } = props;
  const [field, meta] = useField(props);
  // console.log(meta,"meta input field")
  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      // console.log(error, "input field error")
      return error;
    }
  }
  return (
    <TextField
      type= {type?type:"text"}
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
