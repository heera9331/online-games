"use client";
import React from "react";
import { FaTwitter, FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Online Games
            </h3>
            <p className="text-sm text-gray-400">
              Your ultimate destination for online gaming entertainment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  GDPR
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-500 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaTwitch size={24} />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
