import { AppBar, Button, Fab, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import AppleIcon from '@mui/icons-material/Apple';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
            <AppleIcon />
          </IconButton>
          <Typography
variant="h6"
noWrap
component="a"
href=""
sx={{
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}}
>
MYAPP
</Typography>
<Button  sx={{ color: 'white', display: 'block' }} ><Link to='/'style={{color:'white'}}>HOME</Link></Button>&nbsp;&nbsp;
<Button sx={{ color: 'white', display: 'block' }}><Link to='/add'style={{color:'white'}}>ADD</Link></Button>&nbsp;&nbsp;
<Button sx={{color: 'white', display: 'block' }}><Link to='/view' style={{color:'white'}}>VIEW</Link></Button>&nbsp;&nbsp;


        </Toolbar>
      </AppBar>
    </Box>
    
  )
}

export default Navbar





