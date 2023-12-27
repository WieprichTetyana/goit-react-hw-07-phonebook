import { ContactListItem } from '../ContactListItem/ContactListItem';
import { StyledList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <StyledList>
      {getFilteredContacts().map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </StyledList>
  );
};
