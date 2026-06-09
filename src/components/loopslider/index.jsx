import React from 'react'
import images1  from '../../assets/images/hamkorlarimiz/hamkor-1.png'
import images2  from '../../assets/images/hamkorlarimiz/hamkor-2.png'
import images3  from '../../assets/images/hamkorlarimiz/hamkor-3.jpg'
import images4  from '../../assets/images/hamkorlarimiz/hamkor-4.svg'
import images5  from '../../assets/images/hamkorlarimiz/hamkor-5.png'           
import images6  from '../../assets/images/hamkorlarimiz/hamkor-6.svg'   
import images7  from '../../assets/images/hamkorlarimiz/hamkor-7.jpg'   
import images8  from '../../assets/images/hamkorlarimiz/hamkor-8.png'   
import './style.css'

export default function Loopslider() {
  const logos = [images1, images2, images3, images4, images5, images6, images7, images8];
  
  return (
    <div className="loopslider">
      <div className="slide-track">
        {/* Первый набор */}
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
        {/* Второй набор для непрерывности */}
        {logos.map((logo, index) => (
          <img key={`duplicate-${index}`} src={logo} alt={`Logo ${index + 1}`} />
        ))}
        {/* Третий набор для плавности */}
        {logos.map((logo, index) => (
          <img key={`triple-${index}`} src={logo} alt={`Logo ${index + 1}`} />
        ))}
        {/* Четвертый набор для гарантии непрерывности */}
        {logos.map((logo, index) => (
          <img key={`quad-${index}`} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}
