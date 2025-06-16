import Image from "next/image";
import arrowDownImg from "@/public/icons/arrowdown.png";

export default function SecondaryHighlightPanel() {
  return (
    <div className="flex flex-row gap-6 w-full">
      {/* Retenção */}
      <div className="flex flex-1 justify-between items-end bg-white/5  text-white rounded-xl p-4 h-[120px] overflow-hidden">
        <div>
          <p className="text-sm text-white/70">Retenção</p>
          <p className="text-2xl font-bold">85%</p>
          <p className="text-[#00DC04] text-sm font-medium mt-2">
            +2,5% no período
          </p>
        </div>
      </div>

      {/* Churn */}
      <div className="relative flex flex-1 justify-between items-end bg-white/5  text-white rounded-xl p-4 h-[120px] overflow-hidden">
        <div>
          <p className="text-sm text-white/70">Taxa de Churn</p>
          <p className="text-2xl font-bold">3,2%</p>
          <p className="text-[#DC3300] text-sm font-medium mt-2">
            -1,5% no período
          </p>
        </div>
        <Image
          src={arrowDownImg}
          alt="Ícone de queda"
          width={90}
          height={90}
          className="absolute bottom-0 right-0 drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
