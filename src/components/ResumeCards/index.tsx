// React - Next Importations
import React from "react";

// Functions
import { convertToReadableNumber } from "../../utils/functions/functions";

// Types
import { ICardData } from "../../utils/types/types";

// Styles
import { Container, Card, CardContent } from "./styles";

export function ResumeCards({
  accumulated_cases,
  accumulated_deaths,
  new_cases,
  new_deaths,
  last_updated,
}: ICardData) {
  function formatDate(date: string): string {
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];

    return `${day}/${month}/${year}`;
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <p>CASOS ACUMULADOS</p>
          <h2>{convertToReadableNumber(accumulated_cases?.slice(-1)[0])}</h2>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <p>ÓBITOS ACUMULADOS</p>
          <h2>{convertToReadableNumber(accumulated_deaths?.slice(-1)[0])}</h2>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <p>DATA DE ATUALIZAÇÃO</p>
          <h2>{formatDate(last_updated)}</h2>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <p>NOVOS CASOS | 24H</p>
          <h2>{convertToReadableNumber(new_cases?.slice(-1)[0])}</h2>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <p>NOVOS ÓBITOS | 24H</p>
          <h2>{convertToReadableNumber(new_deaths?.slice(-1)[0])}</h2>
        </CardContent>
      </Card>
    </Container>
  );
}
