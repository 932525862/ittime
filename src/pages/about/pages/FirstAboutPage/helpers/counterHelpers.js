export const setupIntersectionObserver = (
  counterRef,
  setIsVisible,
  setCount,
  animationRef
) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (!entry.isIntersecting) {
        setCount(0);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    },
    { threshold: 0.5 }
  );

  if (counterRef.current) {
    observer.observe(counterRef.current);
  }

  return () => {
    if (counterRef.current) {
      observer.unobserve(counterRef.current);
    }
  };
};

export const animateCounter = (
  isVisible,
  end,
  duration,
  setCount,
  animationRef
) => {
  if (!isVisible) {
    return;
  }

  let startTime = null;

  const animate = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

    if (progress < 1) {
      setCount(Math.floor(end * progress));
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end);
    }
  };

  setCount(0);
  animationRef.current = requestAnimationFrame(animate);

  return () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };
};
