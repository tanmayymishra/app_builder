import React from 'react'
import "./SelectFormScreen.css"
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom';


const SelectFormScreen = ({setSelectForm}) => {
    const handleClick=(e)=>{
        setSelectForm(e)
    }
  return (
    <div className="formContainer">
       <section className='section'>
        <h1>App Builder</h1>
        {/* <div className="buttonsContainer"> */}
            <Grid container spacing={3} mt={1}>
                <Grid item xs={12} xm={6}>
                <Button variant="outlined" sx={{backgroundColor:"primary", color:"white"}} onClick={()=>handleClick("new")}>New Form</Button>
                </Grid>
                <Grid item xs={12} xm={6}>
                <Button variant="outlined" sx={{ color:"white"}} onClick={()=>handleClick("edit")}>Edit Form</Button>
                </Grid>
            </Grid>
        {/* </div> */}
       </section>
    </div>
  )
}

export default SelectFormScreen