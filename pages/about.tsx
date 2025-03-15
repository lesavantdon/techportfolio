const About = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          textDecoration: "underline",
        }}
      >
        About Me
      </h1>

      {/* Professional Section */}
      <div style={{ position: "relative", height: "30vh", padding: "50px" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // This will center the card
            padding: "30px", // Increased padding for more space inside
            width: "90%", // Adjust the width as needed
            borderRadius: "20px",
            boxShadow: "2px 4px 4px 4px rgba(243, 241, 241, 0.99)",
            backgroundColor: "transparent",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              textDecoration: "underline",
            }}
          >
            Professional
          </h2>
          <p>
            I’m a software engineer passionate about developing web
            applications, biotechnology, and machine learning. I have a strong
            foundation in front-end and back-end development, data structures,
            and algorithms. My educational background includes extensive science
            & math courses, with an emphasis on Microbiology/ Biomedical
            Laboratory Science. I have extensive heatlhcare experience as an EMT
            & Telemetry Technician in San Leandro Hospital for the Alameda
            Health System. With my extensive medical background and hard science
            classes, I am a very valuable player for an addition on any team on
            account of my critical thinking and analytical skills.
            <li>
              I am very passionate about the biotechnology sector and am
              continuously expanding upon my current skillset to make an impact
              in the sector as a molecular scientist and software engineer.{" "}
            </li>
          </p>
        </div>
      </div>

      {/* Recreational Section */}
      <div style={{ position: "relative", height: "30vh", padding: "50px" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // This will center the card
            padding: "30px", // Increased padding for more space inside
            width: "90%", // Adjust the width as needed
            borderRadius: "20px",
            boxShadow: "2px 4px 4px 4px rgba(243, 241, 241, 0.99)",
            backgroundColor: "transparent",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "0px",
              textDecoration: "underline",
            }}
          >
            Recreational
          </h2>
          <p>
            Outside of coding, I enjoy exploring new technologies and scientific
            discoveries. I spend my free time creating and listening to music,
            painting, sketching and 3D modeling with blender. I am an avid
            enthusiast of ayurvedic nutrition, architecture, painting, music,
            art, cars, motorcycles. I also enjoy badminton, surfing, reading,
            exercising, camping, and spending time with family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
