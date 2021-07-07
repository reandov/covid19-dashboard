import styled from "styled-components";

export const Container = styled.div``;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const Chart = styled.div`
  width: 49%;
  padding: 5px;
  margin: 5px;

  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 1150px) {
    width: 95%;
  }
`;
