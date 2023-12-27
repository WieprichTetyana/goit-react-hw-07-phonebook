import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { Container, StyledText, StyledTitle, StyledHeading } from './Styled';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../redux/operations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

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
      {isLoading && <StyledText>Loading...</StyledText>}
      {error && <StyledText>{error}</StyledText>}
    </Container>
  );
};
