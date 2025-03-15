// pages/resume.tsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  gap: 20px;
  perspective: 1000px; /* Creates 3D effect */
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
  padding: 20px;
  width: 100%;
  max-width: 2000px; /* Adjust based on layout needs */
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(246, 241, 241, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgb(246, 244, 244);
  will-change: transform, box-shadow;
  flex: 1;
  text-align: center;
  min-width: 300px;

  &:hover {
    transform: rotateX(5deg) rotateY(5deg) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

const Resume = () => {
  return (
    <SkillContainer>
      <SectionWrapper>
        {/* Skills Section */}
        <Card whileHover={{ scale: 1.05 }}>
          <h1 style={{ textDecoration: "underline" }}>Javascript</h1>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Javascript ECMA Script - ES14</li>
            <li> Familiar with Figma and UI/UX web frame design concepts</li>
            <li> MERN Development</li>
            <li> Next.js; frameworks and templates for UI development</li>
            <li> React.js for localState mangagement and building reusable components and integration w/ Virtual DOM </li>
            <li>React.js router library for handling routing using {'<Link>'} & {'<Route>'} </li>
            <li> Angular.js for Front-End Develpoment</li>
            <li> Familiar with Framer Motion, Three.js and Anime.js </li>
            <li> Redux- for global state mangement</li>
            <li> Passport.js, JWT and bcyrpt.js for authentication and security.</li> 
            <li></li>
            <li> Typescript</li>
            <li> API development and backend architecture w/ Node.js & Express & Mongoose</li>
            <li> Version Control with Git</li>
            <li> SCRUM Development & Agile Development & Problem Solving</li>
            <li> Mocha, Chai, Jasmine Testing</li>
            <li> Postman and cURL for testing API, debugging requests, and troubleshooting connectivity issues</li>
            <li> Tailwind CSS; component based UI development + HTML5.3 + Bootstrap + Chakra UI </li>
           <li> AJAX and other HTTP requests inlcuding POST, PUT, DELETE & PUT</li>
           <li> CORS- enabling cors poilcy to connect specific domains with one another </li>
            <li> Familiar w/ libraries with Chart.js, D3.js, Plotly of visualizing data in pie charts, line charts and gauges </li>
            
          </ul>
        </Card>

        <Card whileHover={{ scale: 1.05 }}>
          <h1 style={{ textDecoration: "underline" }}>Databases</h1>
          <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>MongoDB + Mongoose, Mongo Compass & Atlas</li>
          <li>Vector Database Development</li>
          <li>MySQL Database</li>
          <li>Seeding data using Mongoose</li>
          <li>Sharding, Cleaning, Integrating data into Pipelines </li>
          <li>Designed and implemented MongoDB schemas for a product catalog and user management.</li>
          <li>Integrated MongoDB with Express.js for handling API requests (CRUD operations).</li>
          <li>Used Mongoose ODM for schema validation and query optimizations.</li>
          <li>Implemented indexing and aggregation pipelines to improve query performance.</li>
          <li>Worked with MongoDB Compass for database inspection and debugging.</li>
          <li>Seeded databases using scripts to populate test and data.</li>
          <li>Data propogation of the  process of transferring, updating, and synchronizing data across different systems, databases, or components in a distributed environment.  </li>

          </ul>
        </Card>
        {/* Languages Section */}
        <Card whileHover={{ scale: 1.05 }}>
          <h1 style={{ textDecoration: "underline" }}>Python</h1>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li> Getting familiar with:</li>
              <li>~ Object-Oriented Programming and fundamentlas of syntax, data structures, lists, dictionaries, tuples, sets and functions</li>
              <li>~ Conccurency/Paralellism: familiarity with threading, multiprocessing, and asyncio for handling paralell computation tasks; especially for high-performance computing in nueral networks</li>
              <h3 style={{ textDecoration: "underline" }}>Machine Learning Frameworks</h3>
              <li>~ TesnorFlow and Keras for deep learning models. Nueral Networks like CNNs, RNNs and GANs</li>
              <li>~ PyTorch-deep learning framework</li>
              <li>~ Scikit-learn for regression, clustering, and classification</li>
              <h3 style={{ textDecoration: "underline" }}>Data Handling and Analysis</h3>
              <li> ~ NumPy- for numerical operations, manipulating arrays and matrices for large scale neural data and image processing</li>
              <li>~ Pandas for structured data sets CSV, Excel and JSON. Data manipulation tasks like filtering, grouping and joining datasets.</li>
              <li> ~ SciPy:For scientific computing optimization, linear algebra, stastics and numerical routines</li>
              <li>~ Matplotlib/Seaborn: for creating static, animated and interactive plots. Used for visualizing nueral data and model performance. </li>
              <h3 style={{ textDecoration: "underline" }}>Deep Learning Specializing</h3>
              <li> ~ Keras: Building and Training deep learning models</li>
              <li> ~ Fast.ai: For training deep learning models</li>
              <li> ~ OpenCV: used for computer vision tasks; for processing and analyzing brain imaging data like MRI and CT scans</li>
              <li>~ Reinforcement Learning (RL): Learn RL algorithms i.e., Q-learning, policy gradient methods, Deep Q Networks DQN, as RL is often used for training agents.</li>
              <li> ~ OpenAI Gym: for designing and training reinforcement learning algorithms in a simulated environment</li>
              <li>~ TensorFlow Agents or RLlib: for reinforcement learning specifically</li>
              <h3 style={{ textDecoration: "underline" }}>Neuroimaging and Signal Processing</h3>
              <li> ~ MNE-Python: for analyzing brain signal and working brain data and time frequency analysis, source localization and visualization of brain activity</li>
              <li> ~ NIfTI: familiarity with NIfTI image format for storing nueroimaging, and tools like Nibabel for reading and writing NIfTi files</li>
              <li> ~ PyDICOM: working with DICOM files, files used to extract and manipulate imaging data. </li>
              <li>~ SciPy and Singal Processing: For processing signals and performing tasks like filtering, fourier transforms and wavelet analysis</li>
              
               
            </ul>
        </Card>

        
        <Card whileHover={{ scale: 1.05 }}>
          <h1 style={{ textDecoration: "underline" }}>Deployments & Cloud  Computing</h1>
          <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Vercel, Heroku App Deployment</li>
          <h3 style={{ textDecoration: "underline" }}>Cloud and Infrastructure</h3>
              <li>AWS/GCP/Azure: familiraity with cloud Platforms for manaiging resources, scaling and deploying machine learning models and data pipelines </li>
              <li>Docker: Containerization for running applications in isolated environments, useful for deploying models and maintaining a consistent development environment.</li>
              <li>Kubernetes: For managing containerized applications at scale, especially useful for machine learning model deployment and handling large-scale computational workloads.</li>
              <li>Apache Kafka: For real-time data streaming and processing of large volumes of data, especially in high-frequency neural data analysis.</li>

          </ul>
        </Card>

        <Card whileHover={{ scale: 1.05 }}>
          <h1 style={{ textDecoration: "underline" }}>Experimentation &  Collaboration Tools</h1>
          <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Vercel, Heroku App Deployment</li>
          <h3 style={{ textDecoration: "underline" }}>Cloud and Infrastructure</h3>
            <li>Jupyter Notebooks:for interactive data analysis, experimentation and prototyping, especially for research and data exploration. </li>
            <li>Wegihts & Biases: A tool for tracking machine learning experiments and visualizing training runs and performance metrics.</li>
            <li>MLflow: Tracking machine learning experiments, models and results.</li>
               </ul>
        </Card>
      </SectionWrapper>

      {/* Resume Section */}
      <h1 style={{ textDecoration: "underline", textAlign: "center" }}>Resume</h1>
      <div style={{ marginTop: "0px", width: "100%", margin: "100 auto" }}>
        <embed src="/resume31424.pdf" width="100%" height="1050px" type="application/pdf" />
      </div>
    </SkillContainer>
  );
};

export default Resume;
