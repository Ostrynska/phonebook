import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { theme } from '../../src/components/App';

import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';

import home from '../images/home.gif';

const StyledContainer = styled(Container)`
  max-width: 100%;

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

export default function Home() {
  const theme = useTheme();
  return (
    <StyledContainer component="main" theme={theme}>
      <Box
        sx={{
          marginTop: '28vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
          justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
          gap: { xs: 0, lg: 20 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
            width: { xs: '100%', lg: 600 },
          }}
        >
          <Typography
            variant="h1"
            color="primary.main"
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '4rem',
                md: '4.5rem',
                lg: '5.5rem',
                xl: '6rem',
              },
              paddingBottom: {
                xs: '3rem',
                sm: '3.5rem',
                md: '4rem',
                lg: '4.5rem',
                xl: '5rem',
              },
            }}
          >
            PhoneBOOK
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            color="primary.dark"
            fontWeight={700}
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '2.5rem',
              },
              paddingBottom: {
                xs: '3rem',
                sm: '3.5rem',
                md: '4rem',
                lg: '4.5rem',
                xl: '5rem',
              },
              maxWidth: {
                xs: '200px',
                sm: '280px',
                md: '100%',
              },
            }}
          >
            Simple - Intuitive - Efficeint
          </Typography>
          <Typography
            component="p"
            variant=" h3"
            color="primary.light"
            fontWeight={300}
            sx={{
              maxWidth: {
                xs: '340px',
                sm: '580px',
                md: '100%',
              },
              textAlign: {
                md: 'center',
              },
            }}
          >
            "Your phonebook should be easy to use and actually help you achieve
            maximum productivity without compromising on the look and feel"
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={home} alt="Animated GIF" width={450} />
        </Box>
      </Box>
    </StyledContainer>
  );
}
