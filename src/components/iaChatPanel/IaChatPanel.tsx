"use client";
import { useEffect } from "react";
import Image from "next/image";
import iaAssistent from "@/public/icons/iaAssist.png";
import { X } from "lucide-react";
import { useConversationStore } from "@/stores/conversation-store";

interface Props {
  onClose: () => void;
}

const IaChatPanel = ({ onClose }: Props) => {
  const { fetch, data } = useConversationStore();

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute bottom-10 right-10 flex items-end gap-4 animate-fade-in z-30">
      {/* Painel de Chat */}
      <div className="w-[300px] max-h-[400px] bg-[#1f2937] rounded-2xl p-4 text-white text-sm flex flex-col justify-between shadow-xl border border-white/10">
        {/* Título */}
        <h4 className="font-bold text-base mb-2">Conversa com a Nortus</h4>

        {/* Mensagens */}
        <div className="overflow-y-auto scrollbar flex flex-col gap-3 pr-1 max-h-[280px]">
          {data?.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              {item.from !== "Assistente" ? (
                <div className="self-end bg-[#1876D2] px-4 py-2 rounded-xl rounded-br-none max-w-[80%]">
                  <span className="font-medium">🤔 {item.message}</span>
                </div>
              ) : (
                <div className="self-start bg-[#2a2f3a] px-4 py-2 rounded-xl rounded-bl-none max-w-[80%]">
                  <span className="text-white/90">💡 {item.message}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Campo de digitação */}
        <div className="mt-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite uma pergunta..."
            className="flex-1 rounded-full px-4 py-2 text-xs text-white bg-[#2a2f3a] border border-white/10 placeholder:text-white/50 focus:outline-none"
          />
          <button className="bg-[#1876D2] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-[#0d223a] shadow transition">
            Enviar
          </button>
        </div>
      </div>

      {/* Botão e avatar */}
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-5 -right-2 bg-red-600 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center z-40 hover:bg-red-700 shadow"
        >
          <X className="w-3 h-3" />
        </button>

        <button className="relative w-[137px] h-[137px] rounded-full bg-[#2ABBDD] shadow-[0_0_40px_#2ABBDD] overflow-visible">
          <div className="absolute inset-0 rounded-full overflow-visible">
            <Image
              src={iaAssistent}
              alt="Assistente IA"
              width={160}
              height={160}
              className="absolute -top-[65px] left-1/2 -translate-x-1/2 clip-bottom-rounded"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default IaChatPanel;
