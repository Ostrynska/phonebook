import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';

const StyledContainer = styled(({ component, ...rest }) => (
  <Container {...rest} as={component} />
))`
  max-width: ${({ theme }) => theme.breakpoints.values.sm}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    max-width: 600px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    max-width: 960px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    max-width: 1200px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
    max-width: 1440px;
  }
`;

export default StyledContainer;
