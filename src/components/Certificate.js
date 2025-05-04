import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

const Certificate = ({ adopterName, animalName, cartItems }) => {
  console.log(adopterName, animalName, cartItems);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Tvůj certifikát adopce
      </Typography>
      {cartItems.map((animal) => (
        <Card key={animal.index} sx={{ maxWidth: 345, margin: 'auto' }}>
          <CardMedia
            component="img"
            height="200"
            image={animal.image}
            alt={animal.name}
          />
          <CardContent>
            <Typography variant="h5">Certifikát adopce</Typography>
            <Typography variant="body1">
              Zvíře: <strong>{animalName}</strong>
            </Typography>
            <Typography variant="body1">
              Adoptováno: <strong>{adopterName}</strong>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};



export default Certificate;
