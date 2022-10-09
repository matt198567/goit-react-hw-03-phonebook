import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import Container from 'components/Container/Container';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <Container>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.info}>
              {name}: {number}
            </p>
            <BsFillTrashFill
              size={22}
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
