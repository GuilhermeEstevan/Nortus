import ActiveOffersRankingTable from "@/components/dashboard/ActiveOffersRankingTable";
import PrimaryHighlightPanel from "@/components/dashboard/PrimaryHighlightPanel";
import KpiEvolutionPanel from "@/components/dashboard/KpiEvolutionPanel";
import SecondaryHighlightPanel from "@/components/dashboard/SecondaryHighlightPanel";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="max-w-[1680px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Coluna da esquerda (gráfico + ranking) */}
        <div className="xl:col-span-8 flex flex-col gap-3">
          {/* <div className="bg-blue-900 h-[400px] rounded-xl flex items-center justify-center text-white"> */}
          <KpiEvolutionPanel />
          {/* </div> */}
          {/* <div className="bg-purple-900 h-[600px] rounded-xl flex items-center justify-center text-white"> */}
          <ActiveOffersRankingTable />
          {/* </div> */}
        </div>

        {/* Coluna da direita com KPIs e Mapa + nova seção */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          {/* <div className="bg-green-900 h-[120px] rounded-xl flex items-center justify-center text-white"> */}
          <PrimaryHighlightPanel />
          {/* </div> */}
          {/* <div className="bg-green-900 h-[120px] rounded-xl flex items-center justify-center text-white"> */}
          <SecondaryHighlightPanel />
          {/* </div> */}
          <div className="bg-yellow-900 h-[400px] rounded-xl flex items-center justify-center text-white">
            Mapa de impacto por segmento
          </div>
          <div className="bg-red-900 h-[180px] rounded-xl flex items-center justify-center text-white">
            Workflows inteligentes ativos
          </div>
        </div>
      </div>
    </div>
  );
}
