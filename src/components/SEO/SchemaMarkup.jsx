import React from 'react';

export const SchemaMarkup = ({ 
  type = 'Organization',
  data,
  breadcrumbs 
}) => {
  const baseUrl = 'https://www.ittimeacademy.uz';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IT TIME ACADEMY",
    "alternateName": ["ИТ ТАЙМ АКАДЕМИЯ", "IT Time Academy"],
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": [
      `${baseUrl}/images/academy-1.jpg`,
      `${baseUrl}/images/academy-2.jpg`,
      `${baseUrl}/images/academy-3.jpg`
    ],
    "description": "O'zbekistondagi eng zo'r va eng kuchli dasturlash markazi",
    "slogan": "Eng zo'r dasturlash markazi",
    "email": "info@ittimeacademy.uz",
    "telephone": "+998900000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Tashkent",
      "addressRegion": "Tashkent",
      "postalCode": "100000",
      "addressCountry": "UZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.2995",
      "longitude": "69.2401"
    },
    "sameAs": [
      "https://facebook.com/ittimeacademy",
      "https://instagram.com/ittimeacademy",
      "https://t.me/ittimeacademy",
      "https://youtube.com/ittimeacademy"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    ...data,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "IT TIME ACADEMY",
      "sameAs": baseUrl
    }
  };

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`
    }))
  } : null;

  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return organizationSchema;
      case 'Course':
        return courseSchema;
      default:
        return organizationSchema;
    }
  };

  React.useEffect(() => {
    // Добавляем основную schema разметку
    let scriptElement = document.querySelector('script[data-schema="main"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('data-schema', 'main');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(getSchema());

    // Добавляем breadcrumbs schema если есть
    if (breadcrumbSchema) {
      let breadcrumbScriptElement = document.querySelector('script[data-schema="breadcrumbs"]');
      if (!breadcrumbScriptElement) {
        breadcrumbScriptElement = document.createElement('script');
        breadcrumbScriptElement.setAttribute('type', 'application/ld+json');
        breadcrumbScriptElement.setAttribute('data-schema', 'breadcrumbs');
        document.head.appendChild(breadcrumbScriptElement);
      }
      breadcrumbScriptElement.textContent = JSON.stringify(breadcrumbSchema);
    }
  }, [type, data, breadcrumbs]);

  return null;
};
