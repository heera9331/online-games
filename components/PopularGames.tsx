"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const games = [
  {
    title: "Flippy Bird",
    description: "Test your vocabulary and typing skills",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
    category: "Educational",
    link: "/flippy-bird",
  },
  {
    title: "Air Strike",
    description: "Epic aerial combat simulation",
    image:
      "https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&w=800&q=80",
    category: "Action",
    link: "",
  },
  {
    title: "Ludo Masters",
    description: "Classic board game with a modern twist",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80",
    category: "Board Game",
    link: "",
  },
  {
    title: "Snake Classic",
    description: "The timeless arcade favorite",
    image:
      "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?auto=format&fit=crop&w=800&q=80",
    category: "Arcade",
    link: "",
  },
  {
    title: "Car Break",
    description: "High-speed racing adventure",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
    category: "Racing",
    link: "",
  },
];

export default function PopularGames() {
  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Popular Games
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Link href={game.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    {game.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm">{game.description}</p>
                  <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                    Play Now
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
