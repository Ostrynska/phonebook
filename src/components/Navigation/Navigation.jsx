import { Link, Nav } from './Navigation.styled';
import { useAuth } from '../../hooks/index';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return <nav>{isLoggedIn && <Link to="/contacts">Phonebook</Link>}</nav>;
};

export const NavigationMob = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </Nav>
  );
};
