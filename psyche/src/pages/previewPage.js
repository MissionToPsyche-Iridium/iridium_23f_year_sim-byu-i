import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ImageScroller from '../components/imageScroller'; // Import your imageScroller component

function PreviewPage() {
  const location = useLocation();
  const imageData = location.state?.image; // Safely access the image data
  const canvasRef = useRef(null);

  if (!imageData) {
    return <div>No image data available. Please go back and submit a drawing.</div>;
  }

  const downloadOverlayedImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Overlay PNG source (Replace with the path to your overlay PNG file)
    const overlayImageSrc = '/images/PsycheStamp.png';

    // Create new images
    const userImage = new Image();
    const overlayImage = new Image();

    // Set the image sources
    userImage.src = imageData;
    overlayImage.src = overlayImageSrc;

    userImage.onload = () => {
      overlayImage.onload = () => {
        const width = Math.max(userImage.width, overlayImage.width);
        const height = Math.max(userImage.height, overlayImage.height);

        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;

        // Draw the user's image
        ctx.drawImage(userImage, 0, 0, width, height);

        // Draw the overlay on top
        ctx.drawImage(overlayImage, 0, 0, width, height);

        // Generate the combined image as a downloadable file
        const link = document.createElement('a');
        link.download = 'PsycheDrawing.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      };
    };
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        {/* User's Image */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1>Your Drawing</h1>
          <img
            src={imageData}
            alt="Preview of your drawing"
            style={{ border: '1px solid black', maxWidth: '125%', maxHeight: '90%', objectFit: 'contain' }}
          />
        </div>

        {/* ImageScroller */}
        <div style={{ flex: 1 }}>
          <ImageScroller />
        </div>
      </div>

      {/* Download Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={downloadOverlayedImage}
          style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Download Your Drawing
        </button>
      </div>

      {/* Hidden canvas used for generating the download */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
}

export default PreviewPage;
