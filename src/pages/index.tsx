// React - Next Imports
import React, { useEffect, useState } from "react";
import Head from "next/head";

// Internal Components
import { Loading } from "../components/Loading";
import { ResumeCards } from "../components/ResumeCards";
import { DefaultCharts } from "../components/DefaultCharts";
import { BarChart } from "../components/Charts/BarChart/BarChart";
import { Footer } from "../components/Footer";

// Services
import { database } from "../services/firebase";

// Types
import {
  INationalData,
  IDailyData,
  IEpidemiologicalData,
} from "../utils/types/types";

// Styles
import {
  Container,
  ChartContainer,
  Chart,
} from "../components/DefaultCharts/styles";

export default function Home() {
  const [nationalData, setNationalData] = useState<INationalData>(
    {} as INationalData
  );
  const [epiWeeksData, setEpiWeeksData] = useState<IEpidemiologicalData>(
    {} as IEpidemiologicalData
  );
  const [dailyData, setDailyData] = useState<IDailyData>({} as IDailyData);

  const [loading, setLoading] = useState(true);

  async function getDataFromDatabase() {
    setLoading(true);
    await database.ref("national-data").once("value", (snapshot) => {
      setNationalData(snapshot.val());
    });
    await database.ref("epi-weeks-data").once("value", (snapshot) => {
      setEpiWeeksData(snapshot.val());
    });
    await database.ref("daily-data").once("value", (snapshot) => {
      setDailyData(snapshot.val());
    });
    setLoading(false);
  }

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  return (
    <div>
      <Head>
        <title>COVID-19 | Dashboard</title>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ResumeCards
            accumulated_cases={nationalData?.accumulated_num_cases}
            accumulated_deaths={nationalData?.accumulated_num_deaths}
            new_cases={nationalData?.new_num_cases}
            new_deaths={nationalData?.new_num_deaths}
            last_updated={nationalData?.date.slice(-1)[0]}
          />
          <DefaultCharts
            accumulated_cases={nationalData?.accumulated_num_cases}
            accumulated_deaths={nationalData?.accumulated_num_deaths}
            new_cases={nationalData?.new_num_cases}
            new_deaths={nationalData?.new_num_deaths}
            date={nationalData?.date}
          />
          <Container>
            <ChartContainer>
              <Chart>
                <BarChart
                  chartTitle="Casos Acumulados p/ Estado"
                  xaxisTitle="Quantidade de Casos"
                  yaxisTitle="Estados"
                  chartColors={["#116ddd"]}
                  seriesData={dailyData?.accumulated_cases}
                  seriesCategories={dailyData?.state}
                />
              </Chart>
              <Chart>
                <BarChart
                  chartTitle="Óbitos Acumulados p/ Estado"
                  xaxisTitle="Quantidade de Óbitos"
                  yaxisTitle="Estados"
                  chartColors={["#6b7077"]}
                  seriesData={dailyData?.accumulated_deaths}
                  seriesCategories={dailyData?.state}
                />
              </Chart>
            </ChartContainer>
            <ChartContainer>
              <Chart>
                <BarChart
                  chartTitle="Novos Casos p/ Estado"
                  xaxisTitle="Quantidade de Novos Casos"
                  yaxisTitle="Estados"
                  chartColors={["#116ddd"]}
                  seriesData={dailyData?.new_cases}
                  seriesCategories={dailyData?.state}
                />
              </Chart>
              <Chart>
                <BarChart
                  chartTitle="Novos Óbitos p/ Estado"
                  xaxisTitle="Quantidade de Óbitos"
                  yaxisTitle="Estados"
                  chartColors={["#6b7077"]}
                  seriesData={dailyData?.new_deaths}
                  seriesCategories={dailyData?.state}
                />
              </Chart>
            </ChartContainer>
            <ChartContainer>
              <Chart>
                <BarChart
                  chartTitle="Novos Casos p/ Semana Epidemiológica"
                  xaxisTitle="Quantidade de Novos Casos"
                  yaxisTitle="Semanas Epidemiológicas - Ano"
                  chartColors={["#116ddd"]}
                  seriesData={epiWeeksData?.new_cases}
                  seriesCategories={epiWeeksData?.epidemiological_week}
                />
              </Chart>
              <Chart>
                <BarChart
                  chartTitle="Novos Óbitos p/ Semana Epidemiológica"
                  xaxisTitle="Quantidade de Novos Óbitos"
                  yaxisTitle="Semanas Epidemiológicas - Ano"
                  chartColors={["#6b7077"]}
                  seriesData={epiWeeksData?.new_deaths}
                  seriesCategories={epiWeeksData?.epidemiological_week}
                />
              </Chart>
            </ChartContainer>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
}
