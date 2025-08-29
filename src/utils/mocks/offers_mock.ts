import { Offer } from "@/types/dashboard";

export const MOCK_OFFERS: Offer[] = Array.from({ length: 15 }, (_, i) => ({
  name: `Plano ${i + 1}`,
  conversion: [40, 45, 50, 55, 60][i % 5],
  revenue: 100000 + i * 10000,
  feedback: [3.5, 3.8, 4.1][i % 3],
}));
