import { useLanguage } from '@/app/contexts/LanguageContext';
import {
  LayoutDashboard,
  Plus,
  BarChart3,
  QrCode as QrCodeIcon,
} from 'lucide-react';

export function AdminShowcaseSection() {
  const { t } = useLanguage();

  const adminFeatures = [
    { icon: LayoutDashboard, title: 'Menu Management', color: 'bg-blue-500' },
    { icon: Plus, title: 'Add/Edit Products', color: 'bg-green-500' },
    { icon: BarChart3, title: 'Analytics Dashboard', color: 'bg-purple-500' },
    { icon: QrCodeIcon, title: 'QR Generator', color: 'bg-indigo-500' },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Powerful Admin Dashboard
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                Manage your entire restaurant menu from one beautiful interface
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {adminFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 ${feature.color} rounded-xl flex items-center justify-center mb-3`}
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-none">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">
                      Admin Dashboard
                    </h3>
                    <p className="text-blue-100 text-xs sm:text-sm">
                      Smart QR Menu
                    </p>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full" />
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Admin Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-3 sm:p-4 shadow-xl">
              <p className="text-white text-xs sm:text-sm font-medium">
                Active Menus
              </p>
              <p className="text-white text-2xl sm:text-3xl font-bold">
                24
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
