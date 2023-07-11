import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import { ContactsForm } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name,
      number,
    };

    if (
      contacts
        ?.map(({ name }) => name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(contact));
    }
    form.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '3.5fr 3.5fr 0.8fr' },
          gap: 2,
        }}
      >
        <TextField
          label="Name"
          id="outlined-required"
          type="text"
          name="name"
          size="small"
          required
        />
        <TextField
          label="Number"
          id="outlined-required"
          type="tel"
          name="number"
          size="small"
          required
        />
        <Button variant="contained" type="submit" size="small">
          Add
        </Button>
      </Box>
    </ContactsForm>
  );
};

export default ContactForm;
