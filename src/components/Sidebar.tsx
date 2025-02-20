'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaFilm, FaHistory, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className=" fixed top-0 left-0 z-[5] md:hidden bg-black w-full text-white flex justify-between items-center p-4">
        <h1 className="text-lg font-bold flex items-center">
          <FaGlobe className="mr-2" />
          Almanack
        </h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <span/> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar (Hidden by Default on Small Screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-[5]  bg-black text-white p-6 transition-transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:block`}
      >
        {/* Close Button (Only for Mobile) */}
        <button
          onClick={() => setMenuOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white"
        >
          <FaTimes size={24} />
        </button>

        {/* Logo */}
        <h1 className="text-xl font-bold mb-6 flex items-center">
          <FaGlobe className="mr-2" />
          Almanack
        </h1>

        {/* Navigation Links */}
        <ul>
          <li
            className={`mb-4 flex items-center p-2 rounded-lg ${
              pathname === '/booking' ? 'bg-gray-700' : ''
            }`}
          >
            <FaFilm className="mr-2" />
            <Link href="/booking" className="hover:text-gray-400">
              Booking
            </Link>
          </li>
          <li
            className={`flex items-center p-2 rounded-lg ${
              pathname === '/activity' ? 'bg-gray-700' : ''
            }`}
          >
            <FaHistory className="mr-2" />
            <Link href="/activity" className="hover:text-gray-400">
              Activity
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
