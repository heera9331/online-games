"use client";
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Start Gaming?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Join our community and start playing instantly
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition"
          >
            Create Account
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            <FaDiscord className="w-5 h-5" />
            Join Discord
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}