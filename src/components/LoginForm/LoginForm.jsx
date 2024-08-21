import s from './LoginForm.module.css';

import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (data, actions) => {
    dispatch(loginThunk(data));
    actions.resetForm();
  };

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
