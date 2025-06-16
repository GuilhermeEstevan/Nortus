import { create } from "zustand";
import { Client } from "@/types/client";
import { getClient } from "@/services/clients";

interface ClientState {
  data: Client | null;
  loading: boolean;
  error: string | null;
  fetch: (clientId?: number) => Promise<void>;
}

export const useClientStore = create<ClientState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetch: async (clientId = 1) => {
    set({ loading: true, error: null });
    try {
      const data = await getClient(clientId);
      set({ data });
    } catch {
      set({ error: "Erro ao buscar cliente" });
    } finally {
      set({ loading: false });
    }
  },
}));
