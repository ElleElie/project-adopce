import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext'; 

function AnimalCard({ animal = {} }) { // Pokud není animal k dispozici, použijeme prázdný objekt
    const { addToCart } = useCart(); // Získáme funkci pro přidání do košíku
  
    return (
      <Card>
        <CardMedia component="img" height="140" image={animal.image || ''} alt={animal.name || ''} />
        <CardContent>
          <Typography variant="h6">{animal.name || 'Neznámé zvíře'}</Typography>
          <Typography variant="body2">{animal.description || 'Bez popisu'}</Typography>
          <Button onClick={() => addToCart(animal)} variant="contained" sx={{ mt: 1 }}>
            Adoptovat – 200 Kč
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  

export default AnimalCard;

