import React from 'react';

const About = () => {
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
      border: '5px solid blue',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 2s ease-out',
    transform: 'scale(1)',
    transition: 'transform 0.5s ease'
  };

  const headingStyle = {
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px',
    animation: 'slideIn 2s ease',
    transform: 'translateY(0)',
    transition: 'transform 0.5s ease'
  };

  const sectionStyle = {
    marginBottom: '20px',
    animation: 'fadeUp 1.5s ease-in-out',
    opacity: 0,
    animationFillMode: 'forwards'
  };

  const subHeadingStyle = {
    color: '#34495e',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const textStyle = {
    color: '#7f8c8d',
    lineHeight: '1.6'
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0'
  };

  const listItemStyle = {
    color: '#7f8c8d',
    marginBottom: '5px'
  };

  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  const slideInKeyframes = `
    @keyframes slideIn {
      from { transform: translateY(-50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  const fadeUpKeyframes = `
    @keyframes fadeUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  return (
    <div>
      {/* Inject the keyframe styles */}
      <style>{fadeInKeyframes}</style>
      <style>{slideInKeyframes}</style>
      <style>{fadeUpKeyframes}</style>

      <div style={containerStyle}>
        <h1 style={headingStyle}>Sonu Kumar – Full Stack Developer (Frontend & Backend)</h1>

        <div style={sectionStyle}>
          <p style={textStyle}>
            I am Sonu Kumar, a passionate and dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies.
            I hold a Bachelor’s degree in Artificial Intelligence and Data Science Engineering from Anna University, Chennai, where I graduated with a CGPA of 8.6.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeadingStyle}>Technical Skills:</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Frontend Development:</strong></li>
            <ul style={listStyle}>
              <li style={listItemStyle}>Languages & Frameworks: HTML, CSS, JavaScript</li>
              <li style={listItemStyle}>CSS Frameworks: Bootstrap CSS, Tailwind CSS</li>
              <li style={listItemStyle}>JavaScript Libraries: React.js</li>
            </ul>
            <li style={listItemStyle}><strong>Backend Development:</strong></li>
            <ul style={listStyle}>
              <li style={listItemStyle}>Languages: Core Java, Node.js</li>
              <li style={listItemStyle}>Java Frameworks: JDBC, Servlet, Hibernate, Spring Boot</li>
            </ul>
            <li style={listItemStyle}><strong>Databases:</strong> SQL, PostgreSQL</li>
            <li style={listItemStyle}><strong>Tools & Platforms:</strong> Git, RESTful APIs, JSON, Web Development Tools</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeadingStyle}>Professional Experience:</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><strong>Internship at Durga Tech:</strong></li>
            <p style={textStyle}>
              I had the opportunity to intern at Durga Tech as a Web Developer, where I applied my frontend and backend skills to develop dynamic and responsive web applications.
            </p>
            <li style={listItemStyle}><strong>Training at QSpiders:</strong></li>
            <p style={textStyle}>
              To further enhance my expertise, I received extensive training at QSpiders, focusing on Full Stack Java Development. This comprehensive training deepened my understanding of the entire software development lifecycle and equipped me with practical, hands-on experience in building scalable web applications.
            </p>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeadingStyle}>Education:</h3>
          <p style={textStyle}>
            <strong>Bachelor of Engineering (B.E.) in Artificial Intelligence and Data Science Engineering</strong><br />
            Anna University, Chennai<br />
            CGPA: 8.6/10
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeadingStyle}>Conclusion:</h3>
          <p style={textStyle}>
            With a strong technical foundation, hands-on experience in both frontend and backend development, and a passion for continuous learning, 
            I am confident in my ability to contribute to innovative software projects and deliver high-quality web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
