// Custom animation variants for consistent, reusable animations

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export const slideInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" }
  })
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 }
};

export const hoverLift = {
  whileHover: { y: -10, boxShadow: "0 20px 40px rgba(37, 48, 160, 0.2)" },
  transition: { duration: 0.3 }
};

export const buttonHover = {
  whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(37, 48, 160, 0.3)" },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
};