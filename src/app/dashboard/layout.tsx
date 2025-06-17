"use client";

import { useAuthStore } from "@/stores/auth-stores";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

export default function DashboardLayout({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) return <LoadingSpinner />;

  return <Layout>{children}</Layout>;
}
