"use client";

import { Offer } from "@/types/dashboard";
import { formatCompactPrice } from "@/utils/format";
import { Search } from "lucide-react";

interface Props {
  data: Offer[];
}

export default function ActiveOffersRankingTable({ data }: Props) {
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
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-white/5 last:border-none"
              >
                <td className="px-4 py-3 text-sm font-semibold">{row.name}</td>
                <td className="px-4 py-3 text-right text-sm font-semibold">
                  {row.conversion}%
                </td>
                <td className="px-4 py-3 text-right text-sm font-semibold">
                  {formatCompactPrice(row.revenue)}
                </td>
                <td className="px-4 py-3 text-right text-sm font-semibold">
                  {row.feedback}/5
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
