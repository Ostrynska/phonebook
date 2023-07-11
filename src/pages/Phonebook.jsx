import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { theme } from '../../src/components/App';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="lg" theme={theme}>
      <div
        style={{
          borderBottom: '1px solid rgb(0, 0, 0, 0.25)',
          paddingBottom: '40px',
        }}
      >
        <Box
          sx={{
            marginTop: '18vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            Add Contact
          </Typography>
          <ContactForm />
        </Box>
      </div>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="primary"
          fontWeight={700}
        >
          Contacts
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '30px',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
        >
          <Filter />
          {isLoading}
          <ContactList />
        </Box>
      </Box>
    </Container>
  );
}
