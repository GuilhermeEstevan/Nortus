"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  value: number;
  color: string;
};

const ProgressChart = ({ value, color }: Props) => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
        borderRadius: 4,
      },
    },
    colors: [color],
    tooltip: { enabled: false },
    grid: { show: false },
    xaxis: {
      max: 100,
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
  };

  const series = [{ data: [value] }];

  return <Chart options={options} series={series} type="bar" height={8} />;
};

export default ProgressChart;
