import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Canvas from '../components/canvas'; // Import your Canvas component

function DrawingPage({ onSubmit }) {
  const canvasRef = useRef(null);
  const navigate = useNavigate(); // Ensure useNavigate is imported here

  const handleSubmit = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL(); // Convert canvas to a data URL
      onSubmit(image); // Save the image in the parent state
      navigate('/Preview'); // Navigate to the Preview page
    } else {
      console.error('Canvas not found.');
    }
  };

  return (
    <div>
      <h1>Drawing Page</h1>
      <Canvas ref={canvasRef} /> {/* Pass the ref to the Canvas */}
      <button onClick={handleSubmit}>Submit Drawing</button>
    </div>
  );
}

export default DrawingPage;