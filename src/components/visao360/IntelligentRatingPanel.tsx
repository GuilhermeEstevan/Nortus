import DiamondGaugeChart from "../charts/DiamondGaugeChart";
import ProgressChart from "../charts/ProgressChart";

const IntelligentRatingPanel = () => {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-xl font-extrabold">Classificação inteligente</h2>

      <div className="flex flex-col xl:flex-row gap-6 items-stretch w-full">
        {/* Bloco do gráfico circular */}
        <div
          className="xl:basis-4/12 flex flex-col justify-between text-center space-y-6 px-6 pt-6 pb-4 rounded-xl shadow-inner flex-1 min-w-0"
          style={{
            background: `linear-gradient(135deg, #222739 0%, #212639 50%, #212638 100%)`,
            backgroundBlendMode: "overlay",
            boxShadow: "inset 0 0 0 1000px rgba(255, 255, 255, 0.05)",
          }}
        >
          <DiamondGaugeChart value={75} />

          <div className="flex items-end justify-center w-full text-sm px-2 pb-2">
            <div className="flex flex-col items-start w-full">
              <span className="text-white/50 text-xs mb-1 whitespace-nowrap">
                Life time value
              </span>
              <span className="text-white text-lg font-extrabold whitespace-nowrap mb-0">
                R$ 24.580,00
              </span>
            </div>

            <div className="w-px h-8 bg-gray-600 mx-4" />

            <div className="flex flex-col items-start w-full">
              <span className="text-white/50 text-xs mb-1 whitespace-nowrap">
                Probabilidade de churn
              </span>
              <span className="text-green-500 text-lg font-bold whitespace-nowrap">
                11%
              </span>
            </div>
          </div>
        </div>

        {/* Bloco dos dois scores */}
        <div className="xl:basis-2/3 flex flex-col gap-4 flex-1 min-w-0">
          {/* Expansão */}
          <div
            className="py-6 px-6 rounded-xl flex flex-col justify-center gap-8 h-full"
            style={{
              background:
                "linear-gradient(135deg, #222739 0%, #212639 50%, #212638 100%)",
              backgroundBlendMode: "overlay",
              boxShadow: "inset 0 0 0 1000px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="flex justify-start mb-1 items-center gap-2">
              <span className="text-sm text-white font-medium">
                Score de expansão
              </span>
              <span className="bg-[#00DC04] text-sm px-4 py-0.5 rounded-full text-white font-medium font-sans tracking-tight">
                Alto
              </span>
            </div>
            <div className="w-[calc(90%)] h-[16px] bg-gray-700 rounded-full drop-shadow-2xl overflow-hidden">
              <ProgressChart value={95} color="#00DC04" />
            </div>
          </div>

          {/* Retenção */}
          <div
            className="py-6 px-6 rounded-xl flex flex-col justify-center gap-8 h-full"
            style={{
              background:
                "linear-gradient(135deg, #222739 0%, #212639 50%, #212638 100%)",
              backgroundBlendMode: "overlay",
              boxShadow: "inset 0 0 0 1000px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="flex justify-start gap-2 mb-1 items-center">
              <span className="text-sm text-white font-medium">
                Score de retenção
              </span>
              <span className="bg-[#E7BD00] text-sm px-4 py-0.5 rounded-full text-white font-medium font-sans tracking-tight">
                Médio
              </span>
            </div>
            <div className="w-[calc(90%)] h-[16px] bg-gray-700 rounded-full drop-shadow-2xl overflow-hidden">
              <ProgressChart value={70} color="#E7BD00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentRatingPanel;
