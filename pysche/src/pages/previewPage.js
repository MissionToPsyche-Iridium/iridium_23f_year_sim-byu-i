import React from 'react';
import { useLocation } from 'react-router-dom';

function PreviewPage() {
  const location = useLocation();
  const imageData = location.state?.image; // Safely access the image data

  if (!imageData) {
    return <div>No image data available. Please go back and submit a drawing.</div>;
  }

  return (
    <div>
      <h1>Preview</h1>
      <img src={imageData} alt="Preview of your drawing" style={{ border: '1px solid black', maxWidth: '100%' }} />
    </div>
  );
}

export default PreviewPage;
