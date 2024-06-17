import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from '../config/axiosConfig';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function RegisterCard({ handleClose, handleUpdate }) {
  const [board, setBoard] = useState('');
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('todo');
  const [tipo, setTipo] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeTipo = (event) => {
    setTipo(event.target.value);
  };

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
        Add Card
      </Typography>
      <TextField
        label="Nome"
        variant="outlined"
        margin="normal"
        value={board}
        onChange={(e) => {
          setBoard(e.target.value);
          setError(false); // Resetar o erro ao alterar o valor
        }}
        error={error}
        helperText={error ? 'Card name is required' : ''}
      />
       <TextField
        label="Descricao"
        variant="outlined"
        margin="normal"
        value={board}
        onChange={(e) => {
          setBoard(e.target.value);
          setError(false); // Resetar o erro ao alterar o valor
        }}
        error={error}
        helperText={error ? 'Card name is required' : ''}
      />
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="status"
          onChange={handleChange}
        >
          <MenuItem value={"todo"}>To Do</MenuItem>
          <MenuItem value={"doing"}>Doing</MenuItem>
          <MenuItem value={"done"}>Done</MenuItem>
        </Select>

        <InputLabel id="tipo-label">Tipo</InputLabel>
        <Select
          labelId="tipo-label"
          id="tipo"
          value={tipo}
          label="Tipo"
          onChange={handleChangeTipo}
        >
          <MenuItem value={"BUG"}>Bug</MenuItem>
          <MenuItem value={"FEATURE"}>Feature</MenuItem>
        </Select>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleRegister}>
        Add
      </Button>
      <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleClose}>
        Cancel
      </Button>
    </Box>
  );
}

export default RegisterCard;
