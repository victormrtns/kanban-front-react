import { Container, Grid } from "@mui/material";
import BoardComponent from "../components/BoardComponent";
import HeaderBar from "../components/HeaderBar";

function Boards() {
  return (
    <>
      <HeaderBar/>
      <Container maxWidth="false">
        <Grid container spacing={4}>
          <BoardComponent/>
          <BoardComponent/>
          <BoardComponent/>
          <BoardComponent/>
          <BoardComponent/>
          <BoardComponent/>
          <BoardComponent/>
          <BoardComponent/>
        </Grid>
      </Container>
    </>
  );
}
export default Boards;