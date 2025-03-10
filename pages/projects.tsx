import React from "react";

const Projects = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline", marginBottom: "30px" }}>
        Project Page
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* Card 1 - Fitness Tracker */}
        <div style={{ width: "100%", textAlign: "center" }}>
          <div
            style={{
              padding: "10px",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgb(249, 243, 243)",
              backgroundColor: "transparent",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ textDecoration: "underline", marginBottom: "10px" }}>
              1. Personalized Fitness App Tracker
            </h2>
            <p>
              This is a one of a kind, revolutionary Fitness App where workouts
              are dynamically shuffled based on the "workoutgenreWeek." In that,
              out of each week of the month we will either have a week of Yoga,
              Calisthenics, Strength or Cardio training. Each day based off of
              the seleced week of training, we will shuffle through different
              exercises and implement a specific exercise.
              <ul>
                <h3>Front End Development</h3>
                <li>
                  React.js – Built with React for a dynamic and interactive user
                  experience.
                </li>
                <li>Deployment on Vercel, integrationg with Github</li>
                <li>Analyzing build logs w/ Vercel for deployment</li>
                <li>
                  Context API – Manages global state, particularly for setting
                  and tracking the weekly workout genre.
                </li>
                <li>
                  React Hooks (useState, useEffect) – Used for handling
                  component states and lifecycle events.
                </li>
                <li>
                  CSS Modules / Global Styles – Styled using modular and global
                  CSS for a clean UI.
                </li>
                <li>
                  LocalStorage API – Stores and retrieves workout schedules to
                  maintain consistency across sessions.
                </li>
              </ul>
              <ul>
                <h3>Backend Development</h3>
                <li>
                  Node.js & Express.js – Handles API requests and serves workout
                  data.
                </li>
                <li>
                  MongoDB with Mongoose – Stores workout routines, allowing
                  flexibility for different workout types.
                </li>
                <li>
                  RESTful API – Fetches workouts dynamically based on the
                  current week’s genre.
                </li>
              </ul>
              <ul>
                <h3>Features and Implementation</h3>
                <li>
                  Dynamic Workout Generator – Randomly selects a new workout
                  each day but maintains consistency using localStorage.
                </li>
                <li>
                  Workout Calendar System – Determines the current week’s genre
                  using a custom algorithm and prevents genre repetition.
                </li>
                <li>
                  Shuffling Algorithm – Uses the Fisher-Yates algorithm to
                  shuffle workout types to keep routines engaging.
                </li>
                <li>
                  Responsive UI – Designed to be mobile-friendly and adaptive.
                </li>
              </ul>
            </p>
          </div>
          <div style={{ padding: "20px" }}>
            <video width="1100" controls>
              <source src="/screen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Card 2 - Greenhouse Tracker */}
        <div style={{ width: "100%", textAlign: "center" }}>
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgb(248, 246, 246)",
              backgroundColor: "transparent",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ textDecoration: "underline", marginBottom: "10px" }}>
              Greenhouse Plant Tracker
            </h2>
            <p>
              Personalized greenhouse web app that allows me to educate myself
              with different plants from the TREFLE API and access important
              plant care instructions. I can create a greenhouse, track data for
              optimal growth, and integrate sensor data with feeding schedules
              and phone alerts.
            </p>
            <ul>
              <h3>Front End Development</h3>
              <li>React.js</li>
              <li>
                Filtering, pagination, and search functionality for plant
                monitoring
              </li>
              <li>Weather API integration for real-time forecasts</li>
              <li></li>

              <h3>Backend Development</h3>
              <li> Node.js, MongoDB, WebSockets</li>
              <li> JWT token authentication for registration and user login</li>
              <li> REST API for CRUD operations on plant data</li>
              <li>
                MongoDB (Mongoose ORM) for storing plant and sensor history
              </li>
            </ul>
            <ul>
              <h3>Features and Implementation</h3>
              <li>Git & GitHub for version control</li>
              <li>Docker (optional) for containerized deployment</li>
              <li>Postman for API testing</li>
            </ul>
          </div>
          <div style={{ padding: "20px" }}>
            <video width="1100" controls>
              <source src="/greenthumb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
