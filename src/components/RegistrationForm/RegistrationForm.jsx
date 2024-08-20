import s from './RegistrationForm.module.css';

import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { Link, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RegistrationForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
