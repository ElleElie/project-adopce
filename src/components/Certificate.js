import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

const Certificate = ({ adoptions }) => {
  console.log(adoptions);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Tvůj certifikát adopce
      </Typography>
      {adoptions.map((entry, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: '20px auto' }}>
          <CardMedia
            component="img"
            height="200"
            image={entry.animal.image}
            alt={entry.animal.name}
          />
          <CardContent>
            <Typography variant="h5">Certifikát adopce</Typography>
            <Typography variant="body1">
              Zvíře: <strong>{entry.animal.name}</strong>
            </Typography>
            <Typography variant="body1">
              Jméno: <strong>{entry.animalName}</strong>
            </Typography>
            <Typography variant="body1">
              Adoptoval/a: <strong>{entry.adopterName}</strong>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};



export default Certificate;
