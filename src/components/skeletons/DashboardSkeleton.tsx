export default function DashboardSkeleton() {
  return (
    <div className="p-6 min-h-screen animate-pulse">
      <div className="max-w-[1680px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Coluna da esquerda */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="h-[376px] bg-gray-700/30 rounded-xl" />
          <div className="h-[600px] bg-gray-700/30 rounded-xl" />
        </div>

        {/* Coluna da direita */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          {/* KPIs superiores */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[120px] bg-gray-700/30 rounded-xl" />
            <div className="h-[120px] bg-gray-700/30 rounded-xl" />
            <div className="h-[120px] bg-gray-700/30 rounded-xl" />
            <div className="h-[120px] bg-gray-700/30 rounded-xl" />
          </div>

          {/* Donut + Clusters */}
          <div className="h-[400px] bg-gray-700/30 rounded-xl" />

          {/* Workflows inteligentes */}
          <div className="h-[180px] bg-gray-700/30 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
