import React, { useEffect, useState } from 'react';
import { Container, Grid, Modal, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import BoardComponent from '../components/BoardComponent';
import HeaderBar from '../components/HeaderBar';
import RegisterBoard from '../components/RegisterBoard';
import axios from '../config/axiosConfig';
import { useEffect, useState } from "react";

function Boards() {

  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Hook do React Router para navegação

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const response = axios
    .get('/quadros/email')
    .then((response) => {
      setBoards(response.data);
    });
  }
  return (
    <>
      <HeaderBar/>
      <Container maxWidth="false">
        <Grid container spacing={4}>
          {boards.map((board) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={board.id}>
              {/* <Link to={`/boards/${board.id}`} style={{ textDecoration: 'none' }}> */}
                <BoardComponent id={board.id} name={board.nome} onUpdate={handleUpdate} />
              {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
export default Boards;