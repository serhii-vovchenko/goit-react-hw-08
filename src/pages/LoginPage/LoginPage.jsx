import s from './LoginPage.module.css';

import LoginForm from '../../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <Toaster position="top-right" reverseOrder={true} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
