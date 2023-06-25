import { AppBar, Container, Toolbar } from '@mui/material';
import useAuthorisation from 'hooks/useAuthorisation';

import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';

export default function ApplicationBar() {
  const { isLoggedIn } = useAuthorisation();

  return (
    <AppBar>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        <Toolbar>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Toolbar>
      </Container>
    </AppBar>
  );
}
