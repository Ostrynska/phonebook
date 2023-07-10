import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { theme } from '../App';

import { RegisterContainer } from './RegisterForm.styled';

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="main" maxWidth="xs" theme={theme}>
      <Box
        sx={{
          marginTop: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <RegisterContainer>
          <p>Welcome !</p>
          <Typography component="h1" variant="h5">
            Sign up to
          </Typography>
          <p>MyContact is simply</p>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p>User name</p>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  placeholder="Enter your email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <p>Email</p>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="Enter your user name"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <p>Password</p>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="Enter your Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<ExitToAppOutlinedIcon />}
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <p>
              Already have an Account ? <span>Register</span>
            </p>
          </Box>
        </RegisterContainer>
      </Box>
    </Container>
  );
}
