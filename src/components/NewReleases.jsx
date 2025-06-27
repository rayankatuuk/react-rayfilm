import React from 'react';

const NewReleases = () => {  const movies = [
    {
      id: 1,
      image: "/assets/image/Trending-5.png",
      isTop10: true
    },
    {
      id: 2,
      image: "/assets/image/top-1.png",
      hasNewEpisode: true
    },
    {
      id: 3,
      image: "/assets/image/Trending-3.png",
      isTop10: true
    },
    {
      id: 4,
      image: "/assets/image/top-3.png",
      hasNewEpisode: true
    },
    {
      id: 5,
      image: "/assets/image/Trending-4.png",
      isTop10: true
    }
  ];

  return (
    <section className="px-4 py-6 sm:px-10 sm:py-10 relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Rilis Baru</h2>
    
      {/* Grid film */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">        {movies.map((movie, index) => (
          <div 
            key={movie.id}
            className={`relative rounded-md overflow-hidden shadow-sm cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${index >= 2 ? 'hidden sm:block' : ''}`}
          >
            <img src={movie.image} className="w-full h-auto aspect-[2/3] object-cover" alt={`New Release ${movie.id}`} />
            {movie.isTop10 && (
              <div className="absolute top-0 right-2 bg-red-600 text-[14px] px-2 py-1 rounded-b-md text-white font-bold">Top 10</div>
            )}
            {movie.hasNewEpisode && (
              <div className="absolute top-2 left-2 bg-blue-600 text-[14px] px-2 py-1 rounded text-white font-medium">Episode Baru</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
