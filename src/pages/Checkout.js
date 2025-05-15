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
  const { cartItems} = useCart();
  const [adoptions, setAdoptions] = useState(
    cartItems.map((item) => ({ adopterName: '', animalName: '', animal: item }))
  );
  const [showCertificate, setShowCertificate] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    const incomplete = adoptions.some(
      (entry) => entry.adopterName.trim() === '' || entry.animalName.trim() === ''
    );
    if (incomplete) {
      alert('Zadej prosím jméno pro certifikát a pojmenuj zvíře.');
      return;
    }

    setShowCertificate(true);
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
          {cartItems.map((item, index) => (
          <Box key={item.id} sx={{ mb: 3, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <img src={item.image} alt={item.name} style={{ width: 60, height: 60, borderRadius: '50%' }} />
            <Typography variant="h6">{item.name} ({item.type})</Typography>
          </Box>

          <TextField
            label="Tvoje jméno"
            value={adoptions[index].adopterName}
            onChange={(e) => {
                const newAdoptions = [...adoptions];
                newAdoptions[index] = {
                  ...newAdoptions[index],
                  adopterName: e.target.value,
              };
                setAdoptions(newAdoptions);
            }}
            fullWidth
            sx={{ my: 1 }}
            />
          <TextField
            label="Jméno zvířete"
            value={adoptions[index].animalName}
            onChange={(e) => {
                const newAdoptions = [...adoptions];
                newAdoptions[index] = {
                  ...newAdoptions[index],
                  animalName: e.target.value,
                };
                setAdoptions(newAdoptions);
            }}
            fullWidth
          />
      </Box>
    ))}

          <Button variant="contained" color="primary" onClick={handlePayment}>
            Zaplatit a získat certifikát
          </Button>
        </>
      ) : (
        <>
            <Certificate adoptions={adoptions}/>
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
