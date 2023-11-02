import React, { useContext, useEffect } from 'react'
import MaterialLayout from './components/layout/MaterialLayout'
import AppBuilderPage from './components/appBuilderPage/AppBuilderPage'
import ClassicTheme from './screens/classicTheme/ClassicTheme'
import FussionTheme from './screens/fussionTheme/FussionTheme'
import ModernTheme from './screens/modernTheme/ModernTheme'
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { InitialFormContext, AppDetailsContext } from './context/contexts'

const FormScreens = ({activeStep,selectForm, appDetails}) => {
 
  const {initialEditForm} = useContext(InitialFormContext)
  const {setAppDetails} = useContext(AppDetailsContext)
  // useEffect(()=>{
  //   initialEditForm.length>0 && setAppDetails(prev=>({...prev, theme:initialEditForm?.appTheme?.type}))
    
  // },[])
  console.log(initialEditForm, "vvvvvvvvvvvv")
  console.log(appDetails, "aaaaaaaaaa")
  return (
    <MaterialLayout>
      <div className={activeStep === 1 ? "appHomeScreen" : "app"}>
        <AppBuilderPage selectForm={selectForm} />
        {appDetails.theme === "Classic" ? (
          <ClassicTheme />
        ) : appDetails.theme === "Fusion" ? (
          <FussionTheme />
        ) : (
          <ModernTheme />
        )}
        {activeStep === 1 ? <HomeScreen /> : ""}
      </div>
    </MaterialLayout>
  )
}

export default FormScreens