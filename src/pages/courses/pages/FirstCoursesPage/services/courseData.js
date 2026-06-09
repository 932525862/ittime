import images1 from '../../../../../assets/images/courses/courses-1.png'
import images2 from '../../../../../assets/images/courses/courses-2.png'
import images3 from '../../../../../assets/images/courses/courses-3.png'
import images4 from '../../../../../assets/images/courses/courses-4.png'
import images5 from '../../../../../assets/images/courses/courses-5.png'
import images6 from '../../../../../assets/images/courses/courses-6.png'

// Функция для извлечения числа месяцев из строки duration
const getDurationMonths = (duration) => {
  const match = duration.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

// Функция для расчета рассрочки
const calculateInstallment = (price, durationMonths) => {
  // Расчет полной стоимости курса
  const fullPrice = price * durationMonths;
  
  // Ежемесячный платеж в рассрочку (цена в месяц + 30%)
  const monthlyInstallment = Math.ceil(price * 1.3);
  
  // Общая сумма рассрочки
  const installmentTotal = monthlyInstallment * durationMonths;
  
  return {
    months: durationMonths,
    fullPrice: fullPrice,
    installmentMonthly: monthlyInstallment,
    installmentTotal: installmentTotal,
    // Добавляем описание условий рассрочки
    description: {
      ru: 'Оплата в рассрочку после завершения обучения',
      uz: 'To\'lovni o\'qishni tugatgandan so\'ng bo\'lib-bo\'lib to\'lash',
      en: 'Installment payment after completing the course'
    }
  };
};

export const courseData = [
  {
    id: 'frontend',
    image: images1,
    translations: {
      ru: {
        title: 'Front-end',
        description: 'Фронтенд веб-разработка. HTML, CSS, JavaScript, React и другие современные технологии.',
        duration: '6 месяцев',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      uz: {
        title: 'Front-end',
        description: 'Frontend veb-ishlab chiqish. HTML, CSS, JavaScript, React va boshqa zamonaviy texnologiyalar.',
        duration: '6 oy',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      kr: {
        title: 'Front-end',
        description: 'Фронтенд веб-дастурлаш. HTML, CSS, JavaScript, React ва бошқа замонавий технологиялар.',
        duration: '6 ой',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      en: {
        title: 'Front-end',
        description: 'Frontend web development. HTML, CSS, JavaScript, React and other modern technologies.',
        duration: '6 months',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      }
    }
  },
  {
    id: 'backend',
    image: images2,
    translations: {
      ru: {
        title: 'Back-end',
        description: 'Разработка серверной части. Node.js, Python, базы данных и создание API.',
        duration: '6 месяцев',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      uz: {
        title: 'Back-end',
        description: 'Server tomonini ishlab chiqish. Node.js, Python, ma\'lumotlar bazasi va API yaratish.',
        duration: '6 oy',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      kr: {
        title: 'Back-end',
        description: 'Сервер томонини ишлаб чиқиш. Node.js, Python, маълумотлар базаси ва API яратиш.',
        duration: '6 ой',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      en: {
        title: 'Back-end',
        description: 'Server-side development. Node.js, Python, databases and API creation.',
        duration: '6 months',
        price: 1200000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      }
    }
  },
  // {
  //   id: 'mobile',
  //   image: images3,
  //   translations: {
  //     ru: {
  //       title: 'Мобильная разработка',
  //       description: 'Разработка мобильных приложений. Современные приложения для платформ Android и iOS.',
  //       duration: '6 месяцев',
  //       price: 1200000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     uz: {
  //       title: 'Mobile dasturlash',
  //       description: 'Mobil ilovalarni ishlab chiqish. Android va iOS platformalari uchun zamonaviy ilovalar.',
  //       duration: '6 oy',
  //       price: 1200000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     kr: {
  //       title: 'Mobile Development',
  //       description: 'Мобил иловаларни ишлаб чиқиш. Android ва iOS платформалари учун замонавий иловалар.',
  //       duration: '6 ой',
  //       price: 1200000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     en: {
  //       title: 'Mobile Development',
  //       description: 'Mobile app development. Modern applications for Android and iOS platforms.',
  //       duration: '6 months',
  //       price: 1200000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     }
  //   }
  // },
  // {
  //   id: 'smm',
  //   image: images4,
  //   translations: {
  //     ru: {
  //       title: 'SMM',
  //       description: 'Маркетинг в социальных сетях. Стратегия, создание контента и работа с аудиторией.',
  //       duration: '3 месяца',
  //       price: 1500000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     uz: {
  //       title: 'SMM',
  //       description: 'Ijtimoiy tarmoqlarda marketing. Strategiya, kontent yaratish va auditoriya bilan ishlash.',
  //       duration: '3 oy',
  //       price: 1500000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     kr: {
  //       title: 'SMM',
  //       description: 'Ижтимоий тармоқларда маркетинг. Стратегия, контент яратиш ва аудитория билан ишлаш.',
  //       duration: '3 ой',
  //       price: 800000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     en: {
  //       title: 'SMM',
  //       description: 'Social Media Marketing. Strategy, content creation and audience engagement.',
  //       duration: '3 months',
  //       price: 1500000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     }
  //   }
  // },
  {
    id: 'design',
    image: images5,
    translations: {
      ru: {
        title: 'Дизайн',
        description: 'Основы UI/UX дизайна. Графический дизайн, создание интерфейсов для веб и мобильных приложений.',
        duration: '3 месяца',
        price: 1500000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      uz: {
        title: 'Dizayn',
        description: 'UI/UX dizayn asoslari. Grafik dizayn, veb va mobil ilovalar uchun interfeys yaratish.',
        duration: '3 oy',
        price: 1500000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      kr: {
        title: 'UI/UX Design',
        description: 'UI/UX дизайн асослари. График дизайн, веб ва мобил иловалар учун интерфейс яратиш.',
        duration: '3 ой',
        price: 800000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      },
      en: {
        title: 'Design',
        description: 'UI/UX design basics. Graphic design, interface creation for web and mobile applications.',
        duration: '3 months',
        price: 1500000,
        get installment() {
          return calculateInstallment(this.price, getDurationMonths(this.duration));
        }
      }
    }
  },
  // {
  //   id: 'marketing',
  //   image: images6,
  //   translations: {
  //     ru: {
  //       title: 'Маркетинг',
  //       description: 'Стратегии цифрового маркетинга. Интернет-маркетинг, SEO и рекламные кампании.',
  //       duration: '3 месяца',
  //       price: 1500000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     uz: {
  //       title: 'Marketing',
  //       description: 'Raqamli marketing strategiyalari. Internet-marketing, SEO va reklama kampaniyalari.',
  //       duration: '3 oy',
  //       price: 1500000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     kr: {
  //       title: 'Digital Marketing',
  //       description: 'Рақамли маркетинг стратегиялари. Интернет-маркетинг, SEO ва реклама кампаниялари.',
  //       duration: '3 ой',
  //       price: 800000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     },
  //     en: {
  //       title: 'Marketing',
  //       description: 'Digital marketing strategies. Internet marketing, SEO and advertising campaigns.',
  //       duration: '3 months',
  //       price: 1500000,
  //       get installment() {
  //         return calculateInstallment(this.price, getDurationMonths(this.duration));
  //       }
  //     }
  //   }
  // }
];
