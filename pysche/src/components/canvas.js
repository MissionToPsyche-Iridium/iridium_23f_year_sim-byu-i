import React, { useRef, useState } from 'react';
import "../index.css";
function Canvas() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2);
  const [canvasSize, setCanvasSize] = useState(500);
  const [isDrawing, setIsDrawing] = useState(false);

  const colors = ["#3B515A", "#392919", "#7B5314", "#1B2029", "#E9E9EB", "#7E7157", "#929087", "#CECBC9", "#1F2D3A", "#ADACAB", "#4A4048", "#794F32"];
  const brushSizes = [3, 5, 10];

  const startDrawing = () => setIsDrawing(true);
  const endDrawing = () => setIsDrawing(false);

  const draw = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const resizeCanvas = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setCanvasSize(newSize);
    clearCanvas(); // Clear the canvas when resizing
  };

  return (
    <div className="main-container">
      {/* Toolbar on the left */}
      <div className="toolbar">
        <h2>Tools</h2>
        {/* Color Palette */}
        <div className="colorPalette">
          {colors.map((clr) => (
            <div
              key={clr}
              className="colorSwatch"
              style={{ backgroundColor: clr }}
              onClick={() => setColor(clr)}
            />
          ))}
        </div>
        {/* Brush Size */}
        <div className="brushSizes">
          {brushSizes.map((size) => (
            <button className="brushCanvas" key={size} onClick={() => setBrushSize(size)}>
              {size === 3 ? 'Small' : size === 5 ? 'Medium' : 'Large'}
            </button>
          ))}
        </div>

        {/* Clear Button */}
        <button className="clearButtonCanvas" onClick={clearCanvas}>Clear</button>

        {/* Canvas Resizer */}
        <label>Canvas Size:</label>
        <input type="number" min="100" max="1000" step="50" value={canvasSize} onChange={resizeCanvas} className="canvasSizeInput" />
      </div>

      {/* Canvas Container */}
      <div className="canvas-container">
        <h2>Whiteboard</h2>
        <canvas
          className="canvas"
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseOut={endDrawing}
          onMouseMove={draw}
        />
      </div>
    </div>
  );
}

export default Canvas;
