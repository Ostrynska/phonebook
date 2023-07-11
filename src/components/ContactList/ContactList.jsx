import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';

import {
  ContactsList,
  ContactsListItem,
  ContactsListInf,
  ContactsListButton,
} from './ContactList.styled';
import { fetchContacts } from '../../redux/contacts/operations';
import { FiTrash2 } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { AiOutlineUser } from 'react-icons/ai';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleFilter() {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filterContacts = handleFilter();

  return (
    <ContactsList>
      {filterContacts?.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          <IconContext.Provider value={{ color: '#6527BE' }}>
            <AiOutlineUser />
          </IconContext.Provider>
          <ContactsListInf>
            <b>{name}: </b>
            {number}
          </ContactsListInf>
          <ContactsListButton
            type="submit"
            name={name}
            onClick={() => dispatch(deleteContact(id))}
          >
            <FiTrash2 />
          </ContactsListButton>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
