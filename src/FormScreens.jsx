import React, { useContext, useEffect } from 'react'
import MaterialLayout from './components/layout/MaterialLayout'
import AppBuilderPage from './components/appBuilderPage/AppBuilderPage'
import ClassicTheme from './screens/classicTheme/ClassicTheme'
import FussionTheme from './screens/fussionTheme/FussionTheme'
import ModernTheme from './screens/modernTheme/ModernTheme'
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { InitialFormContext, AppDetailsContext, LoaderContext } from './context/contexts'

const FormScreens = ({activeStep,selectForm, appDetails}) => {
 
  const {initialEditForm} = useContext(InitialFormContext)
  const {setAppDetails} = useContext(AppDetailsContext)
  const {setLoading} = useContext(LoaderContext)
  useEffect(()=>{
    setLoading(true)
    selectForm === "edit" && initialEditForm && setAppDetails(prev=>({...prev, theme:initialEditForm?.appTheme?.type})) 
    setTimeout(()=>{
      setLoading(false)
    },[1000])
  },[])
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