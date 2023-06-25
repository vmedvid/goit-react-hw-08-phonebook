import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
// import { ContactDeleteBtn } from './ContactDeleteBtn.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const contact = {
    name,
    id,
  };
  const handleDeleteBtn = () => {
    dispatch(deleteContact(contact));
  };

  return (
    <ListItem>
      {name}: <br /> {number}
      {/* <ContactDeleteBtn type="button" onClick={handleDeleteBtn}>
        Delete
      </ContactDeleteBtn> */}
      <Button
        type="button"
        variant="outlined"
        aria-label="registration"
        sx={{
          margin: '3px 5px',
          padding: '2px 5px',
          '&:hover': {
            color: 'rgb(250, 250, 250)',
            backgroundColor: '#b81515',
            border: '1px solid #b81515',
          },
        }}
        onClick={handleDeleteBtn}
      >
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
