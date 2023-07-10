import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  palette: {
    primary: {
      light: '#7d7d7d',
      main: '#000 ',
      dark: '#6527BE',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9EADBB',
      main: '#FFF7E8',
      dark: '#6527BE',
      contrastText: '#6527BE',
    },
    spacing: [0, 4, 8, 16, 32, 64],
  },
});

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
            }
          />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
