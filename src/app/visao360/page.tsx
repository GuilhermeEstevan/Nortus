import ClientInfoPanel from "@/components/visao360/ClientInfoPanel";
import IaSuggestionPanel from "@/components/visao360/IASugestionPanel";
import InsuranceUpgradePanel from "@/components/visao360/InsuranceUpgradePanel";
import IntelligentRatingPanel from "@/components/visao360/IntelligentRatingPanel";
import LifeInsurancePanel from "@/components/visao360/LifeInsurancePanel";

export default function Visao360Page() {
  return (
    <div className="p-4 2xl:p-6">
      <div className="max-w-[1680px] mx-auto flex flex-col 2xl:flex-row gap-6">
        {/* Painel lateral */}
        <div className="w-full 2xl:w-[365px] shrink-0">
          <ClientInfoPanel />
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 2xl:grid xl:grid-cols-3 w-full">
            <div className="2xl:col-span-2 w-full">
              <IaSuggestionPanel />
            </div>

            <div className="flex flex-col gap-6 w-full">
              <LifeInsurancePanel />
              <InsuranceUpgradePanel />
            </div>
          </div>

          <div className="w-full bg-gradient-to-br from-[#1c2332] to-[#0e1726] rounded-xl p-4 border border-white/10">
            <IntelligentRatingPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
