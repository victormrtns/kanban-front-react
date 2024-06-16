import React, { useEffect, useState } from 'react';
import { Container, Grid, Modal, Box } from '@mui/material';
import BoardComponent from '../components/BoardComponent';
import HeaderBar from '../components/HeaderBar';
import RegisterBoard from '../components/RegisterBoard';
import axios from '../config/axiosConfig';

function Boards() {
  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/quadros/email');
      setBoards(response.data);
    } catch (error) {
      console.error('Failed to fetch boards', error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpdate = async () => {
    await fetchData();
    handleClose();
  };

  return (
    <>
      <HeaderBar option='boards' handleOpen={handleOpen} />
      <Container maxWidth="false">
        <Grid container spacing={4}>
          {boards.map((board, key) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <BoardComponent name={board.nome} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <RegisterBoard handleClose={handleClose} handleUpdate={handleUpdate} />
        </Box>
      </Modal>
    </>
  );
}

export default Boards;
