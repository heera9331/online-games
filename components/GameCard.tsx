"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  players: string;
  genre: string;
  index: number;
}

export default function GameCard({ title, players, genre, index }: GameCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-lg p-6 text-center"
    >
      <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{genre}</p>
      <p className="text-sm text-purple-400">{players} Players</p>
    </motion.div>
  );
}