const InsuranceUpgradePanel = () => {
  return (
    <div className="bg-[#111827] rounded-xl p-6 text-white flex flex-col justify-between h-full">
      {/* Título e descrição */}
      <div>
        <h3 className="text-xl font-bold leading-tight tracking-[-0.015em]">
          Upgrade do seguro residencial
        </h3>
        <p className="text-sm font-normal text-white mt-3 leading-tight tracking-tighter">
          Plano Completo com proteção contra danos elétricos e assistência 24h
        </p>
      </div>

      {/* Preço e botão */}
      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-xs text-white/50 mb-1">Por apenas:</p>
          <p className="text-xl font-semibold text-white">R$ 127,50/mês</p>
        </div>

        <button className="text-xs text-white border-[2px] border-solid border-white/50 px-4 py-3 rounded-full font-semibold hover:bg-white hover:text-[#111827] transition">
          Simular
        </button>
      </div>
    </div>
  );
};

export default InsuranceUpgradePanel;
