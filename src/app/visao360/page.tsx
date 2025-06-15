import ClientInfoPanel from "@/components/visao360/ClientInfoPanel";
import IaSuggestionPanel from "@/components/visao360/IASugestionPanel";
import InsuranceUpgradePanel from "@/components/visao360/InsuranceUpgradePanel";
import IntelligentRatingPanel from "@/components/visao360/IntelligentRatingPanel";
import LifeInsurancePanel from "@/components/visao360/LifeInsurancePanel";
export default function Visao360Page() {
  return (
    <div className="p-6">
      <div className="max-w-[1680px] mx-auto flex gap-6">
        <div className="w-[365px]">
          <ClientInfoPanel />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-[2.5fr_1fr] gap-6 min-h-[420px]">
            <IaSuggestionPanel />
            <div className="flex flex-col gap-6 h-full">
              <div className="flex-1 min-h-[210px]">
                <LifeInsurancePanel />
              </div>
              <div className="min-h-[210px]">
                <InsuranceUpgradePanel />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1c2332] to-[#0e1726] rounded-xl p-4 border-1 border-white/10">
            <IntelligentRatingPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
