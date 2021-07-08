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

export function LineChart({
  chartTitle,
  chartColors,
  seriesName,
  seriesData,
  seriesCategories,
}: IChartData) {
  const themeContext = useContext(ThemeContext);
  const series = [
    {
      name: seriesName,
      data: seriesData,
    },
  ];

  const options: any = {
    colors: chartColors,
    grid: {
      show: true,
      strokeDashArray: 5,
    },
    chart: {
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 345,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          customIcons: [],
        },
      },
      height: 350,
      type: "area",
      animations: {
        enabled: true,
      },
      locales: [
        {
          name: "ptbr",
          options: {
            months: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            shortMonths: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
            ],
            days: [
              "Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sabado",
            ],
            shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            toolbar: {
              exportToSVG: "Download SVG",
              exportToPNG: "Download PNG",
              menu: "Menu",
              selection: "Seleção",
              selectionZoom: "Selecionar Zoom",
              zoomIn: "Zoom In",
              zoomOut: "Zoom Out",
              pan: "Mover",
              reset: "Resetar Zoom",
            },
          },
        },
      ],
      defaultLocale: "ptbr",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },

    yaxis: {
      labels: {
        formatter: function (val: number) {
          return Intl.NumberFormat("pt-br").format(val);
        },
        style: {
          fontSize: 12,
          colors: themeContext.colors.text,
        },
      },
      title: {
        text: seriesName,
        style: {
          fontSize: 14,
          fontWeight: 500,
          fontFamily: "Roboto",
          color: themeContext.colors.text,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: seriesCategories,
      labels: {
        datetimeUTC: true,
        style: {
          colors: themeContext.colors.text,
        },
      },
      title: {
        text: "Data",
        style: {
          fontFamily: "Roboto",
          fontSize: 14,
          fontWeight: 500,
          color: themeContext.colors.text,
        },
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy",
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
        color: themeContext.colors.text,
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type={"area"}
        height={350}
      />
    </div>
  );
}
