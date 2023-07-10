import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { theme } from '../../src/components/App';

import home from '../images/home.gif';

export default function Home() {
  return (
    <Container component="main" maxWidth="lg" theme={theme}>
      <Box
        sx={{
          marginTop: '28vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 600,
          }}
        >
          <Typography
            variant="h1"
            color="primary.main"
            padding={theme.spacing(4)}
          >
            PhoneBOOK
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            padding={theme.spacing(6)}
            color="primary.dark"
            fontWeight={700}
          >
            Simple - Intuitive - Efficeint
          </Typography>
          <Typography
            component="p"
            variant=" h3"
            textAlign="center"
            color="primary.light"
            fontWeight={300}
          >
            "Your phonebook should be easy to use and actually help you achieve
            maximum productivity without compromising on the look and feel"
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={home} alt="Animated GIF" width={450} />
        </Box>
      </Box>
    </Container>
  );
}
