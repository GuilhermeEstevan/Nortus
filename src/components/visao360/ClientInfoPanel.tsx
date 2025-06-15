import phoneIcon from "@/public/icons/phone.png";
import emailIcon from "@/public/icons/email.png";
import dotsIcon from "@/public/icons/dots.png";
import productsLinsIcon from "@/public/icons/productsLink.png";
import { Plus } from "lucide-react";
import Image from "next/image";

const ClientInfoPanel = () => {
  return (
    <div className="h-full rounded-xl px-4 ">
      <div className="bg-[#111827] rounded-xl p-4 px-5 h-full border-1 border-white/10 text-white ">
        <div className="text-center mb-8 mt-6">
          <h2 className="text-lg font-bold">Ricardo Leite</h2>
        </div>

        {/* Ações rápidas */}
        <div className="flex justify-around text-sm text-blue-300 ">
          <button className="group flex flex-col items-center gap-2">
            <Image
              src={phoneIcon}
              alt="Telefone"
              width={24}
              height={24}
              className="group-hover:animate-[wiggle_0.5s_ease-in-out]"
            />
            <span>Telefonar</span>
          </button>
          <button className="group flex flex-col items-center gap-2">
            <Image
              src={emailIcon}
              alt="e-mail"
              width={24}
              height={24}
              className="group-hover:animate-[wiggle_0.5s_ease-in-out]"
            />
            <span>Enviar e-mail</span>
          </button>
          <button className="group flex flex-col items-center gap-2">
            <Image
              src={dotsIcon}
              alt="Telefone"
              width={24}
              height={24}
              className="group-hover:animate-[wiggle_0.5s_ease-in-out]"
            />
            <span>Ver mais</span>
          </button>
        </div>

        {/* Separador */}
        <div className="-mx-5 mt-6">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Produtos */}
        <div className="">
          <div className="flex justify-between items-center mb-4 mt-6">
            <h3 className="font-semibold">Produtos</h3>
            <button className="text-white text-lg">
              <Plus width={16} height={16} />
            </button>
          </div>
          <ul className="text-sm space-y-3">
            <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Seguro automóvel
              </span>
              <span className="text-right">R$ 185,90/mês</span>
              <button>
                <Image
                  src={productsLinsIcon}
                  alt="Abrir"
                  width={16}
                  height={16}
                />
              </button>
            </li>

            <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Seguro Residencial
              </span>
              <span className="text-right">R$ 89,90/mês</span>
              <button>
                <Image
                  src={productsLinsIcon}
                  alt="Abrir"
                  width={16}
                  height={16}
                />
              </button>
            </li>

            <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                Seguro Viagem
              </span>
              <span className="text-right">R$ 230,00/mês</span>
              <button>
                <Image
                  src={productsLinsIcon}
                  alt="Abrir"
                  width={16}
                  height={16}
                />
              </button>
            </li>
          </ul>
        </div>

        {/* Separador */}
        <div className="-mx-5 mt-6">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Perfil */}
        <div className="mb-4">
          <h3 className="font-semibold mb-6">Perfil</h3>
          <div className="flex flex-wrap gap-4">
            {["Família com filhos", "Profissional liberal", "Investidor"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-[#1876d2] text-xs px-3 py-1 rounded-full text-white"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Separador */}
        <div className="-mx-5 mt-6">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Frases captadas */}
        <div className="mb-4">
          <h3 className="font-semibold mb-4">Frases captadas</h3>
          <div className="bg-[#1f2937] text-sm p-3 rounded-lg mb-2">
            <span className="font-extralight">
              “Estava procurando um seguro de vida mais completo para minha
              família”
            </span>
            <p className="text-xs text-white/50 mt-2 opacity-60">
              Atendimento do dia 12/05/2025
            </p>
          </div>
          <div className="bg-[#1f2937] text-sm p-3 rounded-lg mb-2">
            <span className="font-extralight">
              “O valor do meu seguro auto está muito caro comparado com outras
              empresas”
            </span>
            <p className="text-xs text-white/50 mt-2 opacity-60">
              Atendimento do dia 12/05/2025
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="-mx-5 mt-6">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Ações no app */}
        <div>
          <h3 className="font-semibold mb-4">Ações no app</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <span className="text-white/50 text-xs">45 min atrás</span>
              <br />
              <span>Consultou página de planos de saúde</span>
              <br />
              <span className="text-white/50 text-xs">
                Tempo na página 3min e 42 seg
              </span>
            </li>
            <li>
              <span className="text-white/50 text-xs">1 dia atrás</span>
              <br />
              <span>Iniciou simulação de seguro auto</span>
              <br />
              <span className="text-white/50 text-xs">
                Tempo na página 5min e 22 seg
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoPanel;
