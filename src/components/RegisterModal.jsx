import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function RegisterModal({ handleClose }) {
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h6" id="modal-title" mb={2}>
        Register
      </Typography>
      <TextField label="Username" variant="outlined" margin="normal" />
      <TextField label="Email" variant="outlined" margin="normal" />
      <TextField label="Password" type="password" variant="outlined" margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Register
      </Button>
      <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleClose}>
        Cancel
      </Button>
    </Box>
  );
}

export default RegisterModal;
