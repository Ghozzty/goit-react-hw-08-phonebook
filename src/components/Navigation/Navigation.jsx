import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import css from './Navigations.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <ul className={css.linkList}>
        <li className={css.listItem}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li className={css.listItem}>
          {isLoggedIn && (
            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
