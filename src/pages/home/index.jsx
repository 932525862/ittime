import React from 'react';
import AllHome from './components/AllHome';
import PageSEO from '../../components/SEO/PageSEO';
import { SchemaMarkup } from '../../components/SEO/SchemaMarkup';
import { FAQSchema } from '../../components/SEO/FAQSchema';
import { seoConfig } from '../../seo/seoConfig';
import { faqConfig } from '../../seo/faqConfig';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'uz';
  const seo = seoConfig.home[lang];
  const faqs = faqConfig[lang];

  // Подготавливаем хлебные крошки
  const breadcrumbs = [
    { name: "IT TIME ACADEMY", path: "/" }
  ];

  return (
    <>
      <PageSEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        ogImage="/images/og-home.jpg"
        canonicalUrl="/"
        lang={lang}
      />
      <SchemaMarkup 
        type="Organization"
        breadcrumbs={breadcrumbs}
      />
      <FAQSchema 
        faqs={faqs}
        lang={lang}
      />
      <AllHome />
    </>
  );
};

export default Home;
