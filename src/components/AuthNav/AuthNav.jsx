import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/register" className={s.link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={s.link}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
