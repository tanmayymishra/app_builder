import React, { useContext } from 'react'
import "./HomeScreen.css"
import { AppDetailsContext } from '../../context/contexts'
import { Typography } from '@mui/material'

const HomeScreen = () => {
  const {appDetails}= useContext(AppDetailsContext)
  return (
    <div className='container'>
       <img src={require("../../assets/homescreen.png")} alt="phone screen"  className='phoneImg'/>
       <div className="logoContainer">

       <img src={appDetails.launcherLogo?appDetails.launcherLogo:require("../../assets/Logo1.png")} alt="App Logo" className='appLogo'/>
       <div className="appTextContainer">

       <Typography className="appName" variant='caption' sx={{fontSize:"0.6rem"}}> 
        {appDetails.appLauncherName?appDetails.appLauncherName:"Thingsup" }
       </Typography>
       </div>
       </div>
    </div>
  )
}

export default HomeScreen