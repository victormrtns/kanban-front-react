import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1,marginBottom:"3em",width:"auto" }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
