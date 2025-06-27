import React from 'react';

const ContinueWatching = () => {  const movies = [
    {
      id: 1,
      title: "Don't Look Up",
      image: "/assets/image/dont look up.png",
      rating: "4.5/5"
    },
    {
      id: 2,
      title: "The Batman",
      image: "/assets/image/carusel 2.png",
      rating: "4.2/5"
    },
    {
      id: 3,
      title: "Blue Lock",
      image: "/assets/image/carusel 3.png",
      rating: "4.6/5"
    },
    {
      id: 4,
      title: "A Man Called Otto",
      image: "/assets/image/carusel 4.png",
      rating: "4.4/5"
    }
  ];

  return (
    <section className="px-4 py-6 sm:px-10 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Melanjutkan Tonton Film</h2>
      <div className="grid grid-cols-4 gap-4">        {movies.map((movie, index) => (
          <div 
            key={movie.id}
            className={`${index === 0 ? 'col-span-4 sm:col-span-1' : 'hidden sm:block'} bg-gray-800 rounded-lg overflow-hidden shadow-md relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <img src={movie.image} className="w-full h-[180px] object-cover" alt={movie.title} />
            <div className="absolute bottom-0 w-full flex justify-between p-2 text-white bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-sm sm:text-base font-semibold">{movie.title}</h3>
              <p className="text-xs sm:text-sm">⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;
