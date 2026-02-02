import { useLanguage } from '@/app/contexts/LanguageContext';
import { Calendar, FileText, TrendingUp, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Mon', scans: 120 },
  { name: 'Tue', scans: 198 },
  { name: 'Wed', scans: 245 },
  { name: 'Thu', scans: 220 },
  { name: 'Fri', scans: 310 },
  { name: 'Sat', scans: 385 },
  { name: 'Sun', scans: 350 },
];

export function AnalyticsSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Calendar,
      title: t.analytics.feature1,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: FileText,
      title: t.analytics.feature2,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: t.analytics.feature3,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Download,
      title: t.analytics.feature4,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.analytics.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.analytics.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Chart */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly Scans</h3>
              <p className="text-gray-600">Last 7 days performance</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-2xl font-bold text-gray-900">1,828</p>
                <p className="text-xs text-green-600">↑ 12%</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Avg/Day</p>
                <p className="text-2xl font-bold text-gray-900">261</p>
                <p className="text-xs text-green-600">↑ 8%</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Peak</p>
                <p className="text-2xl font-bold text-gray-900">385</p>
                <p className="text-xs text-blue-600">Saturday</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="scans"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ fill: '#2563eb', r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
