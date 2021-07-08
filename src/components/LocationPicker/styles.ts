import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 0.8rem;
  font-family: "Roboto";
`;

export const Select = styled.select`
  border: 0;
  width: 35rem;
  padding: 1.2rem;

  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.1);

  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Option = styled.option`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  font-family: "Roboto";
`;
