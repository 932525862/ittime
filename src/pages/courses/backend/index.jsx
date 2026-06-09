import React from 'react';
import SEOHead from '../../../components/SEO/SEOHead';
import AllBackend from './components/AllBackend';

const BackendCourse = () => {
  const seoData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Backend Development Kursi",
    "description": "Professional Backend dasturlash kursi. Java, Spring Boot, PostgreSQL va zamonaviy backend texnologiyalarini o'rganing.",
    "provider": {
      "@type": "Organization",
      "name": "IT Time Academy",
      "sameAs": "https://www.ittimeacademy.uz"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "duration": "P8M",
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
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "REST API",
      "Microservices",
      "Docker",
      "Git",
      "AWS Basics"
    ],
    "educationalCredentialAwarded": "Backend Developer Sertifikati",
    "occupationalCredentialAwarded": "Backend Developer Portfolio",
    "offers": {
      "@type": "Offer",
      "price": "2500000",
      "priceCurrency": "UZS",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  return (
    <>
      <SEOHead 
        title="Backend Development Kursi | Java, Spring Boot va Enterprise Texnologiyalari | IT Time Academy"
        description="Professional Backend dasturlash kursida Java, Spring Boot, PostgreSQL va zamonaviy backend texnologiyalarini o'rganing. 8 oyda tajribali dasturchi bo'ling. Portfolio va ish topishda yordam."
        keywords="backend development, java kursi, spring boot kursi, postgresql kursi, backend dasturchi, IT Time Academy, backend bootcamp, rest api o'rganish, microservices kursi, backend portfolio"
        ogImage="/assets/images/courses/backend-course.jpg"
        schemaData={seoData}
      />
      <AllBackend />
    </>
  );
};

export default BackendCourse;
