"use client";

import { useRouter } from "next/navigation";
import { fakeLogin } from "@/services/auth";
import { useAuthStore } from "@/stores/auth-stores";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    try {
      const { token, user } = await fakeLogin();
      login(user, token);
      router.push("/dashboard");
    } catch (err) {
      alert("Erro ao fazer login.");
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </main>
  );
}
