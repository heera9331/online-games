"use client";
import React from 'react';
import GameCard from './GameCard';
import { motion } from 'framer-motion';

const games = [
  { title: "Cyber Warriors", players: "50K+", genre: "FPS" },
  { title: "Fantasy Realm", players: "100K+", genre: "MMORPG" },
  { title: "Speed Racers", players: "30K+", genre: "Racing" },
  { title: "Battle Royale", players: "80K+", genre: "Battle Royale" }
];

export default function FeaturedGames() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Games
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} {...game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}