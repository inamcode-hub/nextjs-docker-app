
interface StatItem {
  number?: string;
  value?: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface ServerStatsSectionProps {
  stats: StatItem[];
}

export default function ServerStatsSection({ stats }: ServerStatsSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const displayValue = stat.number || stat.value;
          
          return (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{displayValue}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}