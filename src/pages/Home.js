import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Adoptuj a zachraň
      </Typography>

      <Typography variant="body1" align="center" paragraph>
        Vítej na stránce projektu <strong>Adoptuj a zachraň</strong>, kde můžeš symbolicky adoptovat
        kriticky ohrožené zvíře a přispět k jeho ochraně.
      </Typography>

      <Typography variant="body1" align="center" paragraph>
        Adopce je pouze „na oko“ – zvíře si nevezmeš domů, ale tvůj příspěvek <strong>200 Kč</strong>
        pomůže jeho záchraně v přírodě nebo v záchranné stanici.
      </Typography>

      <Typography variant="body1" align="center" paragraph>
        💚 Za každý dar dostaneš <strong>certifikát s fotkou, příběhem zvířete</strong> a můžeš mu dokonce
        <strong> dát jméno</strong>.
      </Typography>

      <Box mt={5} mb={4}>
        <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h5" gutterBottom>
            Jak to funguje?
          </Typography>
          <ol>
            <li>Vyber si zvíře, které chceš podpořit.</li>
            <li>Zaplať symbolickou adopci – 200 Kč.</li>
            <li>Obdržíš certifikát s fotkou a příběhem zvířete.</li>
            <li>Můžeš zvíře pojmenovat a sledovat jeho osud.</li>
          </ol>
        </Paper>
      </Box>

      <Box display="flex" justifyContent="center">
        <Button variant="contained" size="large" onClick={() => navigate('/zvirata')}>
          Vyber zvíře
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
