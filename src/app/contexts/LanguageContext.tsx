import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'uz';

interface Translations {
  nav: {
    features: string;
    pricing: string;
    faq: string;
    login: string;
  };
  hero: {
    title: string;
    subtitle: string;
    getStarted: string;
    viewDemo: string;
    trustBadge1: string;
    trustBadge2: string;
  };
  problem: {
    title: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  solution: {
    title: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    feature5Title: string;
    feature5Desc: string;
    feature6Title: string;
    feature6Desc: string;
  };
  howItWorks: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  analytics: {
    title: string;
    subtitle: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    starter: string;
    starterPrice: string;
    business: string;
    businessPrice: string;
    premium: string;
    premiumPrice: string;
    popular: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    feature6: string;
    feature7: string;
    feature8: string;
    feature9: string;
    feature10: string;
    feature11: string;
    feature12: string;
    getStarted: string;
  };
  testimonials: {
    title: string;
    testimonial1Name: string;
    testimonial1Restaurant: string;
    testimonial1Text: string;
    testimonial2Name: string;
    testimonial2Restaurant: string;
    testimonial2Text: string;
    testimonial3Name: string;
    testimonial3Restaurant: string;
    testimonial3Text: string;
  };
  faq: {
    title: string;
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
    question3: string;
    answer3: string;
    question4: string;
    answer4: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
    product: string;
    features: string;
    pricing: string;
    demo: string;
    company: string;
    about: string;
    contact: string;
    blog: string;
    support: string;
    help: string;
    docs: string;
    rights: string;
    terms: string;
    privacy: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Login',
    },
    hero: {
      title: 'Transform Your Restaurant with Smart QR Menu',
      subtitle: 'Create, manage and track your digital menu with real-time analytics.',
      getStarted: 'Get Started',
      viewDemo: 'View Demo',
      trustBadge1: '500+ Restaurants',
      trustBadge2: '50K+ Daily Scans',
    },
    problem: {
      title: 'Why Traditional Menus Are Outdated?',
      card1Title: 'Printing Costs',
      card1Desc: 'Expensive to print and update regularly',
      card2Title: 'Hard to Update',
      card2Desc: 'Cannot change prices instantly',
      card3Title: 'No Analytics',
      card3Desc: 'No data on customer behavior',
    },
    solution: {
      title: 'All-in-One QR Menu Solution',
      feature1Title: 'QR Code Auto Generation',
      feature1Desc: 'Instantly generate unique QR codes for your restaurant',
      feature2Title: 'Beautiful Digital Menu',
      feature2Desc: 'Stunning menu design that works on all devices',
      feature3Title: 'Full Admin Dashboard',
      feature3Desc: 'Manage everything from one powerful interface',
      feature4Title: 'Product & Category Management',
      feature4Desc: 'Easily organize and update your menu items',
      feature5Title: 'Advanced Analytics',
      feature5Desc: 'Track daily, monthly, and yearly scan data',
      feature6Title: 'Multi-language Support',
      feature6Desc: 'Serve customers in their preferred language',
    },
    howItWorks: {
      title: 'How It Works',
      step1Title: 'Create Account',
      step1Desc: 'Sign up in less than 2 minutes',
      step2Title: 'Add Menu Items',
      step2Desc: 'Upload your products with photos',
      step3Title: 'Generate QR & Launch',
      step3Desc: 'Print QR code and start receiving customers',
    },
    analytics: {
      title: 'Powerful Analytics Dashboard',
      subtitle: 'Track every interaction with your digital menu',
      feature1: 'Daily scan tracking',
      feature2: 'Monthly reports',
      feature3: 'Yearly growth insights',
      feature4: 'Export data anytime',
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the perfect plan for your business',
      monthly: '/month',
      starter: 'Starter',
      starterPrice: '$9',
      business: 'Business',
      businessPrice: '$19',
      premium: 'Premium',
      premiumPrice: '$39',
      popular: 'Most Popular',
      feature1: '1 Restaurant',
      feature2: 'Unlimited Menu Items',
      feature3: 'QR Generation',
      feature4: 'Basic Analytics',
      feature5: '3 Restaurants',
      feature6: 'Advanced Analytics',
      feature7: 'Multi-language',
      feature8: 'Priority Support',
      feature9: 'Unlimited Restaurants',
      feature10: 'Full Analytics Dashboard',
      feature11: 'Custom Branding',
      feature12: 'API Access',
      getStarted: 'Get Started',
    },
    testimonials: {
      title: 'Loved by Restaurant Owners',
      testimonial1Name: 'Sarah Johnson',
      testimonial1Restaurant: 'The Garden Bistro',
      testimonial1Text: 'Smart QR Menu transformed our customer experience. We can update prices instantly and the analytics are incredible!',
      testimonial2Name: 'Michael Chen',
      testimonial2Restaurant: 'Dragon Wok',
      testimonial2Text: 'No more printing costs! Our customers love the digital menu and we love the insights we get from the analytics.',
      testimonial3Name: 'Elena Rodriguez',
      testimonial3Restaurant: 'Casa Mexicana',
      testimonial3Text: 'The multi-language feature is perfect for our international customers. Setup was incredibly easy!',
    },
    faq: {
      title: 'Frequently Asked Questions',
      question1: 'How does QR menu work?',
      answer1: 'Customers scan your QR code with their phone camera, which opens your digital menu in their browser. No app download required!',
      question2: 'Can I update my menu anytime?',
      answer2: 'Yes! You can update prices, add new items, or remove products instantly from your admin dashboard. Changes appear immediately.',
      question3: 'Do customers need to download an app?',
      answer3: 'No! The digital menu works directly in any web browser. Customers simply scan and view.',
      question4: 'Can I track how many people view my menu?',
      answer4: 'Absolutely! You get detailed analytics showing daily, monthly, and yearly scan statistics with easy-to-read charts.',
    },
    cta: {
      title: 'Ready to Go Digital?',
      subtitle: 'Join hundreds of restaurants using Smart QR Menu',
      button: 'Start Free Trial',
    },
    footer: {
      tagline: 'Modern QR menu solution for restaurants',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      demo: 'Demo',
      company: 'Company',
      about: 'About',
      contact: 'Contact',
      blog: 'Blog',
      support: 'Support',
      help: 'Help Center',
      docs: 'Documentation',
      rights: 'All rights reserved.',
      terms: 'Terms',
      privacy: 'Privacy',
    },
  },
  ru: {
    nav: {
      features: 'Функции',
      pricing: 'Цены',
      faq: 'Вопросы',
      login: 'Войти',
    },
    hero: {
      title: 'Трансформируйте Ваш Ресторан с Smart QR Menu',
      subtitle: 'Создавайте, управляйте и отслеживайте цифровое меню с аналитикой в реальном времени.',
      getStarted: 'Начать',
      viewDemo: 'Демо',
      trustBadge1: '500+ Ресторанов',
      trustBadge2: '50К+ Сканирований в День',
    },
    problem: {
      title: 'Почему Традиционные Меню Устарели?',
      card1Title: 'Затраты на Печать',
      card1Desc: 'Дорого печатать и регулярно обновлять',
      card2Title: 'Сложно Обновлять',
      card2Desc: 'Невозможно мгновенно изменить цены',
      card3Title: 'Нет Аналитики',
      card3Desc: 'Нет данных о поведении клиентов',
    },
    solution: {
      title: 'Универсальное QR Меню Решение',
      feature1Title: 'Авто-генерация QR Кодов',
      feature1Desc: 'Мгновенно создавайте уникальные QR коды для вашего ресторана',
      feature2Title: 'Красивое Цифровое Меню',
      feature2Desc: 'Потрясающий дизайн меню на всех устройствах',
      feature3Title: 'Полная Админ Панель',
      feature3Desc: 'Управляйте всем из одного интерфейса',
      feature4Title: 'Управление Продуктами',
      feature4Desc: 'Легко организуйте и обновляйте меню',
      feature5Title: 'Продвинутая Аналитика',
      feature5Desc: 'Отслеживайте данные за день, месяц и год',
      feature6Title: 'Мультиязычность',
      feature6Desc: 'Обслуживайте клиентов на их языке',
    },
    howItWorks: {
      title: 'Как Это Работает',
      step1Title: 'Создайте Аккаунт',
      step1Desc: 'Регистрация за 2 минуты',
      step2Title: 'Добавьте Блюда',
      step2Desc: 'Загрузите продукты с фото',
      step3Title: 'Генерируйте QR',
      step3Desc: 'Распечатайте QR код и начните работу',
    },
    analytics: {
      title: 'Мощная Аналитическая Панель',
      subtitle: 'Отслеживайте каждое взаимодействие с цифровым меню',
      feature1: 'Ежедневное отслеживание',
      feature2: 'Месячные отчеты',
      feature3: 'Годовая статистика',
      feature4: 'Экспорт данных',
    },
    pricing: {
      title: 'Простые и Прозрачные Цены',
      subtitle: 'Выберите идеальный план для вашего бизнеса',
      monthly: '/мес',
      starter: 'Стартовый',
      starterPrice: '$9',
      business: 'Бизнес',
      businessPrice: '$19',
      premium: 'Премиум',
      premiumPrice: '$39',
      popular: 'Популярный',
      feature1: '1 Ресторан',
      feature2: 'Безлимит блюд',
      feature3: 'Генерация QR',
      feature4: 'Базовая аналитика',
      feature5: '3 Ресторана',
      feature6: 'Продвинутая аналитика',
      feature7: 'Мультиязычность',
      feature8: 'Приоритет поддержки',
      feature9: 'Безлимит ресторанов',
      feature10: 'Полная аналитика',
      feature11: 'Свой брендинг',
      feature12: 'API доступ',
      getStarted: 'Начать',
    },
    testimonials: {
      title: 'Любимы Владельцами Ресторанов',
      testimonial1Name: 'Сара Джонсон',
      testimonial1Restaurant: 'The Garden Bistro',
      testimonial1Text: 'Smart QR Menu преобразовало опыт наших клиентов. Мы можем мгновенно обновлять цены, а аналитика невероятная!',
      testimonial2Name: 'Михаил Чен',
      testimonial2Restaurant: 'Dragon Wok',
      testimonial2Text: 'Больше никаких расходов на печать! Нашим клиентам нравится цифровое меню, а нам - аналитика.',
      testimonial3Name: 'Елена Родригес',
      testimonial3Restaurant: 'Casa Mexicana',
      testimonial3Text: 'Мультиязычная функция идеальна для наших международных клиентов. Настройка была невероятно простой!',
    },
    faq: {
      title: 'Часто Задаваемые Вопросы',
      question1: 'Как работает QR меню?',
      answer1: 'Клиенты сканируют ваш QR код камерой телефона, что открывает цифровое меню в браузере. Скачивать приложение не нужно!',
      question2: 'Могу ли я обновлять меню в любое время?',
      answer2: 'Да! Вы можете мгновенно обновлять цены, добавлять новые блюда или удалять продукты через панель администратора. Изменения появляются сразу.',
      question3: 'Нужно ли клиентам скачивать приложение?',
      answer3: 'Нет! Цифровое меню работает в любом браузере. Клиенты просто сканируют и смотрят.',
      question4: 'Могу ли я отслеживать, сколько людей смотрят меню?',
      answer4: 'Абсолютно! Вы получаете детальную аналитику с ежедневной, месячной и годовой статистикой сканирований с удобными графиками.',
    },
    cta: {
      title: 'Готовы Стать Цифровыми?',
      subtitle: 'Присоединяйтесь к сотням ресторанов, использующих Smart QR Menu',
      button: 'Начать Бесплатно',
    },
    footer: {
      tagline: 'Современное QR меню для ресторанов',
      product: 'Продукт',
      features: 'Функции',
      pricing: 'Цены',
      demo: 'Демо',
      company: 'Компания',
      about: 'О нас',
      contact: 'Контакты',
      blog: 'Блог',
      support: 'Поддержка',
      help: 'Помощь',
      docs: 'Документация',
      rights: 'Все права защищены.',
      terms: 'Условия',
      privacy: 'Конфиденциальность',
    },
  },
  uz: {
    nav: {
      features: 'Xususiyatlar',
      pricing: 'Narxlar',
      faq: 'Savollar',
      login: 'Kirish',
    },
    hero: {
      title: "Restoraningizni Smart QR Menu bilan O'zgartiring",
      subtitle: "Raqamli menyuni yarating, boshqaring va real vaqtda tahlil qiling.",
      getStarted: 'Boshlash',
      viewDemo: 'Demo',
      trustBadge1: '500+ Restoran',
      trustBadge2: '50K+ Kunlik Skan',
    },
    problem: {
      title: "Nega An'anaviy Menyular Eskirgan?",
      card1Title: 'Chop Etish Xarajatlari',
      card1Desc: "Chop etish va yangilash qimmat",
      card2Title: 'Yangilash Qiyin',
      card2Desc: "Narxlarni darhol o'zgartirib bo'lmaydi",
      card3Title: 'Tahlil Yo\'q',
      card3Desc: "Mijozlar xatti-harakati to'g'risida ma'lumot yo'q",
    },
    solution: {
      title: 'Hammasi Bir Joyda QR Menyu Yechimi',
      feature1Title: 'QR Kod Avto-generatsiya',
      feature1Desc: "Restoraningiz uchun noyob QR kodlarni yarating",
      feature2Title: 'Chiroyli Raqamli Menyu',
      feature2Desc: "Barcha qurilmalarda ajoyib menyu dizayni",
      feature3Title: "To'liq Admin Paneli",
      feature3Desc: "Hamma narsani bir joydan boshqaring",
      feature4Title: 'Mahsulot Boshqaruvi',
      feature4Desc: "Menyuni osongina tartibga soling va yangilang",
      feature5Title: 'Ilg\'or Tahlil',
      feature5Desc: "Kunlik, oylik va yillik ma'lumotlarni kuzating",
      feature6Title: 'Ko\'p Tillilik',
      feature6Desc: "Mijozlarga o'z tillarida xizmat qiling",
    },
    howItWorks: {
      title: 'Qanday Ishlaydi',
      step1Title: 'Akkaunt Yarating',
      step1Desc: '2 daqiqada ro\'yxatdan o\'ting',
      step2Title: 'Taomlar Qo\'shing',
      step2Desc: 'Mahsulotlarni rasmlar bilan yuklang',
      step3Title: 'QR Yarating',
      step3Desc: "QR kodni chop eting va mijozlarni qabul qiling",
    },
    analytics: {
      title: 'Kuchli Tahlil Paneli',
      subtitle: "Raqamli menyu bilan har bir o'zaro ta'sirni kuzating",
      feature1: 'Kunlik kuzatuv',
      feature2: 'Oylik hisobotlar',
      feature3: "Yillik o'sish ma'lumotlari",
      feature4: "Ma'lumotlarni eksport qilish",
    },
    pricing: {
      title: 'Oddiy va Shaffof Narxlar',
      subtitle: "Biznesingiz uchun ideal rejani tanlang",
      monthly: '/oy',
      starter: 'Boshlang\'ich',
      starterPrice: '$9',
      business: 'Biznes',
      businessPrice: '$19',
      premium: 'Premium',
      premiumPrice: '$39',
      popular: 'Eng Mashhur',
      feature1: '1 Restoran',
      feature2: 'Cheksiz taomlar',
      feature3: 'QR generatsiya',
      feature4: 'Asosiy tahlil',
      feature5: '3 Restoran',
      feature6: 'Ilg\'or tahlil',
      feature7: 'Ko\'p tillilik',
      feature8: "Ustuvor qo'llab-quvvatlash",
      feature9: 'Cheksiz restoranlar',
      feature10: "To'liq tahlil paneli",
      feature11: 'Maxsus brending',
      feature12: 'API kirish',
      getStarted: 'Boshlash',
    },
    testimonials: {
      title: 'Restoran Egalari Tomonidan Sevilgan',
      testimonial1Name: 'Sara Johnson',
      testimonial1Restaurant: 'The Garden Bistro',
      testimonial1Text: "Smart QR Menu mijozlarimiz tajribasini o'zgartirdi. Narxlarni darhol yangilashimiz mumkin va tahlil ajoyib!",
      testimonial2Name: 'Mixail Chen',
      testimonial2Restaurant: 'Dragon Wok',
      testimonial2Text: "Endi chop etish xarajatlari yo'q! Mijozlarimiz raqamli menyuni yaxshi ko'radilar va biz tahlilni!",
      testimonial3Name: 'Elena Rodriges',
      testimonial3Restaurant: 'Casa Mexicana',
      testimonial3Text: "Ko'p tillilik xalqaro mijozlarimiz uchun mukammal. Sozlash juda oson edi!",
    },
    faq: {
      title: "Ko'p So'raladigan Savollar",
      question1: 'QR menyu qanday ishlaydi?',
      answer1: "Mijozlar telefon kamerasi bilan QR kodingizni skanerlaydilar, bu ularning brauzerida raqamli menyuni ochadi. Ilova yuklash kerak emas!",
      question2: "Menyuni istalgan vaqtda yangilasam bo'ladimi?",
      answer2: "Ha! Siz admin panelingizdan narxlarni yangilashingiz, yangi taomlar qo'shishingiz yoki mahsulotlarni o'chirishingiz mumkin. O'zgarishlar darhol ko'rinadi.",
      question3: 'Mijozlar ilova yuklab olishlari kerakmi?',
      answer3: "Yo'q! Raqamli menyu istalgan brauzerda ishlaydi. Mijozlar shunchaki skanerlab ko'radilar.",
      question4: "Menyuni qancha odam ko'rganini kuzatishim mumkinmi?",
      answer4: "Albatta! Siz qulay grafiklar bilan kunlik, oylik va yillik skanerlash statistikasini ko'rsatadigan batafsil tahlilga ega bo'lasiz.",
    },
    cta: {
      title: 'Raqamlashuvga Tayyormisiz?',
      subtitle: "Smart QR Menu'dan foydalanadigan yuzlab restoranlarga qo'shiling",
      button: 'Bepul Boshlash',
    },
    footer: {
      tagline: 'Restoranlar uchun zamonaviy QR menyu yechimi',
      product: 'Mahsulot',
      features: 'Xususiyatlar',
      pricing: 'Narxlar',
      demo: 'Demo',
      company: 'Kompaniya',
      about: 'Biz haqimizda',
      contact: 'Aloqa',
      blog: 'Blog',
      support: "Qo'llab-quvvatlash",
      help: 'Yordam markazi',
      docs: 'Hujjatlar',
      rights: "Barcha huquqlar himoyalangan.",
      terms: 'Shartlar',
      privacy: 'Maxfiylik',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
