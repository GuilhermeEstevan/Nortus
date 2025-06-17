"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  labels: string[];
  series: number[];
  colors: string[];
}

const SegmentImpactDonut = ({ labels, series, colors }: Props) => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels,
    legend: { show: false },
    stroke: { show: false },
    dataLabels: { enabled: false },
    colors: colors,
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val: number) => `${val.toFixed(1)}%`,
      },
    },
  };

  return <Chart options={options} series={series} type="donut" width="100%" />;
};

export default SegmentImpactDonut;
