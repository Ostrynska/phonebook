import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { Toolbar } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: none !important;
  background-color: #fff !important;
`;

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #000;
`;

export const AppToolbar = styled(Toolbar)`
  box-shadow: none;
`;

export const MenuIconBtn = styled(IconButton)`
  color: #000000;
  font-size: 24px;
`;

export const DrawerStyled = styled(Drawer)`
  position: relative;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Modal = styled.div`
  padding: 40px;
  width: 70vw;
  height: 100vh;
`;
