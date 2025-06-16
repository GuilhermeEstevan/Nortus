import { create } from "zustand";
import { UserProfile } from "@/types/user";
import { getUserProfile } from "@/services/users";

interface UserProfileState {
  data: UserProfile | null;
  loading: boolean;
  error: string | null;
  fetch: (userId?: number) => Promise<void>;
}

export const useUserProfileStore = create<UserProfileState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetch: async (userId = 1) => {
    set({ loading: true, error: null });
    try {
      const data = await getUserProfile(userId);
      set({ data });
    } catch {
      set({ error: "Erro ao buscar perfil do usuário" });
    } finally {
      set({ loading: false });
    }
  },
}));
