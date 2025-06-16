"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  kpi: string;
  data: number[];
  categories: string[];
};

const KpiChart = ({ kpi, data, categories }: Props) => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    grid: {
      show: true,
      borderColor: "#3a3f51",
      strokeDashArray: 4,
    },
    colors: ["#00E0FF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "14px",
        fontFamily: "inherit",
      },
      y: {
        formatter: (val: number) => `R$ ${val.toFixed(1)}k`,
        title: {
          formatter: () => "",
        },
      },
      marker: {
        show: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      name: kpi,
      data,
    },
  ];
  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height="100%"
      width="100%"
    />
  );
};

export default KpiChart;
