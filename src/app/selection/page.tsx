'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaMinus, FaPlus, FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import ProfileMenu from '@/components/ProfileMenu';

export default function Selection() {
  const router = useRouter();

  return (
    <div className="flex h-screen mt-[4rem] md:mt-0 lg:mt-0">
      <Sidebar />
      <div className="flex-grow p-6 ml-10">
        <Suspense fallback={<p>Loading...</p>}>
          <MovieSelection router={router} />
        </Suspense>
      </div>
      <ProfileMenu />
    </div>
  );
}

type MovieSelectionProps = {
  router: ReturnType<typeof useRouter>;
};

function MovieSelection({ router }: MovieSelectionProps) {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Unknown Movie';
  const year = searchParams.get('year') || 'Unknown Year';
  const poster = searchParams.get('poster') || '/fallback.jpg';

  const [ticketCount, setTicketCount] = useState(1);
  const [time, setTime] = useState('12:00');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleBookTicket = () => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newBooking = { name, year, poster, ticketCount, time, date };
    localStorage.setItem('bookings', JSON.stringify([...bookings, newBooking]));
    alert('Tickets Booked!');
    router.push('/activity');
  };

  return (
    <>
      <Image
        height={100}
        width={100}
        src={poster}
        alt={name}
        className="rounded-lg h-[12rem] w-[35rem] mb-6 max-w-lg shadow-lg"
      />
      <h1 className="text-xl font-bold mb-4">{name} ({year})</h1>

      <div className="mb-4 flex gap-8">
        <label className="block font-bold mb-2">Ticket Count</label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTicketCount(Math.max(ticketCount - 1, 1))}
            className="px-4 py-2 hover:text-white rounded-lg hover:bg-gray-800"
          >
            <FaMinus />
          </button>
          <span className="text-xl px-4 py-2 bg-black text-white rounded-lg">{ticketCount}</span>
          <button
            onClick={() => setTicketCount(ticketCount + 1)}
            className="px-4 py-2 hover:text-white rounded-lg hover:bg-gray-800"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="mb-4 flex gap-8">
        <label className="block font-bold mb-2">Show Time</label>
        <div className="flex gap-4">
          {['9:00', '12:00', '18:00'].map((t) => (
            <button
              key={t}
              onClick={() => setTime(t)}
              className={`px-4 py-2 flex items-center gap-2 rounded-lg ${
                time === t ? 'bg-black text-white' : 'bg-gray-200'
              }`}
            >
              {t === '9:00' && <FaSun className="mr-2" />}
              {t === '12:00' && <FaGlobe className="mr-2" />}
              {t === '18:00' && <FaMoon className="mr-2" />}
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex gap-8">
        <label className="block font-bold mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleBookTicket}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Book Ticket
      </button>
    </>
  );
}
