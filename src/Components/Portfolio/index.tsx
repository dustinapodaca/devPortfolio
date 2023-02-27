import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const wrapperVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
};

export default function PortfolioClipPath () {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="card card__wrapper card__wrapper--yellow"
        key="card"
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="card__header">
          <h2>Lorem ipsum</h2>
          <button onClick={() => setSelectedSquare(null)}>
            
}
