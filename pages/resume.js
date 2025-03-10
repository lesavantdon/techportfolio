// pages/resume.tsx
import React from "react";

const Resume = () => {
  return (
    <>
      {/* Centered Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
         <h1 style={{ textDecoration: "underline" }}>Skills </h1>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Javascript ECMA Script - ES14</li>
          <li>MERN Development</li>
          <li>React.js & Next.js</li>
          <li>Redux</li>
          <li>C++</li>
          <li>VS Code</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Python</li>
          <li>Typescript</li>
          <li>Vercel, Heroku App Deployment</li>
          <li>API development with Node.js & Express</li>
          <li>MongoDB, Mongo Compass and Atlas + SQL Databases</li>
          <li>Version Control with Git</li>
          <li>Agile Development & Problem Solving</li>
          <li>Mocha, Chai, Jasmine</li>
          <li>Tailwind CSS</li>
          <li>HTML5.3</li>
        </ul>
      </div>

        <h1 style={{ textDecoration: "underline" }}>Resume</h1>
      {/* PDF Section (Not Centered) */}
      <div style={{ marginTop: "50px", width: "80%", margin: "0 auto" }}>
        <embed src="/resume.pdf" width="100%" height="800px" type="application/pdf" />
      </div>
    </>
  );
};

export default Resume;
