import React from 'react';
import { Paper, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import Header from '../header/Header';
// import Footer from '../footer/Footer';
import { theme, useStyle } from './styles';
import StepperComponent from '../stepper/StepperComponent';

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="THINGSUP APP BUILDER"/>
      <div className={classes.container}>

      <StepperComponent/>
      <div className={classes.root}>
        <Paper className={classes.paper} sx={{borderRadius:"25px"}}>{children}</Paper>
      </div>
      </div>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
