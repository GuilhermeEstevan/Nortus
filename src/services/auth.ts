import { AuthResponse } from "@/types/auth";
import { api } from "./api";

export async function fakeLogin() {
  try {
    const res = await api.get<AuthResponse>("/auth/login.json");
    return res.data;
  } catch (err: any) {
    console.error("Erro ao fazer login:", err.message);
    throw new Error("Erro ao fazer login");
  }
}