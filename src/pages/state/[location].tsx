// React - Next Imports
import React, { useEffect, useState } from "react";
import Head from "next/head";

// External Packages Imports
import { useRouter } from "next/router";

// Internal Components
import { DefaultCharts } from "../../components/DefaultCharts";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { ResumeCards } from "../../components/ResumeCards";

// Services
import { database } from "../../services/firebase";

// Types
import { IStateData } from "../../utils/types/types";

export default function Location() {
  const router = useRouter();
  const { location } = router.query;

  const [stateData, setStateData] = useState<IStateData>({} as IStateData);

  const [loading, setLoading] = useState(true);

  async function getDataFromDatabase() {
    setLoading(true);
    await database
      .ref(`state-data/${location?.toString().toUpperCase()}`)
      .once("value", (snapshot) => {
        setStateData(snapshot.val() as IStateData);
      });
    console.log(stateData);
    setLoading(false);
  }

  useEffect(() => {
    getDataFromDatabase();
  }, [location]);

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
            accumulated_cases={stateData?.accumulated_num_cases}
            accumulated_deaths={stateData?.accumulated_num_deaths}
            new_cases={stateData?.new_num_cases}
            new_deaths={stateData?.new_num_deaths}
            last_updated={stateData?.date.slice(-1)[0]}
          />
          <DefaultCharts
            accumulated_cases={stateData?.accumulated_num_cases}
            accumulated_deaths={stateData?.accumulated_num_deaths}
            new_cases={stateData?.new_num_cases}
            new_deaths={stateData?.new_num_deaths}
            date={stateData?.date}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
