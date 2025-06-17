import { Segment } from "@/types/dashboard";
import SegmentImpactDonut from "../charts/SegmentImpactDonut";
import { CHART_COLORS } from "@/utils/chartColors";

interface Props {
  data: Segment[] | [];
}

export default function SegmentImpactPanel({ data }: Props) {
  const labels = data.map((segment) => segment.label);
  const series = data.map((segment) => segment.value * 100);

  const colorMap: Record<string, string> = labels.reduce(
    (acc, label, index) => {
      acc[label] = CHART_COLORS[index % CHART_COLORS.length];
      return acc;
    },
    {} as Record<string, string>
  );
  const colors = labels.map((label) => colorMap[label]);

  return (
    <div className="bg-[#111827] text-white rounded-xl p-6 w-full min-h-[400px] flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-12">
          Mapa de impacto por segmento
        </h2>

        <div className="flex gap-4">
          {/* Donut */}
          <div className="min-w-[200px]">
            <SegmentImpactDonut
              labels={labels}
              series={series}
              colors={colors}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-white/70 mb-1">Cluster estratégicos</p>

            <div className="flex flex-wrap gap-2">
              {labels.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-[#1F2937] px-4 py-1 text-xs font-medium rounded-full"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colorMap[label] }}
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
