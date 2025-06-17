"use client";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import Image from "next/image";
import diamondIcon from "@/public/icons/diamond.png";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  value: number;
};

const DiamondGaugeChart = ({ value }: Props) => {
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        hollow: {
          size: "60%",
        },
        track: {
          background: "#3f4759",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        gradientToColors: ["#52E0FF"],
        stops: [0, 100],
      },
      colors: ["#00B2FF"],
    },
    stroke: {
      lineCap: "round",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {/* Chart com diamante e Premium */}
      <div className="relative w-[150px] h-[150px]">
        <Chart
          options={options}
          series={[value]}
          type="radialBar"
          height="100%"
          width="100%"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] flex flex-col items-center">
          <Image
            src={diamondIcon}
            alt="Diamante"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-white/50 text-sm font-medium mt-1">
            Premium
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiamondGaugeChart;
