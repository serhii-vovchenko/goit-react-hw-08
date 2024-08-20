import s from './RegistrationPage.module.css';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Toaster } from 'react-hot-toast';

const RegistrationPage = () => {
  return (
    <div className={s.wrapper}>
      <Toaster position="top-right" reverseOrder={true} />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
