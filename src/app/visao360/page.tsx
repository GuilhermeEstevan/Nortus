import ClientInfoPanel from "@/components/visao360/ClientInfo";
export default function Visao360Page() {
  return (
    <div className="p-6">
      <div className="max-w-[1440px] mx-auto flex gap-6">
        <div className="w-[365px]">
          <ClientInfoPanel />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6 min-h-[420px]">
            <div className="bg-[#1F2937] rounded-xl p-4 h-full">Coluna 2</div>

            <div className="flex flex-col gap-6 h-full">
              <div className="bg-[#0F172A] rounded-xl p-4 flex-1">
                Coluna 3.1
              </div>
              <div className="bg-[#111827] rounded-xl p-4 flex-1">
                Coluna 3.2
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B] rounded-xl p-4 h-[250px]">Rodapé</div>
        </div>
      </div>
    </div>
  );
}
