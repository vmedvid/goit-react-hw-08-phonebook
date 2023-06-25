import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from 'redux/auth/authOperations';
import useAuthorisation from 'hooks/useAuthorisation';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuthorisation();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <Box>
          <p>e-mail: {user.email}</p>
        </Box>
        <Button
          startIcon={<LogoutIcon />}
          variant="contained"
          type="button"
          sx={{
            backgroundColor: '#c85858',
            '&:hover': {
              color: 'rgb(192, 192, 192)',
              backgroundColor: '#b81515',
            },
          }}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </Button>
      </Box>
    </>
  );
}
