import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from '../config/axiosConfig';

function RegisterBoard({ handleClose, handleUpdate }) {
  const [board, setBoard] = useState('');
  const [error, setError] = useState(false);

  const handleRegister = async () => {
    if (board === '') {
      setError(true);
    } else {
      try {
        await axios.post('/quadros', { nome: board });
        handleUpdate();
        setBoard('');
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
        Register Board
      </Typography>
      <TextField
        label="Board"
        variant="outlined"
        margin="normal"
        value={board}
        onChange={(e) => {
          setBoard(e.target.value);
          setError(false); // Resetar o erro ao alterar o valor
        }}
        error={error}
        helperText={error ? 'Board name is required' : ''}
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleRegister}>
        Add
      </Button>
      <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleClose}>
        Cancel
      </Button>
    </Box>
  );
}

export default RegisterBoard;
