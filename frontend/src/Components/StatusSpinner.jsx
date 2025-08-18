import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function StatusSpinner({ status = "loading" }) {
  const circleRadius = 45;
  const circlePathLength = 2 * Math.PI * circleRadius;

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.svg
      width="180" // Tamanho ajustado
      height="180" // Tamanho ajustado
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#0056b3" />
        </linearGradient>
      </defs>

      <AnimatePresence>
        {status === "loading" && (
          <motion.path
            key="spinner"
            d={`M 50, 50 m -${circleRadius}, 0 a ${circleRadius},${circleRadius} 0 1,0 ${
              circleRadius * 2
            },0 a ${circleRadius},${circleRadius} 0 1,0 -${circleRadius * 2},0`}
            stroke="url(#spinnerGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${circlePathLength * 0.75} ${circlePathLength}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              rotate: { repeat: Infinity, duration: 1.5, ease: "linear" },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
          />
        )}

        {status === "success" && (
          <motion.g key="success-indicator">
            <motion.circle
              cx="50"
              cy="50"
              r={circleRadius}
              fill="#0056b3"
              variants={circleVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M 20 50 L 45 75 L 80 35"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={checkVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.g>
        )}
      </AnimatePresence>
    </motion.svg>
  );
}

export default StatusSpinner;
