import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Container from 'components/Container/Container';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import s from './Form.module.css';

export const ContactForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(13).required(),
  });

  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const contact = { id: nanoid(), ...values };
    resetForm();

    onSubmit(contact);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field className={s.input} type="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={s.label}>
            Phone
            <Field className={s.input} type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </Container>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
