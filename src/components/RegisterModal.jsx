import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

function RegisterModal({ handleClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/register', { nome: username, email, senha: password });
      localStorage.setItem('token', response.data.token);
      handleClose();
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

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
      <TextField label="Username" variant="outlined" margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Email" variant="outlined" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleRegister}>
        Register
      </Button>
      <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleClose}>
        Cancel
      </Button>
    </Box>
  );
}

export default RegisterModal;
