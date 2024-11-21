import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageScroller from '../components/imageScroller'; // Import your imageScroller component

function PreviewPage() {
  const location = useLocation();
  const imageData = location.state?.image; // Safely access the image data

  if (!imageData) {
    return <div>No image data available. Please go back and submit a drawing.</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}>
      {/* User's Image */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <h1>Your Drawing</h1>
        <img
          src={imageData}
          alt="Preview of your drawing"
          style={{ border: '1px solid black', maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>

      {/* ImageScroller */}
      <div style={{ flex: 1 }}>
        <ImageScroller />
      </div>
    </div>
  );
}

export default PreviewPage;
