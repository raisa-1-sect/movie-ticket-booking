import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata= {
  title: 'Movie Ticket Booking', // Metadata for your app
  description: 'Book tickets for your favorite movies!', // Description of your app
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
