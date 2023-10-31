import React from 'react';
import { Typography } from '@mui/material';

function BuildSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you.
      </Typography>
      <Typography variant="subtitle1">
       Your App has been build successfully.
      </Typography>
    </React.Fragment>
  );
}

export default BuildSuccess;
