import React, { useRef, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

import "../index.css";

function Canvas() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2);
  const [canvasSize, setCanvasSize] = useState(500);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [isSpraying, setIsSpraying] = useState(false);

  const colors = ["#3B515A", "#392919", "#7B5314", "#1B2029", "#E9E9EB", "#7E7157", "#929087", "#CECBC9", "#1F2D3A", "#ADACAB", "#4A4048", "#5E1616"];
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

  const sprayPaint = (event) => {
    if (!isDrawing || !isSpraying) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const sprayDensity = 20;

    for (let i = 0; i < sprayDensity; i++) {
      const offsetAngle = Math.random() * 2 * Math.PI;
      const offsetRadius = Math.random() * brushSize;
      const sprayX = x + offsetRadius * Math.cos(offsetAngle);
      const sprayY = y + offsetRadius * Math.sin(offsetAngle);

      ctx.fillRect(sprayX, sprayY, 1, 1);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // const resizeCanvas = (e) => {
  //   const newSize = parseInt(e.target.value, 10);
  //   setCanvasSize(newSize);
  //   clearCanvas();
  // };

  const toggleFillMode = () => {
    setIsFilling(!isFilling);
    setIsSpraying(false);
    setIsErasing(false);
  };

  const toggleEraser = () => {
    setIsErasing(!isErasing);
    setIsSpraying(false);
    setIsFilling(false);
  };

  const toggleSprayPaint = () => {
    setIsSpraying(!isSpraying);
    setIsErasing(false);
    setIsFilling(false);
  };

  const handleCanvasClick = (event) => {
    if (!isFilling) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);

    fillArea(x, y, hexToRgb(color));
  };

  const fillArea = (x, y, fillColor) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const targetColor = getPixelColor(data, x, y, canvas.width);
    if (colorsMatch(targetColor, fillColor)) return;

    const stack = [[x, y]];

    while (stack.length) {
      const [curX, curY] = stack.pop();
      const idx = (curY * canvas.width + curX) * 4;

      if (colorsMatch(getPixelColor(data, curX, curY, canvas.width), targetColor)) {
        setPixelColor(data, idx, fillColor);
        stack.push([curX + 1, curY], [curX - 1, curY], [curX, curY + 1], [curX, curY - 1]);
      }
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const getPixelColor = (data, x, y, width) => {
    const idx = (y * width + x) * 4;
    return [data[idx], data[idx + 1], data[idx + 2], data[idx + 3]];
  };

  const setPixelColor = (data, idx, [r, g, b]) => {
    data[idx] = r;
    data[idx + 1] = g;
    data[idx + 2] = b;
    data[idx + 3] = 255;
  };

  const colorsMatch = (color1, color2) => {
    return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2];
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
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
          {brushSizes.map((size, index) => (
            <button
              className={'brushCanvas' + index}
              key={size}
              onClick={() => setBrushSize(size)}
            >
              {/* {size === 3 ? 'Small' : size === 5 ? 'Medium' : 'Large'} */}
            </button>
          ))}
        </div>
        <Tooltip title="Fill">
          <button className="fillButton" onClick={toggleFillMode}>
            {isFilling ? "Disable Fill" : "Enable Fill"}
          </button>
        </Tooltip>

        <Tooltip title="Eraser">

          <button className="eraserButton" onClick={toggleEraser}>
            {isErasing ? "Disable Eraser" : "Enable Eraser"}
          </button>
        </Tooltip>

        <Tooltip title="Spray">

          <button className="sprayButton" onClick={toggleSprayPaint} >
            {isSpraying ? "Disable Spray" : "Enable Spray"}

          </button>
        </Tooltip>

        <Tooltip title="Clear">

          <button className="clearButton" onClick={clearCanvas}>Clear</button>
        </Tooltip>

        {/* <label>Canvas Size:</label>
        <input type="number" min="100" max="1000" step="50" value={canvasSize} onChange={resizeCanvas} className="canvasSizeInput" /> */}
      </div>

      <div className="canvas-container">
        <h2>Whiteboard</h2>
        <canvas
          className="canvas"
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          onMouseDown={(e) => { isFilling ? handleCanvasClick(e) : startDrawing(e); }}
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
