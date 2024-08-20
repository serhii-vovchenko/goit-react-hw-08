import s from './UserMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <p className={s.text}>Welcome, {name}!</p>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
