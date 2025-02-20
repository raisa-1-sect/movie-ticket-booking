'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false); 
  const router = useRouter();

  const handleLogout = () => {
    // Clear any stored user data (if applicable)
    localStorage.clear(); 
    router.push('/'); 
  };

  return (
    <div className="fixed md:top-5 md:right-5 lg:top-5 lg:right-5 top-[4.5rem] right-3">
      {/* Profile Icon and Name */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} 
      >
        <FaUserCircle size={32} />
        <span className='hidden md:block'>Naval Ravikant</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
