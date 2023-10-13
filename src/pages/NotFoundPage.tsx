import React from 'react';
import { Typography, Container } from '@mui/material';

export const NotFoundPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{marginBlock: '80px'}}>
      <Typography variant="h2" color='primary' sx={{fontSize: '120px'}}>
        404
      </Typography>
      <Typography variant="h1" sx={{textAlign: 'center'}}>
        Oops!<br/>That page you&apos;re looking can&apos;t be found.
      </Typography>
    </Container>
  );
};