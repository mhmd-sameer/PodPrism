import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !title || !description) {
      alert('Please fill in all fields and select a file');
      return;
    }

    setIsUploading(true);

    // Create a FormData object to send the file and form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    try {
      // Assuming an API endpoint to handle the upload (change URL as needed)
      const response = await fetch('http://localhost:5000/api/uploads', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Podcast uploaded successfully');
        navigate('/dashboard'); // Redirect to dashboard or another page
      } else {
        alert('Failed to upload podcast');
      }
    } catch (error) {
      console.error('Error uploading podcast:', error);
      alert('Error uploading podcast');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-7 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Upload Your Podcast</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Podcast Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter podcast title"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Podcast Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter podcast description"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-semibold text-gray-700">Podcast File</label>
            <input
              type="file"
              id="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            disabled={isUploading}
          >
            {isUploading ? 'Uploading...' : 'Upload Podcast'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
