import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { TextField, Button, Typography, Box } from '@mui/material';
import { toast } from 'react-hot-toast';
import Footer from 'components/Footer/Footer';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error(`Please enter data in all fields of the form!`);
    } else {
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{ mt: 1, mb: 2, fontWeight: 700, textAlign: 'center' }}
      >
        Create an account
      </Typography>

      <Box
        component="form"
        sx={{
          ml: 'auto',
          mr: 'auto',
          mb: '100px',
          maxWidth: 720,
          '& .MuiTextField-root': { mb: 5, width: '100%' },
          py: 5,
          px: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          type="text"
          placeholder="Enter your name"
          focused
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          placeholder="Enter your email"
          focused
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          focused
          placeholder="Enter your password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            '&:hover': {
              color: 'rgb(0, 0, 0)',
              backgroundColor: 'rgb(0, 115, 230)',
            },
          }}
        >
          Sign up
        </Button>
      </Box>
      <Footer />
    </>
  );
}
