import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Container
      sx={{
        // position: 'absolute',
        // bottom: '0',
        // margin: '0',
        padding: '0',
        width: '100%',
        borderTop: 1,
        borderColor: 'rgb(25, 118, 210)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: 'rgb(25, 118, 210)',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        © Created by GoIT student MV, 2023
      </Typography>
    </Container>
  );
}
