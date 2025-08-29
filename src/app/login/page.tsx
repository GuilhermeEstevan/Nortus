"use client";

import { useRouter } from "next/navigation";
import { fakeLogin } from "@/services/auth";
import { useAuthStore } from "@/stores/auth-stores";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    try {
      // const { token, user } = await fakeLogin();
      // login(user, token);
      toast.success("Seja bem-vindo!");
      router.push("/visao360");
    } catch (err: unknown) {
      console.log(err);
      toast.error("Erro ao fazer login.");
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
