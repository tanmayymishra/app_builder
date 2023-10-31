export const BuilderFormModel= {
    formId:"builderForm",
    formField:{
        account:{
            appName:{
                name: 'appName',
                label: 'App name*',
                requiredErrorMsg: 'App Name is required'
            },
            appLauncherName:{
                name: 'appLauncherName',
                label: 'App Launcher Name*',
                requiredErrorMsg: 'App Launcher Name is required'
            },
            brandName:{
                name: 'brandName',
                label: 'Brand Name*',
                requiredErrorMsg: 'Brand Name is required'
            },
            brandInfo:{
                name: 'brandInfo',
                label: 'Brand Info*',
                requiredErrorMsg: 'Brand Info is required'
            },
            adminAccount:{
                name: 'adminAccount',
                label: 'Admin Account*',
                requiredErrorMsg: 'Admin Account is required'
            },
            serverURL:{
                name: 'serverURL',
                label: 'Server URL*',
                requiredErrorMsg: 'Server URL is required'
            },
            privacyPolicyURL:{
                name: 'privacyPolicyURL',
                label: 'Privacy Policy URL*',
                requiredErrorMsg: 'Privacy Policy URL is required'
            },
            termsAndConditionURL:{
                name: 'termsAndConditionURL',
                label: 'Terms and Condition URL*',
                requiredErrorMsg: 'Terms and Condition URL is required'
            },
        },
        appTheme:{
            type:{
                name: 'type',
                label: 'Type*',
                requiredErrorMsg: 'Type is required'
            },
            primaryColor:{
                name: 'primaryColor',
                label: 'Primary Color',
                // requiredErrorMsg: 'Primary Color is required'
            },
            secondaryColor:{
                name: 'secondaryColor',
                label: 'Secondary Color',
                // requiredErrorMsg: 'Secondary Color is required'
            },
            accentColor:{
                name: 'accentColor',
                label: 'Accent Color',
                // requiredErrorMsg: 'Accent Color is required'
            },
            font:{
                name: 'font',
                label: 'Font*',
                requiredErrorMsg: 'Font is required'
            },
            assets:{
                name: 'assets',
                label: 'Assets*',
                requiredErrorMsg: 'Assets is required'
            },
            appLogo:{
                name: 'appLogo',
                label: 'App Logo*',
                requiredErrorMsg: 'App Logo is required'
            },
            launcherLogo:{
                name: 'launcherLogo',
                label: 'Launcher Logo*',
                requiredErrorMsg: 'Launcher Logo is required'
            },
          
        }
    }
}