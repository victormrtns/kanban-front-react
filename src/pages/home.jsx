import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import HeaderBar from '../components/HeaderBar';

function HomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <HeaderBar />
      <Box p={2}>
        <Container>
          <Box textAlign="center">
          <Button variant="contained" component={RouterLink} to="/login">
            Não tem conta? Login ou Registre-se
          </Button>
          </Box>

         
          <br />
          <br />
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  O que é Kanban?
                </Typography>
                <Typography variant="body1" paragraph>
                  Kanban é um método de gerenciamento de fluxo de trabalho
                  projetado para ajudar a visualizar o trabalho, maximizar a
                  eficiência e melhorar continuamente qualquer processo
                  empresarial. Ele utiliza cartões, colunas e limites de
                  trabalho em andamento para ajudar as equipes a se
                  comprometerem com a quantidade certa de trabalho, de modo que
                  as pessoas não estejam sobrecarregadas.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Quem somos nós?
                </Typography>
                <Typography variant="body1" paragraph>
                  Somos uma equipe dedicada a fornecer ferramentas eficientes
                  para gerenciamento de projetos. Nosso objetivo é facilitar a
                  organização e a colaboração dentro das equipes, utilizando o
                  método Kanban para otimizar fluxos de trabalho e aumentar a
                  produtividade.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
