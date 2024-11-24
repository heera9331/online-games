"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              <Link href={"/"}>Online Games</Link>
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#games">Games</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#tournaments">Tournaments</NavLink>
              <NavLink href="#community">Community</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="#games" onClick={() => setIsOpen(false)}>
                Games
              </MobileNavLink>
              <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink
                href="#tournaments"
                onClick={() => setIsOpen(false)}
              >
                Tournaments
              </MobileNavLink>
              <MobileNavLink href="#community" onClick={() => setIsOpen(false)}>
                Community
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);
