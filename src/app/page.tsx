'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaLock, FaGlobe } from 'react-icons/fa';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'naval.ravikant' && password === '05111974') {
      router.push('/booking');
    } else {
      setError('Wrong Credentials');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-center mb-6">
          <FaGlobe className="text-3xl" />
          <h1 className="ml-2 text-xl font-bold">Almanack</h1>
        </div>
        <div className="space-y-4">
          <div className="flex items-center bg-white text-black rounded-lg px-4 py-2">
            <FaUser className="mr-2" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center bg-white text-black rounded-lg px-4 py-2">
            <FaLock className="mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200"
          >
            Login
          </button>
        </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
}
