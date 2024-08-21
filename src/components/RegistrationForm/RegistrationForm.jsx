import s from './RegistrationForm.module.css';

import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (data, actions) => {
    dispatch(registerThunk(data));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.wrapper}>
        <h1 className={s.title}>Create Your Account</h1>
        <label className={s.label}>
          <span>Name</span>
          <Field name="name" className={s.input} />
        </label>

        <label className={s.label}>
          <span>Email</span>
          <Field name="email" className={s.input} />
        </label>

        <label className={s.label}>
          <span>Password</span>
          <Field name="password" type="password" className={s.input} />
        </label>
        <button type="submit">Sign Up</button>
        <p className={s.text}>
          Already have an account?<Link to="/login">Log in</Link>
        </p>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
