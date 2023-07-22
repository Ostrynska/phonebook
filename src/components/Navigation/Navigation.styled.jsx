import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    font-weight: 700;
    color: #6527be;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
