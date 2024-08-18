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
      <Form>
        <label>
          <span>Name</span>
          <Field name="name" />
        </label>

        <label>
          <span>Email</span>
          <Field name="email" />
        </label>

        <label>
          <span>Password</span>
          <Field name="password" type="password" />
        </label>
        <button type="submit">Register</button>
        <p>
          Go to<Link to="/login">Login</Link>
        </p>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
