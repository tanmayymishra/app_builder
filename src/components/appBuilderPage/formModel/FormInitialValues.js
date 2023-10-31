import { builderFormmodel } from "./BuilderFormModel";

const {
    formField:{
        account:{
            appName,
            appLauncherName,
            brandName,
            brandInfo,
            adminAccount,
            serverURL,
            privacyPolicyURL,
            termsAndConditionURL,
        },
        // appTheme:{
        //     type,
        //     primaryColor,
        //     secondaryColor,
        //     accentColor,
        //     font,
        //     assets,
        //     appLogo,
        //     launcherLogo,
        // }
    }
}= builderFormmodel;

export default {
    account:{
        [appName.name]:"",
        [appLauncherName.name]:"",
        [brandName.name]:"",
        [brandInfo.name]:"",
        [adminAccount.name]:"",
        [serverURL.name]:"",
        [privacyPolicyURL.name]:"",
        [termsAndConditionURL.name]:"",
    },
    // appTheme:{
        
    // }
    
}