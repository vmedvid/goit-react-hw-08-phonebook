import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ApplicationBar from 'components/AppBar/AppBar';
import { Container } from '@mui/material';

export default function Layout() {
  return (
    <>
      <ApplicationBar />
      <Container sx={{ marginTop: '100px' }}>
        <Suspense fallback={<h1>Loading ... Please wait</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
