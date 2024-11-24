"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
        >
          Level Up Your Gaming Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 text-gray-300"
        >
          Join millions of players worldwide in the ultimate gaming destination
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition"
        >
          Play Now
        </motion.button>
      </div>
    </section>
  );
}