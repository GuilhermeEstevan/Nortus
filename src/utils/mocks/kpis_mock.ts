import { KpisResponse } from "@/types/dashboard";

export const MOCK_KPIS: KpisResponse = {
  arpu: 320.5,
  conversion: 68.5,
  retention: 85,
  churn: 3.2,
  arpuTrend: Array.from({ length: 24 }, (_, i) => 120 + i * 15),
  conversionTrend: Array.from({ length: 24 }, (_, i) => 60 + i * 0.5),
  labels: Array.from({ length: 24 }, (_, i) => `Mês ${i + 1}`),
};
