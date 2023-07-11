import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import {
  ContactsForm,
  // ContactsLabel,
  // ContactsInput,
  // ContactsButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const number = form.elements[1].value;

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
          required
        />
        <TextField
          label="Number"
          id="outlined-required"
          type="tel"
          name="number"
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
