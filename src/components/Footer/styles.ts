import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 1rem;
  padding: 1rem;
  background: #333;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1150px) {
    flex-direction: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Source = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  a {
    margin-left: 1rem;
  }

  @media (max-width: 1150px) {
    margin-top: 1rem;
  }
`;
