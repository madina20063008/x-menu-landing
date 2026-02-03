import { useLanguage } from '@/app/contexts/LanguageContext';
import { QrCode, Smartphone, LayoutDashboard, FolderTree, TrendingUp, Globe } from 'lucide-react';

export function SolutionSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: QrCode,
      title: t.solution.feature1Title,
      description: t.solution.feature1Desc,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Smartphone,
      title: t.solution.feature2Title,
      description: t.solution.feature2Desc,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: LayoutDashboard,
      title: t.solution.feature3Title,
      description: t.solution.feature3Desc,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FolderTree,
      title: t.solution.feature4Title,
      description: t.solution.feature4Desc,
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: TrendingUp,
      title: t.solution.feature5Title,
      description: t.solution.feature5Desc,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Globe,
      title: t.solution.feature6Title,
      description: t.solution.feature6Desc,
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.solution.title}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
