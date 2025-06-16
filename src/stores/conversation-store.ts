import { create } from "zustand";
import { ConversationMessage } from "@/types/conversation";
import { getConversation } from "@/services/conversations";

interface ConversationState {
  data: ConversationMessage[];
  loading: boolean;
  error: string | null;
  fetch: (clientId?: number) => Promise<void>;
}

export const useConversationStore = create<ConversationState>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetch: async (clientId = 1) => {
    set({ loading: true, error: null });
    try {
      const data = await getConversation(clientId);
      set({ data });
    } catch {
      set({ error: "Erro ao buscar conversas" });
    } finally {
      set({ loading: false });
    }
  },
}));
