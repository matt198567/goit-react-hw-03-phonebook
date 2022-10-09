import Container from 'components/Container/Container';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
