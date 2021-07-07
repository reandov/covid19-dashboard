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
            seriesName="Casos Acumulados"
            seriesData={accumulated_cases}
            seriesCategories={date}
          />
        </Chart>
        <Chart>
          <LineChart
            chartTitle="Óbitos Acumulados"
            chartColors={["#6b7077"]}
            seriesName="Óbitos Acumulados"
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
            seriesName="Novos Casos | 24h"
            seriesData={new_cases}
            seriesCategories={date}
          />
        </Chart>
        <Chart>
          <LineChart
            chartTitle="Novos Óbitos | 24h"
            chartColors={["#6b7077"]}
            seriesName="Novos Óbitos | 24h"
            seriesData={new_deaths}
            seriesCategories={date}
          />
        </Chart>
      </ChartContainer>
    </Container>
  );
}
