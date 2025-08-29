"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/visao360");
  }, [router]);

  return <LoadingSpinner />;
}
