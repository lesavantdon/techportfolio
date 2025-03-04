// pages/projects.js
import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1 style={{ textDecoration: "underline", textAlign: "center", marginBottom: "0px" }}>Project Page</h1>
      <div>
      <h2 style={{ textDecoration: "underline", textAlign: "center", marginBottom: "20px" }}>1. Personalized Fitness App Tracker  </h2>
      <ul> This is a fitness app and tracker to shuffle different exercises based on the day of the week. This allows me to streamline my workout and map out my workout week without the needed foresight. In addition, a journal log to track and record different workouts based on the genre of the week, to log all data and track progress inorder to refine my health regimine all with the touch of a finger.    </ul>

      <video width="750" controls>
        <source src="/screen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
      <div>
      <h2 style={{ textDecoration: "underline", textAlign: "center", marginBottom: "20px" }}>2. Greenhouse Plant Tracker </h2>
      <ul>This is my personalized greenhouse web app that will allow me to educate myself with different plants from the TREFLE API and access important plant care instructions. In addition, I will be able to create a greenhouse with my plants and track data on it that gives it the optimal environment to grow in without excessive intervention. These plants will eventually be tracked with sensor data and a calendar with appropriate feeding schedules, and alerts that will be sent to your phone.</ul>

      <video width="750" controls>
        <source src="/greenthumb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    
    
  );
};

export default Projects;
