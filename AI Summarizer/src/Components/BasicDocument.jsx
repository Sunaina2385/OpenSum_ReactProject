import React, { useState } from 'react';
import jsPDF from 'jspdf';

function TextToPDFConverter({text}) {
  const [textToConvert, setTextToConvert] = useState(text);

  const downloadPDF = () => {
    const content = text;
    const pdf = new jsPDF();
    const x = 10; // Adjust the x-coordinate
    const y = 20; // Adjust the y-coordinate

    const maxWidth = 190;

    // Split the content into an array of lines based on the maxWidth
    const textLines = pdf.splitTextToSize(content, maxWidth);
  
    // Add each line to the PDF
    textLines.forEach((line, index) => {
      pdf.text(line, x, y + index * 10); // Adjust the y-coordinate to control line spacing
    });
    
    pdf.save('converted.pdf');
  };

  const buttonStyle = {
    background: 'black',     // Blue background color
    color: 'white',            // White text color
    padding: '12px 24px',      // Padding
    border: 'none',            // Remove border
    borderRadius: '4px',       // Rounded corners
    cursor: 'pointer',         // Pointer cursor on hover
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Box shadow for depth
    transition: 'background 0.3s ease-in-out',    // Smooth background transition
  };

  const containerStyle = {
    margin: '20px auto',        // Center the container horizontally
    textAlign: 'center',        // Center text horizontally
    fontFamily: 'Arial, sans-serif',  // Font
  };

  return (
    <div style={containerStyle}>
      <button onClick={downloadPDF} style={buttonStyle}>Download PDF</button>
    </div>
  );
}

export default TextToPDFConverter;
