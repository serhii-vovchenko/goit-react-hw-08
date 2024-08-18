import s from './LoginForm.module.css';

import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Link, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (data, actions) => {
    dispatch(loginThunk(data));
    actions.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          <span>Email</span>
          <Field name="email" />
        </label>

        <label>
          <span>Password</span>
          <Field name="password" type="password" />
        </label>
        <button type="submit">Login</button>
        <p>
          Go to<Link to="/register">Register</Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
