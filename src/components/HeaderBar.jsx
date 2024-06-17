import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function HeaderBar({ option, handleOpen }) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "3em", width: "auto" }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} /> {}
          {option === 'boards' ? (
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add Board
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}