import React, { useState, useEffect } from 'react'
import Navigation from './modules/Navigation'
import BurgerNavigation from './modules/BurgerNavigation'
import TopNavigation from './modules/TopNavigation'
import './navbar.css'
import logo from '../../assets/images/logo-ittimeacademy.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full ${isScrolled ? 'navbar-scroll' : 'bg-[#b61924]'} top-0 z-50`}>
      <TopNavigation />
      <nav className="bg-white  py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold" aria-label="IT TIME ACADEMY - Home">
                <img 
                  className='w-[140px]' 
                  src={logo} 
                  alt="IT TIME ACADEMY Logo" 
                  title="IT TIME ACADEMY - Programming Courses in Uzbekistan"
                  loading="eager"
                  width="140"
                  height="auto"
                />
              </a>
            </div>

            <Navigation />

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`burger-menu ${isOpen ? 'burger-active' : ''}`}
              >
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        <BurgerNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  )
}
