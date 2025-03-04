// pages/job-history.tsx
import React from "react";

const JobHistory = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
      {/* Page Title */}
      <h1 style={{ textDecoration: "underline", textAlign: "center", marginBottom: "30px" }}>
        Job History
      </h1>

      {/* Job 1 */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          <strong>1. Founding Software Engineer - LeSavantDon</strong>
        </h3>
        <p><strong>Jan 1, 2025 - Present</strong></p>
        <p>
          As the founder and lead developer of an online platform for creative professionals,
          I manage both technical development and creative direction, integrating multiple disciplines
          such as **art, design, architecture, and fashion**.
        </p>

        <h4>Front-End Development:</h4>
        <ul>
          <li>Designed and developed UI for fashion, furniture, automotive, and architectural catalogs.</li>
          <li>For this I used Next.js framework and React/Redux to make it more intuitive</li>
          <li>Integrated **interactive 3D visualization** with Three.js for product models and blueprints.</li>
          <li>Built advanced **filtering, sorting, and search** functionalities for user experience.</li>
          <li>Developed a **cohesive branding** with custom logos, color schemes, and imagery.</li>
        </ul>

        <h4>Back-End Development:</h4>
        <ul>
          <li>Architected and maintained **scalable Node.js/Express.js APIs**.</li>
          <li>Designed optimized **MongoDB database schemas** for product and user data.</li>
          <li>Implemented secure **file upload systems** for design assets and 3D models.</li>
          <li>Integrated **payment gateways** and cloud storage for handling large files.</li>
        </ul>

        <h4>Creative Integration:</h4>
        <ul>
          <li>Utilized **Adobe Illustrator, Photoshop, Blender, and InDesign** to create visual assets.</li>
        </ul>
      </div>

      {/* Job 2 */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          <strong>2. Architectural Drafter</strong>
        </h3>
        <p><strong>Jan 2022 - Nov 2023</strong></p>
        <p>
          Drafted structural blueprints for **architects, engineers, contractors, and homeowners** across various counties in the Bay Area.
        </p>

        <h4>Key Responsibilities:</h4>
        <ul>
          <li>Created **detailed blueprints** for residential and commercial projects.</li>
          <li>Used **AutoCAD & SketchUp** for **floor plans, electrical schematics, and elevations**.</li>
          <li>Measured **site plans and buildings**, ensuring accuracy in structural drafting.</li>
          <li>Applied **mathematical calculations** to improve blueprint precision.</li>
        </ul>
      </div>

      {/* Job 3 */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          <strong>3. Emergency Medical Technician & Telemetry Technician - Alameda Health System</strong>
        </h3>
        <p><strong>Aug 2018 - Jan 2021</strong></p>

        <h4>COVID-19 Response Team:</h4>
        <ul>
          <li>Part of the **COVID-19 Hazard First Response Team & Quarantine Team**.</li>
          <li>Worked closely with patients exhibiting **life-threatening conditions**.</li>
          <li>Performed **CPR and emergency life support** procedures.</li>
        </ul>

        <h4>Hospital Duties:</h4>
        <ul>
          <li>Transported critical patients between **ICU, ER, and telemetry units**.</li>
          <li>Diagnosed **abnormal heart rhythms** using EKGs and telemetry monitoring.</li>
          <li>Assisted physicians in **removal of cysts, wound drainage, and overdose treatment**.</li>
          <li>Aided **gunshot victims, psychiatric patients, and trauma cases**.</li>
          <li>Provided **oxygen therapy, blood pressure monitoring, and patient care support**.</li>
        </ul>
      </div>
    </div>
  );
};

export default JobHistory;
