import SegmentImpactDonut from "../charts/SegmentImpactDonut";

const labels = ["Premium", "Alta Renda", "Familiar", "Profissional", "Jovem"];
const colors = ["#009EE3", "#0057FF", "#49C9E0", "#1B4CE0", "#60DBFF"];

export default function SegmentImpactPanel() {
  return (
    <div className="bg-[#111827] text-white rounded-xl p-6 w-full h-[400px] flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-12">
          Mapa de impacto por segmento
        </h2>

        <div className="flex gap-4">
          {/* Donut */}
          <div className="w-[200px]">
            <SegmentImpactDonut />
          </div>

          {/* Título + Chips organizados */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white/70 mb-1">Cluster estratégicos</p>

            <div className="flex flex-wrap gap-2">
              {labels.map((label, index) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-[#1F2937] px-4 py-1 text-xs font-medium rounded-full"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors[index] }}
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-end mt-4">
        <button className="px-4 py-3 text-xs font-semibold bg-[#1876D2] text-white rounded-full shadow-[0_0_10px_#1876D2] hover:brightness-110 transition">
          Analisar segmentos
        </button>
      </div>
    </div>
  );
}
