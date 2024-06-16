import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from '../config/axiosConfig';

export default function BoardComponent({ id, name, onUpdate }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const fontSize = isSmallScreen ? '1rem' : isMediumScreen ? '1.5rem' : '1.8rem';
  
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleDelete = async () => {
    try {
      await axios.delete(`/quadros/${id}`);
      onUpdate();
    } catch (error) {
      console.error('Failed to delete board', error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`/quadros/${id}`, { nome: newName, usuarios_id: [] });
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error('Failed to edit board', error);
    }
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)', 
        }
      }}
    >
      <CardContent>
        {isEditing ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField 
              label="Board Name" 
              variant="outlined" 
              margin="normal" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
            />
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Save
            </Button>
          </Box>
        ) : (
          <>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize }}
            >
              {name}
            </Typography>
            <Button variant="outlined" color="primary" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleDelete}>
              Delete
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
