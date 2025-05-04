import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Badge,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Certificate from '../components/Certificate';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [adopterName, setAdopterName] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (adopterName.trim() === '' || animalName.trim() === '') {
      alert('Zadej prosím jméno pro certifikát a jméno zvířete.');
      return;
    }

    setShowCertificate(true);
    clearCart();
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={() => navigate(showCertificate ? '/' : '/kosik')}>
          <ArrowBackIcon />
        </IconButton>
        {!showCertificate && (
          <IconButton onClick={() => navigate('/kosik')}>
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        )}
      </Box>

      {!showCertificate ? (
        <>
          <Typography variant="h4" gutterBottom>
            Dokonči adopci
          </Typography>
          <Typography variant="body1" gutterBottom>
            Každé zvíře stojí 200 Kč. Zadej své jméno, které bude uvedeno na certifikátu.
          </Typography>
          <TextField
            label="Tvoje jméno"
            variant="outlined"
            value={adopterName}
            onChange={(e) => setAdopterName(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
          <TextField
            label="Jméno zvířete"
            variant="outlined"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
            fullWidth
            sx={{ my: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handlePayment}>
            Zaplatit a získat certifikát
          </Button>
        </>
      ) : (
        <>
            <Certificate adopterName={adopterName} animalName={animalName} cartItems={cartItems} />
            <Box textAlign="center" mt={4}>
                <Typography variant="h5" gutterBottom>
                Děkujeme za adopci!
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Zpět na úvodní stránku
                </Button>
            </Box>
        </>

      )}
    </Box>
  );
};

export default Checkout;
