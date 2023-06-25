import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
// import { ContactDeleteBtn } from './ContactDeleteBtn.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
      {name}: {number}
      {/* <ContactDeleteBtn type="button" onClick={handleDeleteBtn}>
        Delete
      </ContactDeleteBtn> */}
      <Button
        type="button"
        variant="outlined"
        aria-label="registration"
        sx={{
          margin: '3px 5px',
          justifyContent: 'flex-end',
          padding: '2px 5px',
          border: 'none',
          '&:hover': {
            color: '#b81515',
            backgroundColor: 'transparent',
            border: 'none',
          },
        }}
        onClick={handleDeleteBtn}
      >
        <DeleteForeverIcon />
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
