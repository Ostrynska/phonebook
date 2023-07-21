import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;

  flex-direction: column;
  padding: 12px 0;
  width: 290px;
  gap: 10px;
  @media screen and (min-width: 600px) {
    width: 570px;
  }
  @media screen and (min-width: 900px) {
    margin-right: auto;
  }
  @media screen and (min-width: 960px) {
    width: 540px;
  }
`;
export const ContactsListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
  @media screen and (min-width: 960px) {
    align-items: center;
    justify-content: baseline;
  }
`;
export const ContactsListInf = styled.p`
  margin-left: 10px;
`;
export const ContactsListButton = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover,
  &:focus {
    color: #6527be;
  }
`;
