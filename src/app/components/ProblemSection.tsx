import { useLanguage } from '@/app/contexts/LanguageContext';
import { DollarSign, RefreshCcw, BarChart3 } from 'lucide-react';

export function ProblemSection() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: DollarSign,
      title: t.problem.card1Title,
      description: t.problem.card1Desc,
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: RefreshCcw,
      title: t.problem.card2Title,
      description: t.problem.card2Desc,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: BarChart3,
      title: t.problem.card3Title,
      description: t.problem.card3Desc,
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.problem.title}
          </h2>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <problem.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
