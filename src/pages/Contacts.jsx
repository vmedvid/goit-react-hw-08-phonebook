import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Box, Typography } from '@mui/material';
import Footer from 'components/Footer/Footer';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);

  // console.log('isLoading in Contacts', isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '10px auto 40px',
          padding: '20px 10px 40px',
          maxWidth: 380,
          '& .MuiTextField-root': { mb: 5, width: '100%' },
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: 1,
            mb: 1,
            fontSize: 30,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Create contact
        </Typography>

        <ContactForm />

        {isLoading && <p>Loading...</p>}
        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontSize: 30,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Contacts
        </Typography>
        <Filter />
        <ContactList />
      </Box>
      <Footer />
    </>
  );
}
