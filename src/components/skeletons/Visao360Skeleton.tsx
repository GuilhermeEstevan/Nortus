const Visao360Skeleton = () => {
  return (
    <div className="p-4 2xl:p-6 min-h-screen animate-pulse">
      <div className="max-w-[1680px] mx-auto flex flex-col 2xl:flex-row gap-6">
        {/* Painel lateral */}
        <div className="w-full 2xl:w-[365px] shrink-0 space-y-4">
          <div className="h-[1070px] bg-gray-700/30 rounded-xl" />{" "}
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 2xl:grid xl:grid-cols-3 w-full">
            <div className="2xl:col-span-2 h-[540px] bg-gray-700/30 rounded-xl" />
            <div className="h-[540px] flex flex-col gap-6">
              <div className="flex-1 bg-gray-700/30 rounded-xl" />
              <div className="flex-1 bg-gray-700/30 rounded-xl" />
            </div>
          </div>

          {/* Classificação inteligente */}
          <div className="h-[350px] bg-gray-700/30 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Visao360Skeleton;
