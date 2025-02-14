import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';
import { musicData } from '../assets/frontend-assets/assets';

const Dashboard = ({ favorites, toggleFavorite }) => {
  const categories = [
    { id: 1, title: 'Most Viewed', filter: (album) => album.name.includes('Most Viewed') },
    { id: 2, title: 'Sports', filter: (album) => album.name.includes('Sports') },
    { id: 3, title: 'Education', filter: (album) => album.name.includes('Education') },
    { id: 4, title: 'Health', filter: (album) => album.name.includes('Health') },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-7 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h1>

        {categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {musicData.albums.filter(category.filter).map((album) => (
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
                    <h2 className="text-lg font-semibold text-white">{album.name}</h2>
                    <p className="text-sm text-gray-300">{album.desc}</p>
                  </Link>

                  {/* Heart Icon for Favorites */}
                  <button
                    onClick={() => toggleFavorite(album)}
                    className="mt-2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-red-200 transition-colors duration-300"
                    aria-label="Toggle Favorite"
                  >
                    {favorites.some((fav) => fav.id === album.id) ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart className="text-gray-500" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
