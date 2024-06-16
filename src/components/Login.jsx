import React, { useState } from 'react';
import { Button, TextField,Modal, Typography } from '@mui/material';
import RegisterModal from './RegisterModal';
import { useNavigate } from "react-router-dom"; 
import HeaderBar from './HeaderBar';
import Box from "@mui/material/Box";
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
  let navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = () => {
    navigate("/boards");
  }

  return (
    <>
      <HeaderBar/>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField label="Email" variant="outlined" margin="normal" />
        <TextField label="Password" type="password" variant="outlined" margin="normal" />
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
