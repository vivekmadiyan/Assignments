import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({ 
    threshold,
    triggerOnce: true // Animation triggers only once
  });

  return { ref, inView };
};