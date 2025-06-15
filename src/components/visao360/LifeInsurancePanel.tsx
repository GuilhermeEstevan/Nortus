const LifeInsurancePanel = () => {
  return (
    <div
      className="rounded-2xl text-white p-6 flex flex-col justify-between h-full border border-white/10"
      style={{
        background:
          "linear-gradient(to bottom, #2A97D4 0%, #33ABD6 50%, #3AB7D7 100%)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Título */}
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase opacity-90">
          Seguro de vida
        </p>
        <h3 className="text-lg font-bold leading-snug">individual</h3>
        <p className="text-sm  font-normal opacity-90 leading-tight tracking-tighter mt-2">
          Proteção financeira completa com cobertura por morte e doenças graves
        </p>
      </div>

      {/* Preço + botão */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-xs opacity-80 mb-1">Por apenas:</p>
          <p className="text-lg font-semibold">R$ 127,50/mês</p>
        </div>
        <button className="text-sm text-white bg-[#1876D2] px-4 py-2 rounded-full font-medium transition hover:bg-white hover:text-cyan-800 shadow-[0_0_10px_#1876D2]">
          Simular
        </button>
      </div>
    </div>
  );
};

export default LifeInsurancePanel;
