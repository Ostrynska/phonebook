import { Link } from './Navigation.styled';
import { useAuth } from '../../hooks/index';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </nav>
  );
};
