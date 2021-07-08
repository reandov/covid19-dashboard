// React - Next Importations
import React from "react";

// Library Components

// External Components
import { LineChart } from "../Charts/LineChart/LineChart";

// Types
import { IDefaultChartData } from "../../utils/types/types";

// Styles
import { Container, ChartContainer, Chart } from "./styles";

export function DefaultCharts({
  accumulated_cases,
  accumulated_deaths,
  new_cases,
  new_deaths,
  date,
}: IDefaultChartData) {
  return (
    <Container>
      <ChartContainer>
        <Chart>
          <LineChart
            chartTitle="Casos Acumulados"
            chartColors={["#116ddd"]}
            xaxisTitle="Quantidade de Casos"
            yaxisTitle="Data"
            seriesData={accumulated_cases}
            seriesCategories={date}
          />
        </Chart>
        <Chart>
          <LineChart
            chartTitle="Óbitos Acumulados"
            chartColors={["#6b7077"]}
            xaxisTitle="Quantidade de Óbitos"
            yaxisTitle="Data"
            seriesData={accumulated_deaths}
            seriesCategories={date}
          />
        </Chart>
      </ChartContainer>

      <ChartContainer>
        <Chart>
          <LineChart
            chartTitle="Novos Casos | 24h"
            chartColors={["#116ddd"]}
            xaxisTitle="Quantidade Casos"
            yaxisTitle="Data"
            seriesData={new_cases}
            seriesCategories={date}
          />
        </Chart>
        <Chart>
          <LineChart
            chartTitle="Novos Óbitos | 24h"
            chartColors={["#6b7077"]}
            xaxisTitle="Quantidade Óbitos"
            yaxisTitle="Data"
            seriesData={new_deaths}
            seriesCategories={date}
          />
        </Chart>
      </ChartContainer>
    </Container>
  );
}
