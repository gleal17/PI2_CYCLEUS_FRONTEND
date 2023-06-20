import React from 'react';
import { Typography, Button } from '@mui/material';

const Home = () => {
  const handleLock = () => {
    fetch('http://172.20.10.14/H1:80')
      .then(response => {
        // Lógica de manipulação da resposta
        console.log('Travado com sucesso!');
      })
      .catch(error => {
        // Lógica de tratamento de erro
        console.error('Erro ao travar:', error);
      });
  };

  const handleUnlock = () => {
    fetch('http://172.20.10.14/H2:80')
      .then(response => {
        // Lógica de manipulação da resposta
        console.log('Destravado com sucesso!');
      })
      .catch(error => {
        // Lógica de tratamento de erro
        console.error('Erro ao destravar:', error);
      });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Bem-vindo ao Bicicletário Eletrônico!</Typography>
      <Typography variant="body1" gutterBottom>Este é um aplicativo para gerenciamento de bicicletário com travas por QR code.</Typography>
      <Button variant="contained" color="primary" onClick={handleLock}>Travar</Button>
      <Button variant="contained" color="secondary" onClick={handleUnlock}>Destravar</Button>
    </div>
  );
};

export default Home;
