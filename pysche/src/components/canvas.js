import React, { useRef, useState } from 'react';
import "../index.css";

function Canvas() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2);
  const [canvasSize, setCanvasSize] = useState(500);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [isSpraying, setIsSpraying] = useState(false); // New state for spray paint mode

  const colors = ["#3B515A", "#392919", "#7B5314", "#1B2029", "#E9E9EB", "#7E7157", "#929087", "#CECBC9", "#1F2D3A", "#ADACAB", "#4A4048", "#794F32"];
  const brushSizes = [3, 5, 10];

  const startDrawing = (event) => {
    setIsDrawing(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const endDrawing = () => setIsDrawing(false);

  const draw = (event) => {
    if (!isDrawing || isFilling || isSpraying) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = isErasing ? "rgb(241, 236, 228)" : color;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // Spray paint function
  const sprayPaint = (event) => {
    if (!isDrawing || !isSpraying) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const sprayDensity = 20; // Number of dots per spray

    for (let i = 0; i < sprayDensity; i++) {
      const offsetAngle = Math.random() * 2 * Math.PI;
      const offsetRadius = Math.random() * brushSize;
      const sprayX = x + offsetRadius * Math.cos(offsetAngle);
      const sprayY = y + offsetRadius * Math.sin(offsetAngle);

      ctx.fillRect(sprayX, sprayY, 1, 1); // Draw each dot as a 1x1 pixel rectangle
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const resizeCanvas = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setCanvasSize(newSize);
    clearCanvas();
  };

  const toggleFillMode = () => {
    setIsFilling(!isFilling);
    setIsSpraying(false); // Disable spray mode if fill mode is active
    setIsErasing(false);
  };

  const toggleEraser = () => {
    setIsErasing(!isErasing);
    setIsSpraying(false); // Disable spray mode if eraser is active
    setIsFilling(false);
  };

  const toggleSprayPaint = () => {
    setIsSpraying(!isSpraying);
    setIsErasing(false); // Disable eraser mode if spray mode is active
    setIsFilling(false);
  };

  return (
    <div className="main-container">
      <div className="toolbar">
        <h2>Tools</h2>
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
        <div className="brushSizes">
          {brushSizes.map((size) => (
            <button className="brushCanvas" key={size} onClick={() => setBrushSize(size)}>
              {size === 3 ? 'Small' : size === 5 ? 'Medium' : 'Large'}
            </button>
          ))}
        </div>

        <button className="fillButton" onClick={toggleFillMode}>
          {isFilling ? "Disable Fill" : "Enable Fill"}
        </button>

        <button className="eraserButton" onClick={toggleEraser}>
          {isErasing ? "Disable Eraser" : "Enable Eraser"}
        </button>

        <button className="sprayButton" onClick={toggleSprayPaint}>
          {isSpraying ? "Disable Spray" : "Enable Spray"}
        </button>

        <button className="clearButtonCanvas" onClick={clearCanvas}>Clear</button>

        <label>Canvas Size:</label>
        <input type="number" min="100" max="1000" step="50" value={canvasSize} onChange={resizeCanvas} className="canvasSizeInput" />
      </div>

      <div className="canvas-container">
        <h2>Whiteboard</h2>
        <canvas
          className="canvas"
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          onMouseDown={(e) => { startDrawing(e); }}
          onMouseUp={endDrawing}
          onMouseOut={endDrawing}
          onMouseMove={(e) => {
            isSpraying ? sprayPaint(e) : draw(e);
          }}
        />
      </div>
    </div>
  );
}

export default Canvas;
