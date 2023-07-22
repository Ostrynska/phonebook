import { ButtonLink, Link, Wrapper, WrapperMob } from './AuthNav.styled';
import { theme } from '../App';

const buttons = (
  <>
    <ButtonLink
      as={Link}
      to="/register"
      color="secondary"
      size="small"
      variant="outlined"
      component={Link}
    >
      Register
    </ButtonLink>
    <ButtonLink
      as={Link}
      to="/login"
      color="secondary"
      size="small"
      variant="outlined"
      component={Link}
    >
      Log In
    </ButtonLink>
  </>
);

export const AuthNav = () => {
  return <Wrapper theme={theme}>{buttons}</Wrapper>;
};

export const AuthNavMob = () => {
  return <WrapperMob theme={theme}>{buttons}</WrapperMob>;
};
