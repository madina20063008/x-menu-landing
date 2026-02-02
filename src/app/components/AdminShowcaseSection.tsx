import { useLanguage } from '@/app/contexts/LanguageContext';
import { LayoutDashboard, Plus, BarChart3, QrCode as QrCodeIcon } from 'lucide-react';

export function AdminShowcaseSection() {
  const { t } = useLanguage();

  const adminFeatures = [
    {
      icon: LayoutDashboard,
      title: 'Menu Management',
      color: 'bg-blue-500',
    },
    {
      icon: Plus,
      title: 'Add/Edit Products',
      color: 'bg-green-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      color: 'bg-purple-500',
    },
    {
      icon: QrCodeIcon,
      title: 'QR Generator',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Powerful Admin Dashboard
              </h2>
              <p className="text-xl text-gray-300">
                Manage your entire restaurant menu from one beautiful interface
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {adminFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-3`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-xl">Admin Dashboard</h3>
                    <p className="text-blue-100 text-sm">Smart QR Menu</p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <img
                src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY5OTUyNzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Admin Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl">
              <p className="text-white text-sm font-medium">Active Menus</p>
              <p className="text-white text-3xl font-bold">24</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
