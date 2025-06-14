import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0B1120] text-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        {" "}
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 pt-[60px]">{children}</main>
      </div>
    </div>
  );
}
