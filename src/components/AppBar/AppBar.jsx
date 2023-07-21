import React, { useState } from 'react';
import { useAuth } from '../../hooks/index';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  AppBarStyled,
  Link,
  AppToolbar,
  MenuIcon,
  DrawerStyled,
} from './AppBar.styled';

export const AppBarNavigation = () => {
  const { isLoggedIn } = useAuth();
  const [open, setOpen] = useState(false);

  const toggleDrawer = isOpen => () => {
    setOpen(isOpen);
  };

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
                fontSize: { xs: 18, md: 20 },
              }}
            >
              MyContacts
            </Typography>
          </Link>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          <MenuIcon
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </MenuIcon>
          <DrawerStyled
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </DrawerStyled>
        </AppToolbar>
      </Container>
    </AppBarStyled>
  );
};
