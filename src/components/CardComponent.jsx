import React, { useState, useEffect } from 'react';
import { Card, CardContent, Divider, Typography, Button } from '@mui/material';
import axios from '../config/axiosConfig';

const ItemCard = ({ id, reloadCards }) => { // Adicionamos reloadCards como propriedade

  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`/cards/${id}`);
        setCard(response.data);
      } catch (error) {
        console.error('Failed to fetch card details', error);
      }
    };

    fetchCard();
  }, [id]);

  const backgroundColor = card?.feature_id === null ? '#fff2cc' : card?.bug_id === null ? '#ffcccc' : '#fff';
  const typeCard = card?.feature_id === null ? 'Feature' : card?.bug_id === null ? 'Bug' : '';

  const handleEdit = async () => {
    try {
      const response = await axios.put(`/cards/${id}`, {
        nome: card.nome,
        descricao: card.descricao,
        status: card.status,
        type: typeCard.toUpperCase(), // Envia o tipo em maiúsculas para o backend
        quadroId: card.quadro.id  // Envia o ID do quadro atual do card
      });
      console.log('Card atualizado:', response.data);
      // Aqui você pode atualizar o estado ou mostrar uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao atualizar o card:', error);
      // Trate erros aqui, exibindo uma mensagem de erro ao usuário, por exemplo
    }
  };

  const handleRemove = async () => {
    try {
      await axios.delete(`/cards/${id}`);
      console.log('Card removido com sucesso');
      reloadCards(); // Chama a função de recarregamento dos cards após a remoção
    } catch (error) {
      console.error('Erro ao remover o card:', error);
      // Trate erros aqui, exibindo uma mensagem de erro ao usuário, por exemplo
    }
  };

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <Card variant="outlined" sx={{ backgroundColor, mb: 3 }}>
      <CardContent>
        <Typography variant="h4" component="h4">
          {card.nome}
        </Typography>
        <Divider />
        <Typography variant="overline" display="block" gutterBottom>
          {typeCard}
        </Typography>

        {/* Botões de Editar e Remover */}
        <Button variant="outlined" color="primary" onClick={handleEdit}>
          Editar
        </Button>
        <Button variant="outlined" color="error" onClick={handleRemove}>
          Remover
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
