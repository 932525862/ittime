import React from 'react';
import SEOHead from '../../../components/SEO/SEOHead';
import AllFrontend from './components/AllFrontend';

const FrontendCourse = () => {
  const seoData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Frontend Development Kursi",
    "description": "Professional Frontend dasturlash kursi. React.js, JavaScript, TypeScript va zamonaviy web texnologiyalarini o'rganing.",
    "provider": {
      "@type": "Organization",
      "name": "IT Time Academy",
      "sameAs": "https://www.ittimeacademy.uz"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "duration": "P6M",
      "inLanguage": "uz",
      "location": {
        "@type": "Place",
        "name": "IT Time Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tashkent",
          "addressCountry": "UZ"
        }
      }
    },
    "teaches": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "TypeScript",
      "Next.js",
      "Redux",
      "Material UI",
      "Tailwind CSS"
    ],
    "educationalCredentialAwarded": "Frontend Developer Sertifikati",
    "occupationalCredentialAwarded": "Frontend Developer Portfolio",
    "offers": {
      "@type": "Offer",
      "price": "2000000",
      "priceCurrency": "UZS",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEOHead 
        title="Frontend Development Kursi | React.js, JavaScript va Zamonaviy Web Texnologiyalari | IT Time Academy"
        description="Professional Frontend dasturlash kursida React.js, JavaScript, TypeScript va zamonaviy web texnologiyalarini o'rganing. 6 oyda tajribali dasturchi bo'ling. Portfolio va ish topishda yordam."
        keywords="frontend development, react.js kursi, javascript kursi, web dasturlash, frontend dasturchi, IT Time Academy, frontend bootcamp, typescript o'rganish, next.js kursi, frontend portfolio"
        ogImage="/assets/images/courses/frontend-course.jpg"
        schemaData={seoData}
      />
      <AllFrontend />
    </>
  );
};

export default FrontendCourse;
