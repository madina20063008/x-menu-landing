import { useLanguage } from '@/app/contexts/LanguageContext';
import { QrCode, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-12">

          {/* LOGO */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">Smart QR Menu</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-sm mx-auto md:mx-0">
              {t.footer.tagline}
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* PRODUCT */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              {t.footer.product}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t.footer.features}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">{t.footer.pricing}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.demo}</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.about}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.contact}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.blog}</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              {t.footer.support}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.help}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.docs}</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-3 sm:gap-4 justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2026 Smart QR Menu. {t.footer.rights}
          </p>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
