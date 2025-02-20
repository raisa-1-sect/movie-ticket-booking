'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar'
import ProfileMenu from '@/components/ProfileMenu';

type Booking ={
name: string;
ticketCount: number;
time: string;
date: string;}
export default function Activity() {
  const [bookings, setBookings] = useState<Booking[]>([]);



  // Fetch bookings from localStorage or API
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(savedBookings);
  }, []);

  return (
    <div className="flex h-screen mt-[4rem] md:mt-0 lg:mt-0">
      {/* Sidebar */}
        <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Activity Table */}
        {bookings.length === 0 ? (
          <p>No bookings yet!</p>
        ) : (
          <>
            <h1 className="text-xl font-bold mb-6">Activity</h1>

            {/* Table */}
            <table className="w-[80vw] md:w-full lg:w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  {['ID', 'Movie', 'Tickets', 'Amount', 'Time', 'Date'].map(
                    (header) => (
                      <th
                        key={header}
                        className="border border-gray-300 px-4 py-2 bg-gray-100"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{booking.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{booking.ticketCount}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹{booking.ticketCount * 250}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{booking.time}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <ProfileMenu/>
    </div>
  );
}
