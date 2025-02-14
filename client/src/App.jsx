import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './pages/Profile';
import Favourites from './pages/Favourites';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import AlbumDetails from './pages/AlbumDetails';
import { useState } from 'react';

function App() {
  // State to manage favorites
  const [favorites, setFavorites] = useState([]);

  // Function to toggle favorite status
  const toggleFavorite = (album) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === album.id)) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav.id !== album.id);
      } else {
        // Add to favorites
        return [...prevFavorites, album];
      }
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favourites"
          element={<Favourites favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/album/:id" element={<AlbumDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
