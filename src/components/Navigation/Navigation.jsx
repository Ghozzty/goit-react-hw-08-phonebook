import { NavLink } from 'react-router-dom';
import css from './Navigations.module.css';
// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина существующего пользователя с формой
// /contacts - приватный маршрут для работы со списком контактов пользователя
export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <ul className={css.linkList}>
        <li className={css.listItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink to="/login" className={css.logRegSec}>
            Login
          </NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};
