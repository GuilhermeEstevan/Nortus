import { IARecommendation } from "@/types/client";
import { formatPrice } from "@/utils/format";

interface Props {
  iaRecommendation: IARecommendation | null;
}

const LifeInsurancePanel = ({ iaRecommendation }: Props) => {
  const { plan, value, reasonWhy } = iaRecommendation ?? {};

  return (
    <div
      className="rounded-2xl text-white p-6 flex flex-col justify-between h-full border-1 border-white/10"
      style={{
        background:
          "linear-gradient(to bottom, #2A97D4 0%, #33ABD6 50%, #3AB7D7 100%)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="space-y-1">
        <h3 className="text-lg font-bold leading-snug">{plan}</h3>
        <div className="mt-3 space-y-1">
          {reasonWhy?.slice(0, 3).map((reason, index) => (
            <p
              key={index}
              className="text-sm font-normal opacity-90 leading-tight tracking-tighter"
            >
              {reason}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-xs opacity-80 mb-1">Por apenas:</p>
          <p className="text-lg font-semibold">{formatPrice(value ?? 0)}/mês</p>
        </div>
        <button className="text-sm text-white bg-[#1876D2] w-[80px] h-[40px] rounded-full font-medium transition hover:bg-white hover:text-cyan-800 shadow-[0_0_10px_#1876D2] flex items-center justify-center">
          Simular
        </button>
      </div>
    </div>
  );
};

export default LifeInsurancePanel;
