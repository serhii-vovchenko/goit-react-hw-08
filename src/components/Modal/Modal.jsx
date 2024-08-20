import s from './Modal.module.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { closeModal } from '../../redux/modal/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditContact } from '../../redux/modal/selectors';
import { editContact } from '../../redux/contacts/operations';

const Modal = () => {
  const { id, name, number } = useSelector(selectEditContact);
  const dispatch = useDispatch();

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
    name: name || '',
    number: number || '',
  };

  const handleSubmit = (data, actions) => {
    dispatch(editContact({ id, data }));
    actions.resetForm();
    dispatch(closeModal());
  };

  return (
    <div className={s.modal}>
      <Formik
        validationSchema={validationContactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.wrapper}>
          <h1 className={s.title}>Update Contact Information</h1>
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

          <button
            type="button"
            className={s.closeBtn}
            onClick={() => dispatch(closeModal())}
          >
            X
          </button>
          <button type="submit" className={s.btn}>
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Modal;
