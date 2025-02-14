import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { musicData } from "../assets/frontend-assets/assets"; // Import the combined musicData

const AlbumDetails = () => {
  const { id } = useParams(); // Get the album ID from the route params

  const [album, setAlbum] = useState(null);
  const [relatedSongs, setRelatedSongs] = useState([]);

  useEffect(() => {
    const selectedAlbum = musicData.albums.find((album) => album.id === parseInt(id));
    if (selectedAlbum) {
      setAlbum(selectedAlbum);
      // Filter songs based on the IDs in the album's songs array
      const songsInAlbum = musicData.songs.filter((song) =>
        selectedAlbum.songs.includes(song.id)
      );
      setRelatedSongs(songsInAlbum);
    }
  }, [id]);

  if (!album) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">Album not found</h1>
      </div>
    );
  }

  return (
    <div className="flex h-screen"> 
      <Sidebar />
    
      <div className="min-h-screen bg-gray-100 p-8">
        {/* Album Info Section */}
        <div
          className="rounded-lg shadow-lg p-6 mb-8"
          style={{ backgroundColor: album.bgColor }}
        >
          <div className="flex items-center gap-6">
            <img
              src={album.image}
              alt={album.name}
              className="rounded-md w-40 h-40 object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">{album.name}</h1>
              <p className="text-lg text-gray-300 mt-2">{album.desc}</p>
            </div>
          </div>
        </div>

        {/* Songs List Section */}
        <h2 className="text-2xl font-bold mb-4">Songs in this Album</h2>
        {relatedSongs.length === 0 ? (
          <p className="text-lg text-gray-500">No songs available in this album</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedSongs.map((song) => (
              <li
                key={song.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={song.image}
                  alt={song.name}
                  className="rounded-md w-full h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{song.name}</h3>
                <p className="text-sm text-gray-500">{song.duration}</p>
                <audio
                  controls
                  className="w-full mt-2"
                  src={song.file}
                >
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AlbumDetails;
