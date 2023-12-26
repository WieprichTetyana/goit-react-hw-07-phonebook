import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { Container, StyledText, StyledTitle, StyledHeading } from './Styled';
import { selectContacts } from '../redux/selectors';

export const App = () => {
  const { contacts } = useSelector(selectContacts);

  return (
    <Container>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />
      <StyledHeading>Contacts</StyledHeading>
      {contacts.length ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <StyledText>
          You don't have any contacts in your phonebook yet.
        </StyledText>
      )}
    </Container>
  );
};
