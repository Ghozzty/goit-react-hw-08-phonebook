import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/authSlice';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.name}>{user.name}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.button}
      >
        Logout
      </button>
    </div>
  );
};
