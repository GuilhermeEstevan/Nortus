import Image from "next/image";
import arrowDownImg from "@/public/icons/arrowdown.png";
import { KpisResponse } from "@/types/dashboard";

interface Props {
  data: KpisResponse | null;
}

export default function SecondaryHighlightPanel({ data }: Props) {
  const { retention, churn } = data ?? {};

  return (
    <div className="flex flex-row gap-6 w-full">
      {/* Retenção */}
      <div className="flex flex-1 justify-between items-end bg-white/5  text-white rounded-xl p-4 h-[120px] overflow-hidden">
        <div>
          <p className="text-sm text-white/70">Retenção</p>
          <p className="text-2xl font-bold">{retention}%</p>
          <p className="text-[#00DC04] text-sm font-medium mt-2">
            +2,5% no período
          </p>
        </div>
      </div>

      {/* Churn */}
      <div className="relative flex flex-1 justify-between items-end bg-white/5  text-white rounded-xl p-4 h-[120px] overflow-hidden">
        <div>
          <p className="text-sm text-white/70">Taxa de Churn</p>
          <p className="text-2xl font-bold">{churn}%</p>
          <p className="text-[#DC3300] text-sm font-medium mt-2">
            -1,5% no período
          </p>
        </div>
        <Image
          src={arrowDownImg}
          alt="Ícone de queda"
          width={90}
          height={90}
          className="absolute bottom-0 right-0 drop-shadow-2xl h-[90px] w-[90px]"
        />
      </div>
    </div>
  );
}
