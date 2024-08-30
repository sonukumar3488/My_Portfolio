import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        <p style={footerText}>
          📞 Phone: <a href="tel:8271712001" style={linkStyle}>8271712001</a>
        </p>
        <p style={footerText}>
          ✉️ Email: <a href="mailto:sonukumar943488@gmail.com" style={linkStyle}>sonukumar943488@gmail.com</a>
        </p>
        <p style={designText}>
          Design by 💖 <span style={animatedTextStyle}>Er Sonu Kumar</span>
        </p>
      </div>
    </footer>
  );
};

const footerStyle = {
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  width: '100%',
  // boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
  zIndex: '100',
  position: 'relative', // Important for animation
};

const footerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const footerText = {
  margin: '0.5rem 0',
  fontSize: '1.1rem',
  fontFamily: "'Roboto', sans-serif",
};

const linkStyle = {
  color: '#ffeb3b',
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
};

linkStyle[':hover'] = {
  color: '#fff',
};

const designText = {
  marginTop: '1rem',
  fontSize: '1rem',
  fontFamily: "'Roboto', sans-serif",
  opacity: '0.8',
};

const animatedTextStyle = {
  color: '#ffeb3b',
  animation: 'pulse 2s infinite', // Simple pulsing animation
};

// Adding keyframe animation for the text
const keyframes = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

// Adding keyframes to document's head
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Footer;
