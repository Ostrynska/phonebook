import { Link, Nav, NavMob } from './Navigation.styled';
import { useAuth } from '../../hooks/index';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return <Nav>{isLoggedIn && <Link to="/contacts">Phonebook</Link>}</Nav>;
};

export const NavigationMob = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavMob>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </NavMob>
  );
};
