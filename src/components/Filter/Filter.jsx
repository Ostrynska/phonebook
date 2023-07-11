import { useDispatch } from 'react-redux/es/exports';
import { contactsFilter } from '../../redux/contacts/filterSlice';

import { FilterWrap } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(contactsFilter(e.target.value));
  };

  return (
    <>
      <FilterWrap
        label="Find contacts by name"
        variant="standard"
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
