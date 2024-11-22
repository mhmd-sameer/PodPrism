import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import music from '../assets/Music.png';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Optionally update the user's display name
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      console.log("Account created");
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[800px] h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden flex mx-auto my-24">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-950 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">WELCOME</h1>
        <img src={music} alt='music' style={{ height: "250px" }} />
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem?
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full bg-blue-950 text-white p-3 rounded-md hover:bg-gray-800">
            Sign Up
          </button>
        </form>

        <p className="text-center text-blue-950 font-semibold mt-4 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-900 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
