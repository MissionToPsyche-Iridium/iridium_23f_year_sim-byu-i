import React, { useState } from 'react';

const ImageScroller = () => {
  // Define your image paths
  const images = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length // Loop back to the last image
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Artist Rendition</h2>
      <div style={{ maxWidth: '65%', maxHeight: '100%', margin: 'auto', position: 'relative' }}>
        {/* Display current image */}
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }} 
        />

        {/* Navigation buttons */}
        <button 
          onClick={handlePrevious} 
          style={{
            position: 'absolute', 
            left: '10px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            zIndex: 1 
          }}
        >
          &#8592;
        </button>

        <button 
          onClick={handleNext} 
          style={{
            position: 'absolute', 
            right: '10px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            zIndex: 1 
          }}
        >
          &#8594;
        </button>
      </div>
      <p>{`Image ${currentIndex + 1} of ${images.length}`}</p>
    </div>
  );
};

export default ImageScroller;