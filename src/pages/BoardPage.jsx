import React, { useEffect, useState } from 'react';
import axios from '../config/axiosConfig';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HeaderBar from '../components/HeaderBar';
import { Button, Modal, Box } from '@mui/material';
import RegisterCard from '../components/RegisterCard';
import CardComponent from '../components/CardComponent';


function BoardPage({ id }) {
  const [board, setBoard] = useState(null);
  const [cards, setCard] = useState(null);
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
      const response = await axios.get(`cards/quadro/${id}`);
      console.log(response.data)
      setCard(response.data);
    } catch (error) {
      console.error('Failed to fetch board details', error);
    }
  };

  if (!board) {
    return <div>Loading...</div>;
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    
  ];
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpdate = async () => {
    await fetchData();
    handleClose();
  };

  return (
    
    <div>
      <HeaderBar />
      

      <h1>Detalhes do Board {board.nome}</h1>
      <Button variant="contained"   onClick={handleOpen}>
            Add Card
          </Button>

      <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Lista
            </TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
           
               {cards.map((card) => (
                <TableRow
              >
                  <TableCell align="left"><CardComponent id={card.id_card}/> </TableCell>
                  </TableRow>
          ))}
          
            

            
        </TableBody>
      </Table>
    </TableContainer>

    <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <RegisterCard handleClose={handleClose} handleUpdate={handleUpdate} />
        </Box>
      </Modal>
    </div>
  );
}

export default BoardPage;
