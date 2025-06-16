"use client";

import ActiveOffersRankingTable from "@/components/dashboard/ActiveOffersRankingTable";
import PrimaryHighlightPanel from "@/components/dashboard/PrimaryHighlightPanel";
import KpiEvolutionPanel from "@/components/dashboard/KpiEvolutionPanel";
import SecondaryHighlightPanel from "@/components/dashboard/SecondaryHighlightPanel";
import SegmentImpactPanel from "@/components/dashboard/SegmentImpactPanel";
import ActiveWorkflowsPanel from "@/components/dashboard/ActiveWorkflowsPanel";
import { useKpiStore } from "@/stores/kpi-store";
import { useEffect } from "react";
import { useSegmentsStore } from "@/stores/segments-store";
import { useOffersStore } from "@/stores/offers-store";

export default function DashboardPage() {
  const { fetch: kpiFetch, data: kpiData } = useKpiStore();
  const { fetch: segmentsFetch, data: segmentsData } = useSegmentsStore();
  const { fetch: offersFetch, data: offersData } = useOffersStore();

  const fetch = async () => {
    await kpiFetch();
    await segmentsFetch();
    await offersFetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="p-6">
      <div className="max-w-[1680px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Coluna da esquerda */}
        <div className="xl:col-span-8 flex flex-col gap-3">
          <KpiEvolutionPanel data={kpiData} />
          <ActiveOffersRankingTable data={offersData} />
        </div>
        {/* Coluna da direita */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <PrimaryHighlightPanel data={kpiData} />
          <SecondaryHighlightPanel data={kpiData} />
          <SegmentImpactPanel data={segmentsData} />
          <ActiveWorkflowsPanel />
        </div>
      </div>
    </div>
  );
}
