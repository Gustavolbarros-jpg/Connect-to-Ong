// src/Components/LoadingSpinner.jsx (Versão Corrigida)

import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingSphereVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "-100%",
  },
};

const loadingSphereTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

// AQUI ESTÁ A MUDANÇA: removemos o div externo com h-screen
function LoadingSpinner() {
  return (
    <motion.div
      className="flex justify-center items-center gap-2 w-24 h-12"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.div
        className="w-4 h-4 bg-blue-800 rounded-full"
        variants={loadingSphereVariants}
        transition={loadingSphereTransition}
      ></motion.div>
      <motion.div
        className="w-4 h-4 bg-blue-800 rounded-full"
        variants={loadingSphereVariants}
        transition={loadingSphereTransition}
      ></motion.div>
      <motion.div
        className="w-4 h-4 bg-blue-800 rounded-full"
        variants={loadingSphereVariants}
        transition={loadingSphereTransition}
      ></motion.div>
    </motion.div>
  );
}

export default LoadingSpinner;
