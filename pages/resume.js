// pages/resume.tsx
import React from "react";

const Resume = () => {
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>Resume </h1>
      <p>
      </p>
        <ul>
        <li>Javascript ECMA Script- ES14 </li>

        <li>MERN Development</li>
        <li>React.js & Next.js</li>
        <li>Redux </li>
        <li>API development with Node.js & Express</li>
        <li>MongoDB, Mongo Compass and Atlas + SQL Databases</li>
        <li>Version Control with Git</li>
        <li>Agile Development & Problem Solving</li>
        <li>Mocha, Chai, Jasmine</li>
        <li> Tailwind CSS </li>
        <li> HTML5.3 </li>
        </ul>
        

        <div style={{ marginTop: "100px" }}>
        <embed
        src="/resume.pdf"
        width="100%"
        height="800px"
        type="application/pdf"/>
      </div>
    </div>
    
  );
};

export default Resume;
