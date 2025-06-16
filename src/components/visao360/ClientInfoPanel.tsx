"use client";

import phoneIcon from "@/public/icons/phone.png";
import emailIcon from "@/public/icons/email.png";
import dotsIcon from "@/public/icons/dots.png";
import productsLinsIcon from "@/public/icons/productsLink.png";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatPrice } from "@/utils/format";
import { getRelativeTimeFromNow } from "@/utils/time";
import { randomDuration } from "@/utils/randomDuration";
import { Client } from "@/types/client";

interface Props {
  clientData: Client | null;
}

const ClientInfoPanel = ({ clientData }: Props) => {
  // Utilizando tick para atualizar o timestamp a cada minuto
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full rounded-xl px-0 ">
      <div className="bg-[#111827] rounded-xl p-4 px-5 h-full border-1 border-white/10 text-white ">
        <div className="text-center mb-8 mt-6">
          <h2 className="text-lg font-bold">{clientData?.name}</h2>
        </div>

        {/* Ações rápidas */}
        <div className="flex justify-around text-sm text-blue-300 ">
          <button className="group flex flex-col items-center gap-2">
            <Image
              src={phoneIcon}
              alt="Telefone"
              width={24}
              height={24}
              className="group-hover:animate-[wiggle_0.5s_ease-in-out] w-6 h-6"
            />
            <span>Telefonar</span>
          </button>
          <button className="group flex flex-col items-center gap-2">
            <Image
              src={emailIcon}
              alt="e-mail"
              width={24}
              height={24}
              className="group-hover:animate-[wiggle_0.5s_ease-in-out] w-6 h-6"
            />
            <span>Enviar e-mail</span>
          </button>
          <button className="group flex flex-col items-center gap-2">
            <Image
              src={dotsIcon}
              alt="Telefone"
              width={24}
              height={24}
              className="group-hover:animate-[wiggle_0.5s_ease-in-out] w-6 h-6"
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
            {clientData?.products.map((product, index) => (
              <li
                key={index}
                className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 ${
                  product.status === "inativo" ? "text-white/50" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      product.status === "ativo"
                        ? "bg-[#00DC04]"
                        : "bg-[#DC3300]"
                    }`}
                  />
                  {product.name}
                </span>
                <span className="text-right">
                  {formatPrice(product.price)}/mês
                </span>
                <button>
                  <Image
                    src={productsLinsIcon}
                    alt="Abrir"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </button>
              </li>
            ))}
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
            {clientData?.profileTags.map((tag) => (
              <span
                key={tag}
                className="bg-[#1876d2] text-xs px-3 py-1 rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="-mx-5 mt-6">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Frases captadas */}
        <div className="mb-4">
          <h3 className="font-semibold mb-4">Frases captadas</h3>
          {clientData?.capturedPhrases.map((phrase, index) => (
            <div
              key={index}
              className="bg-[#1f2937] text-sm p-3 rounded-lg mb-2"
            >
              <span className="font-extralight">{phrase}</span>
              <p className="text-xs text-white/50 mt-2 opacity-60">
                Atendimento do dia 12/05/2025
              </p>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="-mx-5 mt-6">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Ações no app */}
        <div>
          <h3 className="font-semibold mb-4">Ações no app</h3>

          <div className="max-h-[240px] overflow-y-auto pr-2 scrollbar">
            <ul className="text-sm text-gray-300 space-y-2">
              {clientData?.actions.map((action, index) => (
                <li key={index}>
                  <span className="text-white/50 text-xs">
                    {getRelativeTimeFromNow(action.timestamp)}
                  </span>
                  <br />
                  <span>{action.description}</span>
                  <br />
                  <span className="text-white/50 text-xs">
                    Tempo na página {randomDuration()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoPanel;
