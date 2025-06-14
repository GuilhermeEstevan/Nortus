"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/visao360": "Visão 360º",
  "/dashboard": "Dashboard",
};

export default function Navbar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Página";

  return (
    <nav className="fixed top-0 left-0 z-0 flex items-center justify-between h-[88px] w-full px-12 border-b bg-[#1e253b] py-4 border-gray-800 drop-shadow-2xl">
      <div className="flex items-center gap-12">
        <span className="text-xl ml-32 font-bold text-gray-200">{title}</span>
      </div>
      <div className="flex items-center gap-4"></div>
    </nav>
  );
}
