import React, {useContext} from 'react'
import "./LoaderComponent.css"
import { LoaderContext } from '../../context/contexts'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderComponent = () => {
    const {loading, setLoading} = useContext(LoaderContext)
  return (
    <>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default LoaderComponent