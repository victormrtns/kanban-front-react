import React, { useState, useEffect } from 'react';
import { Card, CardContent, Divider, Typography } from '@mui/material';
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
  
  const backgroundColor = (card.feature_id === null) ? '#fff2cc' : (card.bug_id===null) ? '#ffcccc' : '#fff';
  const typeCard = (card.feature_id === null) ? 'Feature' : (card.bug_id===null) ? 'Bug' : '';
  return (
    <Card variant="outlined" sx={{ backgroundColor,mb:3}}>
      <CardContent>
        <Typography variant="h4" component="h4">
          {card.nome}
        </Typography>
        <Divider/>
        <Typography variant="overline" display="block" gutterBottom>
          {typeCard}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
