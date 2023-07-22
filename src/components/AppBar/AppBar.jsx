import React, { useState } from 'react';
import { useAuth } from '../../hooks/index';

import { Navigation, NavigationMob } from '../Navigation/Navigation';
import { UserMenu, UserMenuMob } from '../UserMenu/UserMenu';
import { AuthNav, AuthNavMob } from '../AuthNav/AuthNav';

import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import {
  AppBarStyled,
  Link,
  AppToolbar,
  MenuIconBtn,
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
          <MenuIconBtn
            edge="start"
            color="#000000"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              marginLeft: 'auto',
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            <MenuIcon />
          </MenuIconBtn>
          <DrawerStyled
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              width: 240,
            }}
          >
            <NavigationMob />
            {isLoggedIn ? <UserMenuMob /> : <AuthNavMob />}
          </DrawerStyled>
        </AppToolbar>
      </Container>
    </AppBarStyled>
  );
};
