import { Button } from '@/app/components/ui/button';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { ArrowRight, Users, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          <div className="relative z-10 text-center lg:text-left">

            <div className="space-y-4 order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="block lg:hidden my-10">
              <div className="relative mx-auto max-w-xs">
                <div className="bg-white rounded-[2.5rem] shadow-2xl p-4 border-8 border-gray-800">
                  <div className="bg-gray-900 h-6 rounded-t-3xl mb-2" />
                  <img
                    src="https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Digital Menu"
                    className="rounded-2xl w-full aspect-[9/16] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 sm:py-6 text-base sm:text-lg rounded-2xl shadow-lg shadow-blue-600/30"
                >
                  {t.hero.getStarted}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-5 sm:py-6 text-base sm:text-lg rounded-2xl border-2"
                >
                  {t.hero.viewDemo}
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {t.hero.trustBadge1}
                    </p>
                    <p className="text-sm text-gray-500">Using our platform</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {t.hero.trustBadge2}
                    </p>
                    <p className="text-sm text-gray-500">And growing</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="relative mx-auto max-w-sm">
                <div className="bg-white rounded-[2.5rem] shadow-2xl p-4 border-8 border-gray-800">
                  <div className="bg-gray-900 h-6 rounded-t-3xl mb-2" />
                  <img
                    src="https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Digital Menu"
                    className="rounded-2xl w-full aspect-[9/16] object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-4 top-20 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1569908420024-c8f709b75700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="QR Code"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <p className="text-xs text-center mt-2 font-medium text-gray-600">
                  Scan Me
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
