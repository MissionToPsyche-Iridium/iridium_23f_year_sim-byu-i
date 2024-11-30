// Authors: Carter Bosen & Brodie Busby
// Drawing Page that imports canvas 
import React, { useRef } from 'react';
import Canvas from '../components/canvas'; // Import your Canvas component
function DrawingPage() {

  const canvasRef = useRef(null);
  return (
    <div>
      <Canvas ref={canvasRef} /> {/* Pass the ref to the Canvas */}
    </div>
  );
}

export default DrawingPage;
