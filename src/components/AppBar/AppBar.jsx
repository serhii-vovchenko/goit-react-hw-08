import s from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  return (
    <>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </>
  );
};

export default AppBar;
