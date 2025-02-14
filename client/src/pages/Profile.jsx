import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import profile from '../assets/Default_pfp.jpg';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Podcast enthusiast and creator. Exploring the world one episode at a time.',
    location: 'New York, USA',
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual profile picture URL
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Profile Content */}
      <div className="p-7 bg-gray-100 h-screen w-full overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Your Profile</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-6">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover border-4 border-blue-500"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500">{user.location}</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Bio</h3>
            <p className="text-gray-700 mt-2">{user.bio}</p>
          </div>

          {/* Additional Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
