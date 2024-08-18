import s from './UserMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const { name, email } = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
