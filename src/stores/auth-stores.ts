import { create } from "zustand";
import Cookies from "js-cookie";
import { AuthUser } from "@/types/auth";

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: (user, token) => {
    Cookies.set("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token });
  },

  logout: () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },
}));
