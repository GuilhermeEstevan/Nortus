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
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { toast } from "sonner";

export default function DashboardPage() {
  const { fetch: kpiFetch, data: kpiData, error: kpiError } = useKpiStore();
  const {
    fetch: segmentsFetch,
    data: segmentsData,
    error: segmentsError,
  } = useSegmentsStore();
  const {
    fetch: offersFetch,
    data: offersData,
    error: offersError,
  } = useOffersStore();

  const fetch = async () => {
    await kpiFetch();
    await segmentsFetch();
    await offersFetch();
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tratamento de erros
  useEffect(() => {
    if (kpiError) {
      toast.error(kpiError);
    }
    if (segmentsError) {
      toast.error(segmentsError);
    }
    if (offersError) {
      toast.error(offersError);
    }
  }, [kpiError, segmentsError, offersError]);

  const isLoading =
    !kpiData || offersData.length === 0 || segmentsData.length === 0;

  if (isLoading) {
    return <DashboardSkeleton />;
  }

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
