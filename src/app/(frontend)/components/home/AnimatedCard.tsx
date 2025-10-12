"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export function AnimatedCard({ children, index, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 20, delay: index * 0.07 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.985 }}
      className={`relative rounded-[1rem] bg-[var(--beige)] m-4 border-2 border-gray-400 hover:border-[#2451a6] hover:shadow-[0_0_0_2px_rgba(36,81,166,0.3),0_0_0_5px_rgba(36,81,166,0.1)] transition-all duration-50 ${className}`}
      style={{
        transformOrigin: "center center",
      }}
    >
      {children}
    </motion.div>
  );
}
