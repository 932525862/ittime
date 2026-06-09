import React from 'react';
import AllMentors from './components/AllMentors';
import PageSEO from '../../components/SEO/PageSEO';
import { seoConfig } from '../../seo/seoConfig';
import { useLocation } from 'react-router-dom';

const Mentors = () => {
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'uz';
  const seo = seoConfig.mentors?.[lang] || seoConfig.mentors?.['uz'] || {
    title: "Our Mentors | IT TIME ACADEMY",
    description: "Meet our professional mentors and teachers at IT TIME ACADEMY",
    keywords: "IT mentors, programming teachers, IT Time Academy",
    ogTitle: "IT TIME ACADEMY - Our Mentors",
    ogDescription: "Learn from experienced mentors at IT TIME ACADEMY",
  };

  return (
    <>
      <PageSEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        ogImage="/images/og-mentors.jpg"
        canonicalUrl={`/${lang}/mentors`}
        lang={lang}
      />
      <div className='Mentors mt-[100px] md:mt-[150px] py-[50px]'>
        <AllMentors/>
      </div>
    </>
  );
};

export default Mentors;
