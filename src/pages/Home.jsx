import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Container
        component="main"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          mb: 15,
          pt: 10,
          pb: 10,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, textAlign: 'center' }}>
          Save contacts in your Phone book!
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/register"
          aria-label="registration"
          size="large"
          sx={{
            padding: '15px 30px',
            borderRadius: 4,
            border: 1,
            borderColor: 'rgb(0, 115, 230)',
            fontSize: '30px',
            fontWeight: 500,
            '&:hover': {
              color: 'rgb(0, 115, 230)',
              border: 1,
              borderColor: 'rgb(0, 115, 230)',
              backgroundColor: 'rgb(250, 250, 250)',
            },
          }}
        >
          Get Started
        </Button>
      </Container>
      <Footer />
    </>
  );
}
