import { useLanguage } from '../contexts/LanguageContext';
import { UserPlus, Upload, Rocket } from 'lucide-react';

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Upload,
      number: '02',
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Rocket,
      number: '03',
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.howItWorks.title}
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div
                  className={`absolute -top-5 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                >
                  {step.number}
                </div>

                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 mt-6`}
                >
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
