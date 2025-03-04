import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 style={{ textDecoration: "underline" }} className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My Technical Portfolio
      </h1>
      <h2><strong>Aneet S. Sahota</strong></h2>
  
      <p className="text-lg text-gray-600 mb-6">
        This is my personal website showcasing my projects and experience.
      </p>

      {/* Display Profile Image */}
      <div className="flex justify-center items-center">
      <div className="profile-container">
        <Image 
          src="/me.jpg" 
          alt="My Profile Picture"
          width={96} 
          height={96}
          className="profile-image"
        />
        <video width="100%" controls>
  <source src="/screen.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      </div>
    </div>
    </div>
  );
}
