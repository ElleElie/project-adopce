import React from 'react';
import { Container, Grid, Typography, IconButton, Box, Badge } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import animals from '../data/data';
import AnimalCard from '../components/AnimalCard';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function AnimalList() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4">Vyber si zvíře k adopci</Typography>
        <IconButton onClick={() => navigate('/kosik')}>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        {animals.map((animal) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={animal.id} 
            sx={{ 
              display: 'flex',       
              justifyContent: 'center', 
            }}
          >
            <AnimalCard animal={animal} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AnimalList;
