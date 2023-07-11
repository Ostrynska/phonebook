import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  padding: 12px 0;
  margin: auto;
  width: 540px;
  gap: 10px;
`;
export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: baseline;
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
