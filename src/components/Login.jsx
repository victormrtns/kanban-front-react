import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Modal } from '@mui/material';
import axios from 'axios';
import HeaderBar from './HeaderBar';
import RegisterModal from './RegisterModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Login() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { email, senha: password });
      localStorage.setItem('token', response.data.token);
      navigate('/boards');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <>
      <HeaderBar />
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField label="Email" variant="outlined" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
        <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleOpen}>
          Register
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <RegisterModal handleClose={handleClose} />
          </Box>
        </Modal>
      </Box>
    </>
  );
}

export default Login;
