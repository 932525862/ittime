import i18next from 'i18next';

export const jobFeatures = [
  {
    icon: '💼',
    title: () => i18next.t('home.SixthRezumePage.features.guaranteedJob.title'),
    description: () => i18next.t('home.SixthRezumePage.features.guaranteedJob.description')
  },
  {
    icon: '🎯',
    title: () => i18next.t('home.SixthRezumePage.features.goodSalary.title'),
    description: () => i18next.t('home.SixthRezumePage.features.goodSalary.description')
  },
  {
    icon: '🚀',
    title: () => i18next.t('home.SixthRezumePage.features.careerGrowth.title'),
    description: () => i18next.t('home.SixthRezumePage.features.careerGrowth.description')
  }
];

export const courseFeatures = [
  {
    icon: '🎓',
    title: () => i18next.t('home.SixthRezumePage.features.professionalEducation.title', 'Professional ta\'lim'),
    description: () => i18next.t('home.SixthRezumePage.features.professionalEducation.description', 'Tajribali o\'qituvchilardan bilim oling')
  },
  {
    icon: '💻',
    title: () => i18next.t('home.SixthRezumePage.features.practicalExperience.title', 'Amaliy tajriba'),
    description: () => i18next.t('home.SixthRezumePage.features.practicalExperience.description', 'Real loyihalar ustida ishlash')
  },
  {
    icon: '🌟',
    title: () => i18next.t('home.SixthRezumePage.features.careerSupport.title', 'Karyera qo\'llab-quvvatlash'),
    description: () => i18next.t('home.SixthRezumePage.features.careerSupport.description', 'Karyerangizni rivojlantirishda yordam')
  }
];
