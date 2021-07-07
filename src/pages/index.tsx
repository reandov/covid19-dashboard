// React - Next Imports
import React, { useEffect, useState } from "react";
import Head from "next/head";

// Internal Components
import { Loading } from "../components/Loading";
import { ResumeCards } from "../components/ResumeCards";
import { DefaultCharts } from "../components/DefaultCharts";

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
import { LineChart } from "../components/Charts/LineChart/LineChart";
import { BarChart } from "../components/Charts/BarChart/BarChart";
import { Footer } from "../components/Footer";

export default function Home() {
  const [nationalData, setNationalData] = useState<INationalData>();
  const [epiWeeksData, setEpiWeeksData] = useState<IEpidemiologicalData>();
  const [dailyData, setDailyData] = useState<IDailyData>();

  const [loading, setLoading] = useState(false);

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
                  chartColors={["#116ddd"]}
                  seriesName="Casos Acumulados p/ Estado"
                  seriesData={dailyData?.accumulated_cases}
                  seriesCategories={dailyData?.state}
                />
              </Chart>
              <Chart>
                <BarChart
                  chartTitle="Óbitos Acumulados p/ Estado"
                  chartColors={["#6b7077"]}
                  seriesName="Óbitos Acumulados p/ Estado"
                  seriesData={dailyData?.accumulated_deaths}
                  seriesCategories={dailyData?.state}
                />
              </Chart>
            </ChartContainer>
            <ChartContainer>
              <Chart>
                <BarChart
                  chartTitle="Novos Casos p/ Estado"
                  chartColors={["#116ddd"]}
                  seriesName="Novos Casos p/ Estado"
                  seriesData={dailyData?.new_cases}
                  seriesCategories={dailyData?.state}
                />
              </Chart>
              <Chart>
                <BarChart
                  chartTitle="Novos Óbitos p/ Estado"
                  chartColors={["#6b7077"]}
                  seriesName="Novos Óbitos p/ Estado"
                  seriesData={dailyData?.new_deaths}
                  seriesCategories={dailyData?.state}
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
