"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SegmentImpactDonut = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Premium", "Alta Renda", "Familiar", "Profissional", "Jovem"],
    legend: { show: false },
    stroke: { show: false },
    dataLabels: { enabled: false },
    colors: ["#009EE3", "#0057FF", "#49C9E0", "#1B4CE0", "#60DBFF"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };

  const series = [25, 20, 18, 22, 15];

  return <Chart options={options} series={series} type="donut" width="100%" />;
};

export default SegmentImpactDonut;
