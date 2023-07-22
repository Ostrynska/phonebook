import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  &.active {
    font-weight: 700;
    color: #6527be;
  }
  &:hover {
    color: #6527be;
  }
`;

export const ButtonLink = styled(Button)`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    margin-left: auto;
  }
`;

export const WrapperMob = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
