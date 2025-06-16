import { create } from "zustand";
import { Segment } from "@/types/dashboard";
import { getSegments } from "@/services/dashboard";

interface SegmentState {
  data: Segment[];
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
}

export const useSegmentsStore = create<SegmentState>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetch: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getSegments();
      set({ data: res.segments });
    } catch {
      set({ error: "Erro ao buscar segmentos" });
    } finally {
      set({ loading: false });
    }
  },
}));
