import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(10, 20, 0, 0.1)',
    borderRadius: '20px',
    maxWidth: '800px',
    margin: '40px auto',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#2c3e50',
  };

  const contactIconStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  };

  const iconLinkStyle = {
    color: '#2c3e50',
    fontSize: '2rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  const iconHoverStyle = {
    color: '#007bff',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '5px 2px 10px 5px rgb(200, 244, 11)',
    width: '100%',
    border: '2px solid #ffeb3b',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const formStyleActive = {
    ...formStyle,
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.6)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    outline: 'none',
  };

  const textAreaStyle = {
    ...inputStyle,
    minHeight: '100px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const successMessageStyle = {
    color: 'green',
    fontSize: '1.2rem',
    marginTop: '20px',
    animation: 'fadeIn 1s',
  };

  const keyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    const formData = new FormData(e.target);
    const name = formData.get('name');
    
    // Set the user's name and show the success message
    setUserName(name);
    setFormSubmitted(true);

    // Simulate a form reset and hide message after a timeout (optional)
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset(); // Reset the form fields
    }, 5000);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>CONTACT ME</h1>

      <div style={contactIconStyle}>
        <a href="https://www.linkedin.com/in/sonu-kumar-5a8439309/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
          onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
          <CiLinkedin />
        </a>

        <a href="https://x.com/kumar_sonu47162" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
          onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
          <FaSquareXTwitter />
        </a>

        <a href="https://github.com/sonukumar3488" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
          onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
          <FaGithubSquare />
        </a>

        <a href="https://www.instagram.com/s.sonu_kumar_?igsh=MXVheW12OGFieXVleQ==" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
          onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
          <FaInstagram />
        </a>

        <a href="mailto:sonukumar943488@gmail.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
          onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
          onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
          <SiGmail />
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        style={formSubmitted ? formStyleActive : formStyle}
      >
        <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
        <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
        <textarea name="message" placeholder="Your Message" required style={textAreaStyle}></textarea>

        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Submit Form
        </button>
      </form>

      {formSubmitted && (
        <p style={successMessageStyle}>
          Thank you {userName}, your message has been successfully sent!
        </p>
      )}
    </div>
  );
};

export default Contact;
















//import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithubSquare } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

// const Contact = () => {
//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '40px',
//     fontFamily: 'Arial, sans-serif',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     borderRadius: '10px',
//     maxWidth: '800px',
//     margin: '40px auto',
//     textAlign: 'center',
//   };

//   const headingStyle = {
//     fontSize: '2rem',
//     marginBottom: '20px',
//     color: '#2c3e50',
//   };

//   const contactIconStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//     marginBottom: '30px',
//   };

//   const iconLinkStyle = {
//     color: '#2c3e50',
//     fontSize: '2rem',
//     textDecoration: 'none',
//     transition: 'color 0.3s',
//   };

//   const iconHoverStyle = {
//     color: '#007bff',
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '15px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     fontSize: '16px',
//     outline: 'none',
//   };

//   const textAreaStyle = {
//     ...inputStyle,
//     minHeight: '100px',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     fontSize: '16px',
//     color: '#fff',
//     backgroundColor: '#007bff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     width: '100%',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#0056b3',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headingStyle}>CONTACT ME</h1>

    
//       <div style={contactIconStyle}>
//         <a href="https://www.linkedin.com/in/sonu-kumar-5a8439309/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
//           onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
//           onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
//           <CiLinkedin />
//         </a>

//         <a href="https://x.com/kumar_sonu47162" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
//           onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
//           onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
//           <FaSquareXTwitter />
//         </a>

//         <a href="https://github.com/sonukumar3488" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
//           onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
//           onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
//           <FaGithubSquare />
//         </a>

//         <a href="https://www.instagram.com/s.sonu_kumar_?igsh=MXVheW12OGFieXVleQ==" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
//           onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
//           onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
//           <FaInstagram />
//         </a>

//         <a href="mailto:sonukumar943488@gmail.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
//           onMouseEnter={(e) => e.target.style.color = iconHoverStyle.color}
//           onMouseLeave={(e) => e.target.style.color = iconLinkStyle.color}>
//           <SiGmail />
//         </a>
//       </div>

    
//       <form action="https://api.web3forms.com/submit" method="POST" style={formStyle}>
//         <input type="hidden" name="access_key" value="bfe68d00-c8ff-4ae3-b7af-80fe0d5ae40f" />

//         <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
//         <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
//         <textarea name="message" placeholder="Your Message" required style={textAreaStyle}></textarea>

//         <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

//         <button
//           type="submit"
//           style={buttonStyle}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
//         >
//           Submit Form
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
