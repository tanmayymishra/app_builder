import React from 'react'
import MaterialLayout from './components/layout/MaterialLayout'
import AppBuilderPage from './components/appBuilderPage/AppBuilderPage'
import ClassicTheme from './screens/classicTheme/ClassicTheme'
import FussionTheme from './screens/fussionTheme/FussionTheme'
import ModernTheme from './screens/modernTheme/ModernTheme'
import HomeScreen from "./screens/homeScreen/HomeScreen";


const FormScreens = ({activeStep,selectForm, appDetails}) => {
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