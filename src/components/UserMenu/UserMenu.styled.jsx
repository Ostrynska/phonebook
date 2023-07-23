import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    margin-left: auto;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperMob = styled.div`
  margin-top: auto;
  margin-right: 0;
  width: 200px;
  height: auto;
`;

export const Username = styled.p`
  color: #000;
`;

export const Name = styled.span`
  font-weight: 700;
  color: #6527be;
`;
