import React, { useContext } from "react";
import { Snackbar } from "@mui/material";
import { SnackbarContext } from "../../context/contexts";
import MuiAlert from '@mui/material/Alert';

function SnackbarComponenet(props) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const {snackbarDetails, setSnackbarDetails}= useContext(SnackbarContext)
  const handleClose=(event, reason)=>{
    setSnackbarDetails(prev=>({...prev, open:false}));
  }
  return (
    <div className="snackbarContainer">
      <Snackbar open={snackbarDetails.open} autoHideDuration={4000} onClose={handleClose} className="snackbar">
        <Alert onClose={handleClose}severity={snackbarDetails.type?snackbarDetails.type:"success"}>
          {snackbarDetails.data}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackbarComponenet;