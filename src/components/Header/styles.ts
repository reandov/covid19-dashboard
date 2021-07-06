import styled from "styled-components";

export const Container = styled.div`
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.1);

  background: ${(props) => props.theme.colors.primary};
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;

  font-size: 2.1rem;
  font-weight: 500;

  @media only screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;
