import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  let validationContactSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Name must be more than 3 chars!')
      .max(50, 'Name must be less than 50 chars'),
    number: Yup.string()
      .required('This field is required!')
      .min(3, 'Name must be more than 3 chars!')
      .max(50, 'Name must be less than 50 chars'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(addContact(data));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        validationSchema={validationContactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.wrapper}>
          <label className={s.label}>
            <span className={s.span}>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>

          <label className={s.label}>
            <span className={s.span}>Number</span>
            <Field name="number" className={s.input} />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
