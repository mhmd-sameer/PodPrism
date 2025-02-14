import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';

const Favourites = ({ favorites = [], toggleFavorite }) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
    <div className="p-7 bg-gray-100 h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">Your Favorite Podcasts</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg">No favorites yet. Go back and add some!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: album.bgColor }}
            >
              <Link to={`/album/${album.id}`}>
                <img
                  src={album.image}
                  alt={album.name}
                  className="rounded-md w-full h-32 object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">{album.name}</h2>
                <p className="text-sm text-gray-500">{album.desc}</p>
              </Link>

              {/* Heart Icon for Removing Favorites */}
              <button
                onClick={() => toggleFavorite(album)}
                className="mt-2 flex items-center justify-center w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-300"
                aria-label="Remove from favorites"
              >
                <FaHeart className="text-red-500 text-xl" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Favourites;
