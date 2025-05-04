import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav style={{ padding: '1rem' }}>
      <Link to="/kosik">
        <IconButton>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </nav>
  );
}

export default Navbar;
