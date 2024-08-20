import { Link } from 'react-router-dom';
import AppBar from '../../components/AppBar/AppBar';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <AppBar />
      <div className={s.wrapper}>
        <h1>Oops! Page Not Found</h1>
        <p>
          It looks like the page you're looking for doesn't exist or has been
          moved.
        </p>
        <p>Don't worry, we're here to help you get back on track!</p>
        <Link to="/">Return to Home</Link>
      </div>
    </>
  );
};

export default NotFound;
