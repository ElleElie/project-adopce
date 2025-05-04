// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Stack,
  IconButton,
  Badge,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 4 }}>
      {/* Zpětná navigace + ikonka košíku se stavem */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      <Typography variant="h4" gutterBottom>
        Tvůj košík
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Košík je prázdný.</Typography>
      ) : (
        <Stack spacing={2}>
          {cartItems.map((animal) => (
            <Card key={animal.index + 101} sx={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                sx={{ width: 120 }}
                image={animal.image}
                alt={animal.name}
              />
              <CardContent>
                <Typography variant="h6">{animal.name}</Typography>
                <Typography variant="body2">{animal.description}</Typography>
              </CardContent>
            </Card>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/checkout')}
          >
            Pokračovat k platbě
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
