"use client";

import { Search } from "lucide-react";

const mockData = [
  {
    offer: "Seguro Auto Plus",
    conversion: "78%",
    revenue: "R$ 125.0k",
    feedback: "4.8/5",
  },
  {
    offer: "Pacote Familiar Total",
    conversion: "65%",
    revenue: "R$ 210.0k",
    feedback: "4.6/5",
  },
  {
    offer: "Vida Empresarial",
    conversion: "45%",
    revenue: "R$ 180.0k",
    feedback: "4.2/5",
  },
  {
    offer: "Residencial Premium",
    conversion: "72%",
    revenue: "R$ 95.0k",
    feedback: "4.7/5",
  },
  {
    offer: "Vida Empresarial",
    conversion: "45%",
    revenue: "R$ 180.0k",
    feedback: "4.2/5",
  },
  {
    offer: "Pacote Familiar Total",
    conversion: "65%",
    revenue: "R$ 210.0k",
    feedback: "4.6/5",
  },
];

export default function ActiveOffersRankingTable() {
  return (
    <div className="bg-white/5 rounded-[16px] p-6  w-full min-h-[435px] flex flex-col text-white gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Ranking de ofertas ativas</h2>
        <button className="w-8 h-8 rounded-full bg-[#1876D2] flex items-center justify-center shadow-[0_0_10px_#1876D2] hover:brightness-110 transition">
          <Search size={16} />
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg bg-[#1f2937] pb-2">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-white/10">
              <th className="px-4 py-3 text-sm font-normal">Oferta</th>
              <th className="px-4 py-3 text-sm font-normal text-right">
                Conversão
              </th>
              <th className="px-4 py-3 text-sm font-normal text-right">
                Receita
              </th>
              <th className="px-4 py-3 text-sm font-normal text-right">
                Feedback
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            {mockData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-white/5 last:border-none"
              >
                <td className="px-4 py-3 text-sm font-semibold">{row.offer}</td>
                <td className="px-4 py-3 text-right text-sm font-semibold">
                  {row.conversion}
                </td>
                <td className="px-4 py-3 text-right text-sm font-semibold">
                  {row.revenue}
                </td>
                <td className="px-4 py-3 text-right text-sm font-semibold">
                  {row.feedback}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
