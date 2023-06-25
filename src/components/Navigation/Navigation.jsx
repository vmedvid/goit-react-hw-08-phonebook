import { NavLink } from 'react-router-dom';
import useAuthorisation from 'hooks/useAuthorisation';
import { Button, Toolbar } from '@mui/material';

export default function Navigation() {
  const { isLoggedIn } = useAuthorisation();

  return (
    <Toolbar>
      <NavLink to="/">
        <Button
          sx={{
            color: 'white',
            fontSize: '20px',
            '&:hover': {
              color: 'rgb(0, 0, 0)',
            },
          }}
          variant="outlined"
        >
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button
            sx={{
              color: 'white',
              fontSize: '20px',
              '&:hover': {
                color: 'rgb(0, 0, 0)',
              },
            }}
            variant="outlined"
          >
            Contacts
          </Button>
        </NavLink>
      )}
    </Toolbar>
  );
}
