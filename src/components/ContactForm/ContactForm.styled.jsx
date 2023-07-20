import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 290px;
  max-width: 950px;
  gap: 0;
  @media screen and (min-width: 600px) {
    width: 570px;
  }
  @media screen and (min-width: 900px) {
    margin-left: auto;
  }
  @media screen and (min-width: 960px) {
    gap: 40px;
    width: 540px;
  }
`;
