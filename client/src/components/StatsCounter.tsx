interface StatItem {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  bgColor?: string;
  textColor?: string;
}

export default function StatsCounter({
  stats,
  bgColor = 'bg-[#1E3A2E]',
  textColor = 'text-white',
}: StatsCounterProps) {
  return (
    <section className={`${bgColor} ${textColor} py-16`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 text-center`}>
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold text-[#b68a3c] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
