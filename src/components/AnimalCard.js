// AnimalCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

function AnimalCard({ animal = {} }) {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        width: 320,       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',    
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={animal.image || ''}
        alt={animal.name || ''}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom>
          {animal.name || 'Neznámé zvíře'}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {animal.status || 'Bez popisku'}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            mt: 1,
          }}
        >
          {animal.notes || 'Bez popisku'}
        </Typography>
        <Button
          onClick={() => addToCart(animal)}
          variant="contained"
          sx={{ mt: 'auto' }}
        >
          Adoptovat – 200 Kč
        </Button>
      </CardContent>
    </Card>
  );
}

export default AnimalCard;


