import { useLanguage } from '@/app/contexts/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Check } from 'lucide-react';

export function PricingSection() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.starter,
      price: t.pricing.starterPrice,
      popular: false,
      features: [
        t.pricing.feature1,
        t.pricing.feature2,
        t.pricing.feature3,
        t.pricing.feature4,
      ],
    },
    {
      name: t.pricing.business,
      price: t.pricing.businessPrice,
      popular: true,
      features: [
        t.pricing.feature5,
        t.pricing.feature2,
        t.pricing.feature6,
        t.pricing.feature7,
        t.pricing.feature8,
      ],
    },
    {
      name: t.pricing.premium,
      price: t.pricing.premiumPrice,
      popular: false,
      features: [
        t.pricing.feature9,
        t.pricing.feature2,
        t.pricing.feature10,
        t.pricing.feature11,
        t.pricing.feature12,
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-600">{t.pricing.subtitle}</p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'ring-4 ring-blue-600 shadow-2xl scale-105'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  {t.pricing.popular}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{t.pricing.monthly}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-lg rounded-2xl transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {t.pricing.getStarted}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
