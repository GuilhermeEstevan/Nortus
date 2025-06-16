import { create } from "zustand";
import { KpisResponse } from "@/types/dashboard";
import { getKpis } from "@/services/dashboard";

interface KpiState {
  data: KpisResponse | null;
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
}

export const useKpiStore = create<KpiState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetch: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getKpis();
      set({ data });
    } catch {
      set({ error: "Erro ao buscar KPIs" });
    } finally {
      set({ loading: false });
    }
  },
}));
