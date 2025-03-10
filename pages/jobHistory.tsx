import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const JobHistoryContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 20px;
  perspective: 1000px; /* Creates 3D effect */
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  will-change: transform, box-shadow;

  &:hover {
    transform: rotateX(5deg) rotateY(5deg) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

const JobHistory = () => {
  return (
    <JobHistoryContainer>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          textDecoration: "underline",
        }}
      >
        Job History
      </h1>

      {/* Job 1 */}
      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <h3>
          <strong>1. Founding Software Engineer - LeSavantDon</strong>
        </h3>
        <p>
          <strong>Jan 1, 2025 - Present</strong>
        </p>
        <p>
          As the founder and lead developer, I manage both technical development
          and creative direction, integrating multiple disciplines such as art,
          design, architecture, and fashion.
        </p>
        <h4>Front-End Development:</h4>
        <ul>
          <p>
            Designed UI for fashion, furniture, automotive, and architecture
            catalogs.
          </p>
          <p>Used Next.js & React/Redux for interactivity.</p>
          <p>Integrated interactive 3D visualization with Three.js.</p>
        </ul>
      </Card>

      {/* Job 2 */}
      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3>
          <strong>2. Architectural Drafter</strong>
        </h3>
        <p>
          <strong>Jan 2022 - Nov 2023</strong>
        </p>
        <p>
          Drafted structural blueprints for architects, engineers, and
          contractors across the Bay Area.
        </p>
        <ul>
          <p>
            Created detailed blueprints for residential and commercial projects.
          </p>
          <p>Used AutoCAD & SketchUp for floor plans and schematics.</p>
        </ul>
      </Card>

      {/* Job 3 */}
      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3>
          <strong>
            3. Emergency Medical Technician & Telemetry Technician
          </strong>
        </h3>
        <p>
          <strong>Aug 2018 - Jan 2021</strong>
        </p>
        <h4>COVID-19 Response Team:</h4>
        <ul>
          <p>Part of the COVID-19 Hazard First Response Team.</p>
          <p>Performed CPR and emergency life support procedures.</p>
        </ul>
      </Card>
    </JobHistoryContainer>
  );
};

export default JobHistory;
