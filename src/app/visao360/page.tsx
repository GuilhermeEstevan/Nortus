import ClientInfoPanel from "@/components/visao360/ClientInfo";

export default function Visao360Page() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-[380px_1fr_365px] gap-6">
        {/* Coluna da esquerda */}
        <div className="space-y-6">
          <ClientInfoPanel />
        </div>

        {/* Coluna do meio */}
        <div className="space-y-6">
          <div className="bg-[#111827] rounded-xl p-4 h-[220px]"></div>
          <div className="bg-[#111827] rounded-xl p-4 h-[180px]"></div>
        </div>

        {/* Coluna da direita */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-4 text-white h-[100px]"></div>
          <div className="bg-[#111827] rounded-xl p-4 h-[100px]"></div>
        </div>
      </div>
    </div>
  );
}
