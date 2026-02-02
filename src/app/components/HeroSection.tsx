import { Button } from '@/app/components/ui/button';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { ArrowRight, Users, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-blue-600/30">
                {t.hero.getStarted}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-2xl border-2">
                {t.hero.viewDemo}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.hero.trustBadge1}</p>
                  <p className="text-sm text-gray-500">Using our platform</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.hero.trustBadge2}</p>
                  <p className="text-sm text-gray-500">And growing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Phone Mockup */}
              <div className="relative mx-auto max-w-sm">
                <div className="bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-gray-800">
                  <div className="bg-gray-900 h-6 rounded-t-3xl mb-2"></div>
                  <img
                    src="https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcmVzdGF1cmFudCUyMG1lbnUlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDAzNzgyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Digital Menu"
                    className="rounded-2xl w-full aspect-[9/16] object-cover"
                  />
                </div>
              </div>

              {/* Floating QR Code */}
              <div className="absolute -left-8 top-12 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1569908420024-c8f709b75700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzY2FufGVufDF8fHx8MTc3MDAzNjExMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="QR Code"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <p className="text-xs text-center mt-2 font-medium text-gray-600">Scan Me</p>
              </div>

              {/* Analytics Card */}
              <div className="absolute -right-8 bottom-24 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Today</p>
                    <p className="text-2xl font-bold text-gray-900">245</p>
                    <p className="text-xs text-green-600 font-medium">↑ 12% vs yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
