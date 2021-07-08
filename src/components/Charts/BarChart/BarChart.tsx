// React - Next Importations
import { useContext } from "react";
import dynamic from "next/dynamic";

// External Components
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Types
import { IChartData } from "../../../utils/types/types";

import { ThemeContext } from "styled-components";
import dark from "../../../styles/themes/dark";

export function BarChart({
  chartTitle,
  chartColors,
  xaxisTitle,
  yaxisTitle,
  seriesData,
  seriesCategories,
}: IChartData) {
  const themeContext = useContext(ThemeContext);
  const series = [
    {
      name: xaxisTitle,
      data: seriesData,
    },
  ];

  const options: any = {
    colors: chartColors,
    chart: {
      height: 350,
      type: "bar",
      animations: {
        enabled: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 5,
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#f7b707"],
      },
    },
    tooltip: {
      theme: "dark",
    },

    xaxis: {
      categories: seriesCategories,
      position: "bottom",
      labels: {
        datetimeUTC: true,
        style: {
          colors: themeContext.colors.text,
        },
      },
      title: {
        text: yaxisTitle,
        style: {
          fontFamily: "Roboto",
          fontSize: 14,
          fontWeight: 500,
          color: themeContext.colors.text,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      tickAmount: 20,
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        text: xaxisTitle,
        style: {
          fontSize: 14,
          fontWeight: 500,
          fontFamily: "Roboto",
          color: themeContext.colors.text,
        },
      },
      labels: {
        show: true,
        formatter: function (val: number) {
          return Intl.NumberFormat("pt-br").format(val);
        },
        style: {
          fontSize: 12,
          colors: themeContext.colors.text,
        },
      },
    },
    title: {
      text: chartTitle,
      align: "center",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type={"bar"}
        height={350}
      />
    </div>
  );
}
