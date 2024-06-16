import { Container, Grid } from "@mui/material";
import BoardComponent from "../components/BoardComponent";
import HeaderBar from "../components/HeaderBar";
import axios from '../config/axiosConfig';
import { useEffect, useState } from "react";

function Boards() {

  const [boards, setBoards] = useState([]);

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
          {
            boards.map((board,key) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                <BoardComponent name={board.nome}/>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  );
}
export default Boards;