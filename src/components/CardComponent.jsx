import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from '../config/axiosConfig';

const ItemCard = ({ id }) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`/cards/${id}`); // Altere a URL conforme a sua API
        setCard(response.data);
      } catch (error) {
        console.error('Failed to fetch card details', error);
      }
    };

    fetchCard();
  }, [id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  // Define a cor de fundo com base na presença de feature.id ou bug.id
  const backgroundColor = card.feature_id ? '#fff2cc' : card.bug_id ? '#ffcccc' : '#fff';

  return (
    <Card variant="outlined" sx={{ backgroundColor }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {card.nome}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
