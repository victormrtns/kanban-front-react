import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

function RegisterModal({ handleClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const validate = () => {
    let tempErrors = { username: '', email: '', password: '' };
    let isValid = true;

    if (!username) {
      tempErrors.username = 'Username is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleRegister = async () => {
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/auth/register', { nome: username, email, senha: password });
        localStorage.setItem('token', response.data.token);
        handleClose();
      } catch (error) {
        console.error('Registration failed', error);
      }
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
      <TextField 
        label="Username" 
        variant="outlined" 
        margin="normal" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        error={!!errors.username}
        helperText={errors.username}
      />
      <TextField 
        label="Email" 
        variant="outlined" 
        margin="normal" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField 
        label="Password" 
        type="password" 
        variant="outlined" 
        margin="normal" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        error={!!errors.password}
        helperText={errors.password}
      />
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
