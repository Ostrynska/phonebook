import { useAuth } from '../../hooks/index';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppBarStyled, Link, AppToolbar } from './AppBar.styled';

export const AppBarNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarStyled>
      <Container maxWidth="xl">
        <AppToolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              sx={{
                mr: 6,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              MyContacts
            </Typography>
          </Link>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppToolbar>
      </Container>
    </AppBarStyled>
  );
};
