"use client";

import { useAuthStore } from "@/stores/auth-stores";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";

export default function Visao360Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.replace("/login");
    } else {
      useAuthStore.setState({ user: JSON.parse(storedUser) });
    }
  }, []);

  if (!user) return null;

  return <Layout>{children}</Layout>;
}
