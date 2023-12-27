import { useDispatch } from 'react-redux';
import {
  StyledContactItem,
  StyledSpan,
  StyledBtn,
} from './ContactListItem.styled';
import { deleteContactsThunk } from '../../redux/operations';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <StyledContactItem>
      <p>
        <StyledSpan>{name}:</StyledSpan> {phone}
      </p>
      <StyledBtn onClick={() => dispatch(deleteContactsThunk(id))}>
        Delete
      </StyledBtn>
    </StyledContactItem>
  );
};
