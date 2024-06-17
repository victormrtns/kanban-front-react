import React, { useState } from 'react';
import { Box, Typography, TextField, Button, InputLabel, MenuItem, Select } from '@mui/material';
import axios from '../config/axiosConfig';

function RegisterCard({ handleClose, handleUpdate, boardId }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('todo');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState(false);

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeTipo = (event) => {
    setTipo(event.target.value);
  };

  const handleRegister = async () => {
    if (nome === '' || descricao === '' || tipo === '') {
      setError(true);
    } else {
      try {
        await axios.post('/cards', {
          nome,
          descricao,
          status,
          type:tipo,
          quadroId: boardId
        });
        handleUpdate();
        setNome('');
        setDescricao('');
        setTipo('');
        setError(false);
      } catch (error) {
        console.error('Registration failed', error);
      }
    }
  };

  return (
    <Box component="form" display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" id="modal-title" mb={2}>
        Add Card
      </Typography>
      <TextField
        label="Nome"
        variant="outlined"
        margin="normal"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
          setError(false);
        }}
        error={error && nome === ''}
        helperText={error && nome === '' ? 'Nome is required' : ''}
      />
      <TextField
        label="Descricao"
        variant="outlined"
        margin="normal"
        value={descricao}
        onChange={(e) => {
          setDescricao(e.target.value);
          setError(false);
        }}
        error={error && descricao === ''}
        helperText={error && descricao === '' ? 'Descricao is required' : ''}
      />
      <InputLabel id="status-label">Status</InputLabel>
      <Select
        labelId="status-label"
        id="status"
        value={status}
        label="Status"
        onChange={handleChangeStatus}
      >
        <MenuItem value="todo">To Do</MenuItem>
        <MenuItem value="doing">Doing</MenuItem>
        <MenuItem value="done">Done</MenuItem>
      </Select>
      <InputLabel id="tipo-label">Tipo</InputLabel>
      <Select
        labelId="tipo-label"
        id="tipo"
        value={tipo}
        label="Tipo"
        onChange={handleChangeTipo}
      >
        <MenuItem value="BUG">Bug</MenuItem>
        <MenuItem value="FEATURE">Feature</MenuItem>
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
