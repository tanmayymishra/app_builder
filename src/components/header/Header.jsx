import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Logo1 from "../../assets/Logo1.png"
import Avatar from '@mui/material/Avatar';


export default function Header({title}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{backgroundColor:"#1a191d", color:"white", height:"50px"}}>
        <Toolbar variant="dense" >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 0.5 }}>
          <Avatar alt="logo" src={Logo1} sx={{}}/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 0,
              display: { xs: '12', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize:13,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
