import ActiveOffersRankingTable from "@/components/dashboard/ActiveOffersRankingTable";
import PrimaryHighlightPanel from "@/components/dashboard/PrimaryHighlightPanel";
import KpiEvolutionPanel from "@/components/dashboard/KpiEvolutionPanel";
import SecondaryHighlightPanel from "@/components/dashboard/SecondaryHighlightPanel";
import SegmentImpactPanel from "@/components/dashboard/SegmentImpactPanel";
import ActiveWorkflowsPanel from "@/components/dashboard/ActiveWorkflowsPanel";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="max-w-[1680px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Coluna da esquerda */}
        <div className="xl:col-span-8 flex flex-col gap-3">
          <KpiEvolutionPanel />
          <ActiveOffersRankingTable />
        </div>
        {/* Coluna da direita */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <PrimaryHighlightPanel />
          <SecondaryHighlightPanel />
          <SegmentImpactPanel />
          <ActiveWorkflowsPanel />
        </div>
      </div>
    </div>
  );
}
