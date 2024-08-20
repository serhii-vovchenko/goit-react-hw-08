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
      <Form className={s.wrapper}>
        <h1 className={s.title}>Sign In to Continue</h1>
        <label className={s.label}>
          <span>Email</span>
          <Field name="email" className={s.input} />
        </label>

        <label className={s.label}>
          <span>Password</span>
          <Field name="password" type="password" className={s.input} />
        </label>
        <button type="submit">Sign In</button>
        <p className={s.text}>
          No account yet?<Link to="/register">Join us</Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
