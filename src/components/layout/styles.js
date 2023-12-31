import {
    
    makeStyles
  } from '@mui/styles';
  import { createTheme,responsiveFontSizes } from '@mui/material/styles';

  import { cyan } from '@mui/material/colors';
  
  let theme = createTheme({
    palette: {
      type: 'dark',
      primary: cyan,
      secondary: cyan
    }
  });
  
  theme = responsiveFontSizes(theme);
  
  const useStyle = makeStyles(() => ({
    container:{
      backgroundColor:"#29242c",
    },
    root: {
      borderRadius: "50px",
      width: 'auto',
      padding:"none",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3)
      }
    }
  }));
  
  export { theme, useStyle };
  