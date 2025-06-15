import Bullet from "../ui/Bullet";

const IaSuggestionPanel = () => {
  return (
    <div className="rounded-3xl p-6 bg-gradient-to-br from-[#1f2635] to-[#1b2230] text-white h-full flex flex-col gap-6 border-1 border-white/10 shadow-inner">
      {/* Título e tabs */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Sugestão da IA</h2>
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 h-[56px]">
          <span className="text-white/70 text-xs font-medium px-3 py-3 rounded-full bg-[#393e4e]">
            NBX
          </span>
          <span className="text-white/70 text-xs font-medium px-3 py-3 rounded-full bg-[#393e4e]">
            NBA
          </span>
          <span className="bg-[#1876D2] text-white text-xs font-medium px-3 py-3 rounded-full shadow-[0_0_10px_#1876D2]">
            NBO
          </span>
        </div>
      </div>

      {/* Box de oferta */}
      <div className="bg-gradient-to-br from-[#252d3d] to-[#1e2432] rounded-2xl p-5 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold">Oferta recomendada</h3>
          <p className="text-sm text-gray-300 mt-1">
            Seguro de vida individual com cobertura por morte e doenças graves
          </p>
        </div>

        <div className="flex justify-start gap-12 items-end pt-4 text-sm">
          <div>
            <p className="text-white/50">Valor recomendado</p>
            <p className="text-white font-semibold text-lg">R$ 127,50/mês</p>
          </div>
          <div>
            <p className="text-white/50">Probabilidade de conversão</p>
            <p className="text-[#00DC04] font-bold text-lg">78%</p>
          </div>
        </div>

        {/* Separador */}
        <div className="-mx-5">
          <hr className="w-full border-t border-gray-700 my-3 opacity-50" />
        </div>

        {/* Reason Why */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Reason Why</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="flex gap-2 items-center">
              <Bullet />
              Cliente tem perfil "profissional liberal" compatível com produto
            </li>
            <li className="flex gap-2 items-center">
              <Bullet />
              Idade (35 anos) em faixa de preço competitivo
            </li>
            <li className="flex gap-2 items-center">
              <Bullet />
              Cliente já demonstrou preocupação com família em atendimentos
            </li>
            <li className="flex gap-2 items-center">
              <Bullet />
              <span> Produto complementa portfólio atual sem sobreposição</span>
            </li>
          </ul>
        </div>

        <div>
          <button className="text-xs text-white bg-[#1876D2] w-[186px] h-[40px] rounded-full font-semibold transition hover:bg-white hover:text-[#0d223a] shadow-[0_0_10px_#1876D2]">
            Simular conversa com IA
          </button>
        </div>
      </div>
    </div>
  );
};

export default IaSuggestionPanel;
