import Image from "next/image";
import arrowUpImg from "@/public/icons/arrowup.png";

export default function HighlightPanel() {
  return (
    <div className="flex flex-row gap-6 w-full">
      {/* ARPU Card */}
      <div className="relative flex flex-1 justify-between items-end bg-white/5  text-white rounded-xl p-4 h-[120px] overflow-hidden">
        <div>
          <p className="text-sm text-white/70">ARPU</p>
          <p className="text-2xl font-bold">R$ 320,50</p>
          <p className="text-[#00DC04] text-sm font-medium mt-2">
            +12% no período
          </p>
        </div>
        <Image
          src={arrowUpImg}
          alt="Ícone de aumento"
          width={90}
          height={90}
          className="absolute bottom-0 right-0 drop-shadow-2xl"
        />
      </div>

      {/* Conversão IA Card */}
      <div className="flex flex-1 justify-between items-end bg-white/5  text-white rounded-xl p-4 h-[120px]">
        <div>
          <p className="text-sm text-white/70">Conversão IA</p>
          <p className="text-2xl font-bold">68,5%</p>
          <p className="text-[#00DC04] text-sm font-medium mt-2">
            +8,2% no período
          </p>
        </div>
      </div>
    </div>
  );
}
