import React, { useEffect, useState } from 'react';
import axios from '../config/axiosConfig';
import { Container, Grid, Card, CardContent, Typography, Button, Modal, Box, Divider } from '@mui/material';
import HeaderBar from '../components/HeaderBar';
import RegisterCard from '../components/RegisterCard';
import CardComponent from '../components/CardComponent';

function BoardPage({ id }) {
  const [board, setBoard] = useState(null);
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchBoardDetails();
    fetchCards();
  }, []);

  const fetchBoardDetails = async () => {
    try {
      const response = await axios.get(`/quadros/${id}`);
      setBoard(response.data);
    } catch (error) {
      console.error('Failed to fetch board details', error);
    }
  };

  const fetchCards = async () => {
    try {
      const response = await axios.get(`/cards/quadro/${id}`);
      console.log(response.data);
      setCards(response.data);
    } catch (error) {
      console.error('Failed to fetch cards', error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpdate = async () => {
    await fetchCards();
    handleClose();
  };

  if (!board) {
    return <div>Loading...</div>;
  }

  const columns = {
    todo: [],
    doing: [],
    done: [],
  };

  cards.forEach((card) => {
    if (card.status === 'todo') {
      console.log(card.feature_id)
      console.log(card.bug_id)
      columns.todo.push(<CardComponent key={card.id_card} id={card.id_card} />);
    } else if (card.status === 'doing') {
      columns.doing.push(<CardComponent key={card.id_card} id={card.id_card} />);
    } else if (card.status === 'done') {
      columns.done.push(<CardComponent key={card.id_card} id={card.id_card} />);
    }
  });

  return (
    <div>
      <HeaderBar />
      <Container>
        <h1>Detalhes do Board {board.nome}</h1>
        <Button variant="contained" onClick={handleOpen}>
          Add Card
        </Button>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={4}>
            <Typography variant="h6" mb={3}>To Do</Typography>
            {columns.todo}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" mb={3}>Doing</Typography>
            {columns.doing}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" mb={3}>Done</Typography>
            {columns.done}
          </Grid>
        </Grid>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <RegisterCard handleClose={handleClose} handleUpdate={handleUpdate} boardId={id} />
        </Box>
      </Modal>
    </div>
  );
}

export default BoardPage;
