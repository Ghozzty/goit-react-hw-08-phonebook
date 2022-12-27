import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
    </header>
  );
};
