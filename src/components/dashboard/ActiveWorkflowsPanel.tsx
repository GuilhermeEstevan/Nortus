import Image from "next/image";
import blueChartIcon from "@/public/icons/blueChartIcon.png";
import copyIcon from "@/public/icons/copyIcon.png";

export default function ActiveWorkflowsPanel() {
  return (
    <div className="bg-[#111827] text-white rounded-xl p-6 w-full h-[180px] flex flex-col justify-between">
      <h2 className="text-lg font-semibold">Workflows inteligentes Ativos</h2>

      <div className="bg-[#1F2937] rounded-xl px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xl font-bold">Jornada Novo Cliente</p>
          <div className="text-sm mt-1 font-normal flex gap-4">
            <p>
              Conversão: <span className="text-[#00DC04]">35%</span>
            </p>
            <p>
              ROI: <span className="text-[#00DC04]">325%</span>
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-blue-500">
          <button>
            <Image
              src={copyIcon}
              alt="Chart"
              width={24}
              height={24}
              className="h-[24px] w-[24px]"
            />
          </button>
          <button>
            <Image
              src={blueChartIcon}
              alt="Chart"
              width={24}
              height={24}
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
