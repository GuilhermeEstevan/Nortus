import ClientInfoPanel from "@/components/visao360/ClientInfoPanel";
import InsuranceUpgradePanel from "@/components/visao360/InsuranceUpgradePanel";
import IntelligentRatingPanel from "@/components/visao360/IntelligentRatingPanel";
export default function Visao360Page() {
  return (
    <div className="p-6">
      <div className="max-w-[1680px] mx-auto flex gap-6">
        <div className="w-[365px]">
          <ClientInfoPanel />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-[2.5fr_1fr] gap-6 min-h-[420px]">
            <div className="bg-[#1F2937] rounded-xl p-4 h-full">Coluna 2</div>

            <div className="flex flex-col gap-6 h-full">
              <div className="bg-[#0F172A] rounded-xl p-4 flex-1 min-h-[210px]">
                Coluna 3.1
              </div>
              <div className="min-h-[210px]">
                <InsuranceUpgradePanel />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1c2332] to-[#0e1726] rounded-xl p-4 ">
            <IntelligentRatingPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
