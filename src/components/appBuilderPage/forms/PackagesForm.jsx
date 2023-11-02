import React from "react";
import { Grid, Typography } from "@mui/material";
import { InputField, FileField } from "../../formFields";

const PackagesForm = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Package Details
      </Typography>
      <Typography variant="h6" gutterBottom>
      Android
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} >
          <InputField
            name="packages.android.packageName"
            label="Package Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} >
          <FileField
            name="packages.android.googleServiceJson"
            label="Google Service JSON"
            type="file"
            InputLabelProps={{
                shrink: true,
              }}
              value={undefined}
                   
                // accept="application/JSON"
             
            fullWidth
          />
        </Grid> 
      <Grid item xs={12}>
          <InputField
            name="packages.android.releaseStorePassword"
            label="Release Store Password"
            fullWidth
          />
        </Grid>
      <Grid item xs={12} >
          <InputField
            name="packages.android.releaseKeyPassword"
            label="Release Key Password"
            fullWidth
          />
        </Grid>
      <Grid item xs={12}>
          <InputField
            name="packages.android.releaseKeyAlias"
            label="Release Key Alias"
            fullWidth
          />
        </Grid>
      <Grid item xs={12} >
          <FileField
            name="packages.android.releaseStoreFile"
            label="Release Store File"
            type="file"
            InputLabelProps={{
                shrink: true,
              }}
              value={undefined}
            fullWidth
          />
        </Grid>       
            
      </Grid>
    </React.Fragment>
  );
};

export default PackagesForm;
