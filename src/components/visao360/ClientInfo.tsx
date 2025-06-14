import phoneIcon from "@/public/icons/phone.png";
import emailIcon from "@/public/icons/email.png";
import dotsIcon from "@/public/icons/dots.png";
import productsLinsIcon from "@/public/icons/productsLink.png";
import { Plus } from "lucide-react";
import Image from "next/image";

const ClientInfoPanel = () => {
  return (
    <div className="bg-[#111827] rounded-xl p-2 ">
      <div className="bg-[#111827] rounded-xl p-4 h-auto  text-white">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold">Ricardo Leite</h2>
        </div>

        {/* Ações rápidas */}
        <div className="flex justify-around text-sm text-blue-300 ">
          <button className="flex flex-col items-center gap-2">
            <Image src={phoneIcon} alt="Telefone" width={24} height={24} />
            <span>Telefonar</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <Image src={emailIcon} alt="e-mail" width={24} height={24} />
            <span>Enviar e-mail</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <Image src={dotsIcon} alt="Telefone" width={24} height={24} />
            <span>Ver mais</span>
          </button>
        </div>

        {/* Separador */}
        <div className="-mx-6 mt-6">
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
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Seguro automóvel
              </span>
              <span className="text-right">R$ 185,90/mês</span>
              <button>
                <Image
                  src={productsLinsIcon}
                  alt="Telefone"
                  width={16}
                  height={16}
                />
              </button>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Seguro Residencial
              </span>
              <span className="text-right">R$ 89,90/mês</span>
              <button>
                <Image
                  src={productsLinsIcon}
                  alt="Telefone"
                  width={16}
                  height={16}
                />
              </button>
            </li>
            <li className="flex justify-between items-center text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Seguro Viagem
              </span>
              <span className="text-right">R$ 230,00/mês</span>
              <button>
                <Image
                  src={productsLinsIcon}
                  alt="Telefone"
                  width={16}
                  height={16}
                />
              </button>
            </li>
          </ul>
        </div>

        {/* Separador */}
        <div className="-mx-6 mt-6">
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
        <div className="-mx-6 mt-6">
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
            <p className="text-xs text-gray-400 mt-2 opacity-60">
              Atendimento do dia 12/05/2025
            </p>
          </div>
          <div className="bg-[#1f2937] text-sm p-3 rounded-lg mb-2">
            <span className="font-extralight">
              “O valor do meu seguro auto está muito caro comparado com outras
              empresas”
            </span>
            <p className="text-xs text-gray-400 mt-2 opacity-60">
              Atendimento do dia 12/05/2025
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="-mx-6 mt-6">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Ações no app */}
        <div>
          <h3 className="font-semibold mb-4">Ações no app</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <span className="text-gray-500 text-xs">45 min atrás</span>
              <br />
              <span>Consultou página de planos de saúde</span>
              <br />
              <span className="text-gray-500 text-xs">
                Tempo na página 3min e 42 seg
              </span>
            </li>
            <li>
              <span className="text-gray-500 text-xs">1 dia atrás</span>
              <br />
              <span>Iniciou simulação de seguro auto</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoPanel;
