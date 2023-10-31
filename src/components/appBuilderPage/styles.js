import { makeStyles } from '@mui/styles';
export default makeStyles(theme => ({
  container:{
    width:"100%",
    padding:0,
    margin:0,
  },
  stepper: {
    padding: theme.spacing(3, 1, 1),
  },
  step:{
    
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));
