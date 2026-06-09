import React from 'react';
import PropTypes from 'prop-types';

const PageSEO = ({ 
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
  lang = 'uz'
}) => {
  const baseUrl = 'https://www.ittimeacademy.uz';
  const fullCanonicalUrl = `${baseUrl}${canonicalUrl}`;
  const imageUrl = `${baseUrl}${ogImage}`;

  React.useEffect(() => {
    // Обновляем мета-теги
    document.documentElement.lang = lang;
    document.title = title;
    
    // Обновляем основные мета-теги
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph теги
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', fullCanonicalUrl, 'property');
    updateMetaTag('og:title', ogTitle || title, 'property');
    updateMetaTag('og:description', ogDescription || description, 'property');
    updateMetaTag('og:image', imageUrl, 'property');
    updateMetaTag('og:locale', `${lang}_${lang.toUpperCase()}`, 'property');

    // Twitter теги
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:url', fullCanonicalUrl, 'name');
    updateMetaTag('twitter:title', ogTitle || title, 'name');
    updateMetaTag('twitter:description', ogDescription || description, 'name');
    updateMetaTag('twitter:image', imageUrl, 'name');

    // Canonical URL
    let canonicalElement = document.querySelector("link[rel='canonical']");
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.rel = 'canonical';
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = fullCanonicalUrl;

    // Alternate Language Links
    updateAlternateLanguageLinks();
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, lang]);

  const updateMetaTag = (name, content, attributeName = 'name') => {
    let element = document.querySelector(`meta[${attributeName}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateAlternateLanguageLinks = () => {
    const languages = ['uz', 'ru', 'en'];
    languages.forEach(l => {
      let linkElement = document.querySelector(`link[hreflang="${l}"]`);
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = 'alternate';
        linkElement.hreflang = l;
        document.head.appendChild(linkElement);
      }
      linkElement.href = `${baseUrl}/${l}${canonicalUrl}`;
    });
  };

  return null;
};

PageSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  canonicalUrl: PropTypes.string.isRequired,
  lang: PropTypes.string
};

export default PageSEO;
