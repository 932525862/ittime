import React, { useState, useEffect, useRef } from 'react';
import { setupIntersectionObserver, animateCounter } from '../helpers/counterHelpers';

const StatCounter = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    return setupIntersectionObserver(
      counterRef,
      setIsVisible,
      setCount,
      animationRef
    );
  }, []);

  useEffect(() => {
    return animateCounter(
      isVisible,
      end,
      duration,
      setCount,
      animationRef
    );
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="counter-wrapper">
      {count}{suffix}
    </div>
  );
};

export default StatCounter;
