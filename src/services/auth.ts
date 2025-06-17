import { AuthResponse, AuthUser } from "@/types/auth";
import { api } from "./api";
import { getUserProfile } from "./users";

export async function fakeLogin() {
  try {
    const res = await api.get<AuthResponse>("/auth/login.json");
    const { token, user } = res.data;

    const profile = await getUserProfile(user.id);
    
    const fullUser: AuthUser = {
      ...user,
      avatar: profile.avatar,
      settings: profile.settings,
    };

    return { token, user: fullUser };
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Erro ao fazer login:", err.message);
    } else {
      console.error("Erro desconhecido ao fazer login:", err);
    }
    throw new Error("Erro ao fazer login");
  }
}
