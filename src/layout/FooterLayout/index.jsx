import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import './footer.css'
import { scrollToTop } from '../../helpers/scroll'

export default function FooterLayout() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate random particles
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 5 + Math.random() * 10,
      delay: -Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isHovered) {
      const footer = document.querySelector('.footer-container');
      const rect = footer.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, [isHovered]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <footer 
      className="relative bg-white overflow-hidden footer-container min-h-[500px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 opacity-[0.07] transition-all duration-500"
        style={{
          background: `
            radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.4), transparent 40%),
            radial-gradient(circle 800px at ${mousePosition.x - 200}px ${mousePosition.y + 200}px, rgba(59, 130, 246, 0.4), transparent 40%),
            radial-gradient(circle 600px at ${mousePosition.x + 200}px ${mousePosition.y - 100}px, rgba(139, 92, 246, 0.4), transparent 40%)
          `,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* Animated Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="footer-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Glowing Effect */}
      <div className="footer-glow overflow-hidden" />

      <div className="max-w-[1400px] mx-auto w-[95%] py-16 relative">
        {/* Top Section with Grid */}
        <div className="grid px-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-6 group">
            <h3 className="footer-heading text-3xl font-bold text-black" data-aos="fade-right" data-aos-offset="100">
              {t('footer.about.title')}
            </h3>
            <p className="text-black text-sm leading-relaxed transform transition-all duration-300 group-hover:translate-x-2">
              {t('footer.about.description')}
            </p>
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-offset="100">
              {[
                { icon: FaFacebookF, link: 'https://www.instagram.com/it_time_academy/' },
                { icon: FaInstagram, link: 'https://www.instagram.com/it_time_academy/' },
                { icon: FaTelegramPlane, link: 'https://t.me/it_time' },
                { icon: FaYoutube, link: 'https://www.youtube.com/@it-time-academy' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="footer-social-icon"
                  style={{
                    animation: `borderGlow ${2 + index * 0.2}s infinite`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                    <social.icon className="text-xl text-black relative z-10" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div className="space-y-6">
            <h4 className="footer-heading text-xl font-bold text-black" data-aos="fade-right" data-aos-offset="100">
              {t('footer.courses.title')}
            </h4>
            <ul className="space-y-3" data-aos="fade-up" data-aos-offset="100">
              {[
                { title: t('header.menu.home'), path: '/' },
                { title: t('header.menu.courses'), path: '/courses' },
                { title: t('header.menu.mentors'), path: '/mentors' },
                { title: t('header.menu.about'), path: '/about' },
                { title: t('header.menu.contact'), path: '/contact' }
              ].map((link, index) => (
                <li 
                  key={index}
                  style={{ 
                    animation: `slideIn 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    transform: 'translateX(-20px)'
                  }}
                >
                  <Link 
                    onClick={scrollToTop}
                    to={link.path}
                    className="text-black hover:text-gray-700 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6 lg:col-start-4">
            <h4 className="footer-heading text-xl font-bold text-black" data-aos="fade-right" data-aos-offset="100">
              {t('footer.contact.title')}
            </h4>
            <ul className="space-y-4" data-aos="fade-up" data-aos-offset="100">
              {[
                { icon: FaMapMarkerAlt, text: t('footer.contact.address') },
                { icon: FaPhoneAlt, text: t('footer.contact.phone') },
                { icon: FaEnvelope, text: t('footer.contact.email') },
                { icon: FaClock, text: t('footer.contact.workingHours') }
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 group"
                  style={{
                    animation: `slideIn 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    transform: 'translateX(-20px)'
                  }}
                >
                  <item.icon className="text-xl text-red-500 mt-1" />
                  <span className="text-black group-hover:translate-x-2 transition-transform duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black text-sm">
              {new Date().getFullYear()} 
              <span className="footer-link inline-block px-2">
                {t('footer.about.title')}
              </span>
              {t('footer.copyright.text')}
            </p>
            <div className="flex items-center gap-8">
              {[
                { title: t('footer.links.privacy'), path: '/privacy' },
                { title: t('footer.links.terms'), path: '/terms' }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className="text-black hover:text-gray-700 text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
