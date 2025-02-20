"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { debounce } from "lodash";
import Sidebar from "@/components/Sidebar";
import ProfileMenu from "@/components/ProfileMenu";
import { FaSearch } from "react-icons/fa";

export default function Booking() {
  type Movie = {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
  };
  
  const [movies, setMovies] = useState<Movie[]>([]);
  
  const [searchTerm, setSearchTerm] = useState("movie");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Fetch movies (debounced)
  const fetchMovies = useCallback(
    debounce(async (query, pageNum) => {
      if (!hasMore || loading) return; 
      setLoading(true); 

      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${query}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&page=${pageNum}`
        );

        if (response.data.Search) {
          setMovies((prevMovies) =>
            pageNum === 1 ? response.data.Search : [...prevMovies, ...response.data.Search]
          );
          setHasMore(response.data.Search.length > 0);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }

      setTimeout(() => setLoading(false), 500); 
    }, 500),
    [hasMore, loading]
  );

  useEffect(() => {
    setPage(1);
    fetchMovies(searchTerm, 1);
    return () => fetchMovies.cancel();
  }, [searchTerm]);
  

  useEffect(() => {
    if (page > 1) fetchMovies(searchTerm, page);
  }, [page,searchTerm]);

  // Intersection Observer for Infinite Scroll
  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loading, hasMore]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow mt-12 md:mt-0 lg:mt-0 p-6">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">
  {(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  })()}
</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-3 top-[10px] text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[80vh] overflow-y-auto p-4 scrollbar-hide">
          {movies.map((movie, index) => (
            <div
              key={movie.imdbID}
              ref={index === movies.length - 1 ? observerRef : null} 
              onClick={() =>
                router.push(
                  `/selection?id=${movie.imdbID}&name=${movie.Title}&poster=${movie.Poster}&year=${movie.Year}`
                )
              }
              className="cursor-pointer bg-white p-4 w-[15rem] rounded-lg shadow hover:shadow-md transition"
            >
              <Image
                src={movie.Poster}
                alt={movie.Title}
                height={100} width={100}
                className="rounded-md h-[12rem] w-[15rem] mb-4"
              />
              <h3 className="text-lg font-bold">{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center mt-6">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            <p className="ml-2 text-gray-500">Loading more movies...</p>
          </div>
        )}
      </div>
      <ProfileMenu />
    </div>
  );
}
