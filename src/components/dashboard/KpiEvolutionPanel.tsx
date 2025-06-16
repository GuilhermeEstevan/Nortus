"use client";

import { useState } from "react";
import KpiChart from "../charts/KpiChart";

const KpiEvolutionPanel = () => {
  const [selectedKpi, setSelectedKpi] = useState("ARPU");

  const kpis = ["Retenção", "Conversão", "Churn", "ARPU"];

  return (
    <div className="bg-white/5  text-white rounded-xl p-6 w-full max-h-[376px] h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Evolução dos KPI's</h2>
        <div className="flex bg-white/5 h-[56px] gap-3 px-4 py-2 rounded-full">
          {kpis.map((kpi) => (
            <button
              key={kpi}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                selectedKpi === kpi
                  ? "bg-[#2DB3C8] text-white shadow-[0_0_10px_#2DB3C8]"
                  : "bg-[#393e4e] text-gray-300 hover:bg-[#2DB3C8] hover:text-white"
              }`}
              onClick={() => setSelectedKpi(kpi)}
            >
              {kpi}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <KpiChart kpi={selectedKpi} />
      </div>
    </div>
  );
};

export default KpiEvolutionPanel;
