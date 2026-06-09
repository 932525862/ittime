import './index.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './animations/loading';
import CallButton from './components/CallButton';
import ScrollToTop from './components/ScrollToTop';
import RootRoute from './config/routes';

function App() {
  const [loadingActive, setLoadingActive] = useState(true);
  const [layoutgActive, setLayoutActive] = useState(false);

  // first animation
  setTimeout(() => {
    setLoadingActive(false)
  }, 2500)

  //second animation
  setTimeout(() => {
    setLayoutActive(true)
  }, 2500)
  
  // Инициализация AOS при монтировании компонента
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once: true - анимация срабатывает только один раз
  }, []);

  return (
    <>
      {loadingActive && <Loading />}
      {layoutgActive && <RootRoute />}
      <CallButton />
      <ScrollToTop />
    </>
  );
}

export default App;
