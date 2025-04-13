import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to store profile data
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  // Reference for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file if available
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Create a URL for the image and store it in state
    }
  };

  // Trigger file input when profile image is clicked
  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-black-450">
      <div className="profile-card w-90 h-auto bg-blue-900 rounded-4xl">
        {/* Profile image input */}
        <div className="profile-image">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
        
          <div 
            onClick={handleProfileImageClick}
            className="profile-info"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="block mx-auto object-cover py-7 px-5 w-full h-auto rounded-full"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-gray-400">
                <span className="text-2xl">+</span>
              </div>
            )}
          </div>
        </div>
          {/* Name input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-orange-500 rounded-lg py-2 px-4 w-80 focus:outline-none focus:ring-3 focus:ring-blue-500"
            />
          </div>
          {/* Bio textarea */}
          <div className="mb-6">
            <textarea
              rows={3}
              placeholder="Write a short bio about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="border border-red-500 rounded-lg py-2 px-4 w-80 focus:outline-none focus:ring-3 focus:ring-blue-500"
            ></textarea>
          </div>
        

        {/* Save Changes Button */}
        <div className="save-button p-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Save Changes
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
