"use client";
import React from 'react';
import { FaGamepad, FaTrophy, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FaGamepad,
    title: "200+ Games",
    description: "Access to a vast library of games",
    color: "text-purple-500"
  },
  {
    icon: FaUsers,
    title: "Global Community",
    description: "Connect with players worldwide",
    color: "text-blue-500"
  },
  {
    icon: FaTrophy,
    title: "Tournaments",
    description: "Compete for amazing prizes",
    color: "text-yellow-500"
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}