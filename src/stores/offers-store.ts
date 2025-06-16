import { create } from "zustand";
import { Offer } from "@/types/dashboard";
import { getOffers } from "@/services/dashboard";

interface OfferState {
  data: Offer[];
  loading: boolean;
  error: string | null;
  fetch: () => Promise<void>;
}

export const useOffersStore = create<OfferState>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetch: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getOffers();
      set({ data });
    } catch {
      set({ error: "Erro ao buscar ofertas" });
    } finally {
      set({ loading: false });
    }
  },
}));
