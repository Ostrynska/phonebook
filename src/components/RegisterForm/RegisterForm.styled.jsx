import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 21px 41px;
  width: 505px;
  height: 701px;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h2 {
    font-weight: 200;
    font-size: 25px;
    margin-bottom: 20px;
  }
  h1 {
    font-weight: 500;
    font-size: 31px;
    margin-bottom: 5px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 11px;
    span {
      font-weight: 500;
    }
  }
`;

export const AccountText = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  color: #7d7d7d;
`;

export const LinkStyled = styled(Link)`
  color: #000000;
  font-weight: 500;
  &:hover {
    color: #6527be;
  }
`;

export const FormControl = styled.div`
  margin-top: 15px;
`;
