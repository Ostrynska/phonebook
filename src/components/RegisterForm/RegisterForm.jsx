import { useState } from 'react';
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

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import home from '../../images/auth.svg';

import {
  RegisterContainer,
  AccountText,
  LinkStyled,
  Password,
} from './RegisterForm.styled';

export function RegisterForm() {
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
    <Container component="main" maxWidth="lg" theme={theme}>
      <Box
        sx={{
          marginTop: 26,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '45px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <RegisterContainer>
            <h2>Welcome !</h2>
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
                    placeholder="Enter your User name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <p>Email</p>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    placeholder="Enter your Email"
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
                    type={passwordShown ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                  />
                  <Password onClick={togglePassword}>
                    {passwordShown ? (
                      <AiFillEyeInvisible size={25} />
                    ) : (
                      <AiFillEye size={25} />
                    )}
                  </Password>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<ExitToAppOutlinedIcon />}
                sx={{ mt: 5, mb: 3, width: '100%', height: '57px' }}
              >
                Register
              </Button>
              <AccountText>
                Already have an Account ?
                <LinkStyled to="/login"> Login here</LinkStyled>
              </AccountText>
            </Box>
          </RegisterContainer>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={home} alt="Home" width={598} />
        </Box>
      </Box>
    </Container>
  );
}
