import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

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
          gap: 3,
          mb: 5,
          pt: 4,
          pb: 4,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, textAlign: 'center' }}>
          Save contacts in your Phone book!
        </Typography>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ContactPhoneIcon
            type="icon"
            sx={{
              fill: 'rgb(255, 243, 70)',
              width: '200px',
              height: '200px',
            }}
          />
        </Container>

        <Button
          variant="contained"
          component={Link}
          to="/register"
          aria-label="registration"
          size="large"
          sx={{
            mt: 5,
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
