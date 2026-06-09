import React from 'react';

export const FAQSchema = ({ faqs, lang = 'uz' }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  React.useEffect(() => {
    let scriptElement = document.querySelector('script[data-schema="faq"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('data-schema', 'faq');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schema);
  }, [faqs, lang]);

  return null;
};
