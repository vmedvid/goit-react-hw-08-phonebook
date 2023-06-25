import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/register">
        <Button
          sx={{
            color: 'white',
            borderRadius: 0,
            borderRight: 'solid 2px rgb(255, 255, 255)',
            '&:hover': {
              borderRadius: 0,
              borderRight: 'solid 2px rgb(255, 255, 255)',
              color: 'rgb(0, 0, 0)',
            },
          }}
          variant="outlined"
        >
          Sign up
        </Button>
      </NavLink>

      <NavLink to="/login">
        <Button
          sx={{
            color: 'white',
            '&:hover': {
              color: 'rgb(0, 0, 0)',
            },
          }}
          variant="outlined"
        >
          Log in
        </Button>
      </NavLink>
    </>
  );
}
