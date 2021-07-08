import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  gap: 5px;
  padding: 0.8rem;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 15rem;

  border-radius: 8px;
  padding: 1.2rem;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    font-family: "Roboto";
  }

  h2 {
    font-family: "Roboto";
  }
`;
