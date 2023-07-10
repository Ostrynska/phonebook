import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
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
