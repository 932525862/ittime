import React from 'react'
import './loading.css';
import imgblacktop from '../assets/images/loading-vectors/blacktoptest.png';
import imgredbottom from '../assets/images/loading-vectors/redbottomtest.png';
import imgblackcenter from '../assets/images/loading-vectors/centerblack.png';
import textblack from '../assets/images/loading-vectors/text-1-black.png';
import textred from '../assets/images/loading-vectors/text-2-red.png';

export default function Loading() {
  return (
    <div className="container-logotipe">
    <div className="logotipe">
      <img className="logotipe__black-top" src={imgblacktop} alt="" />
      <img className="logotipe__red-bottom" src={imgredbottom} alt="" />
      <div className="block-center">
        <img className="logotipe__black-center" src={imgblackcenter} alt="" />
      </div>
      <div className="block-text">
        <img className="logotipe__black-text" src={textblack} alt="" />
        <img className="logotipe__red-text" src={textred} alt="" />
      </div>
    </div>
  </div>
  )
}
