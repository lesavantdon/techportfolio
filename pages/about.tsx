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
            & math courses, with an emphasis on Microbiology.
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
            Outside of coding, I enjoy exploring new technologies, reading,
            exercising, camping, and spending time with family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
