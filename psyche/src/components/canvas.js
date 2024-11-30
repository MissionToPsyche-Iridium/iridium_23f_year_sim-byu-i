// Authors: Carter Bosen & Brodie Busby
// All Tools and Canvas Functions for Draw Page
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import HintBox from "../components/hints";
import { IoColorFill } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import { TbOval } from "react-icons/tb";
import { GiSpray } from "react-icons/gi";
import { LuUndo2, LuRedo } from "react-icons/lu";
import { FaPaintbrush } from "react-icons/fa6";


import "../index.css";

function Canvas() {
  // useStates/Setters
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2); //New state for the brushes
  const [isDrawing, setIsDrawing] = useState(false); // New state for drawing with the brushes
  const [isFilling, setIsFilling] = useState(false); // New state for the fill tool
  const [isErasing, setIsErasing] = useState(false); // new state for the eraser tool
  const [isSpraying, setIsSpraying] = useState(false); // new state for the spray tool
  const [isOval, setIsOval] = useState(false); // New state for the oval tool
  const [startPoint, setStartPoint] = useState(null); // To store the starting point of the oval
  const [history, setHistory] = useState([]); // To track canvas history
  const [redoStack, setRedoStack] = useState([]); // To track redo history
  const [canvasSize, setCanvasSize] = useState({ width: 700, height: 700 }); // To Track canvas Size 

  // Other Constants
  const colors = ["#3B515A", "#392919", "#7B5314", "#1B2029", "#E9E9EB", "#7E7157", "#929087", "#CECBC9", "#1F2D3A", "#ADACAB", "#4A4048", "#5E1616"];
  const brushSizes = [3, 5, 10]; // brush sizes
  const navigate = useNavigate(); // corectly sends the user to the preview page after submiting
  const canvasRef = useRef(null);

  // Getters
  const getCanvasContext = () => {
    const canvas = canvasRef.current;
    return canvas ? canvas.getContext("2d", { willReadFrequently: true }) : null;
  };

  const getMousePosition = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return { x, y };
  };

  const isActive = {
    fill: isFilling,
    spray: isSpraying,
    erase: isErasing,
    oval: isOval,
  };

  // Useful for activating Brush Color
  const isAnyActive = isFilling || isSpraying || isErasing || isOval;

  // Checks if tool is true or not and then based on the tool toggles true or false
  const toggleTool = (tool) => {

    setIsFilling(tool === "fill" ? !isActive.fill : false);
    setIsSpraying(tool === "spray" ? !isActive.spray : false);
    setIsErasing(tool === "erase" ? !isActive.erase : false);
    setIsOval(tool === "oval" ? !isActive.oval : false);
  };
  // Handles
  const handleMouseMove = (event) => {
    if (!isDrawing) return;

    if (isSpraying) {
      sprayPaint(event);
    } else if (isOval) {
      // Preview logic for drawing oval if needed.
    } else {
      draw(event);
    }
  };
  const handleSubmit = () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL("image/png"); // Save the canvas content as a data URL
    navigate("/preview", { state: { image: imageData } }); // Pass it to the preview page
  };

  const handleCanvasClick = (event) => {
    if (!isFilling) return;

    // Tried changing to getMousePosition but it caused a crash for me
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);

    fillArea(x, y, hexToRgb(color));
  }; // controls the fill tool

  // Drawing Specific Functions
  const startDrawing = (event) => {
    setIsDrawing(true);
    const ctx = getCanvasContext();
    if (!ctx) return;

    const { x, y } = getMousePosition(event);

    if (isOval) {
      setStartPoint({ x, y }); // Store the start point for the oval
    } else {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const endDrawing = (event) => {
    setIsDrawing(false);

    if (isOval && startPoint) {
      drawOval(event); // Draw the oval
    }

    if (isDrawing && !isOval) {
      // Save state after freehand drawing
      saveCanvasState();
    }
    setStartPoint(null); // Reset start point
  };


  const draw = (event) => {
    if (!isDrawing || isFilling || isSpraying) return;

    const ctx = getCanvasContext();

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = isErasing ? "rgb(241, 236, 228)" : color;

    const { x, y } = getMousePosition(event);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const sprayPaint = (event) => {
    if (!isDrawing || !isSpraying) return;

    const ctx = getCanvasContext();
    ctx.fillStyle = color;

    const { x, y } = getMousePosition(event);

    const sprayDensity = 10;

    for (let i = 0; i < sprayDensity; i++) {
      const offsetAngle = Math.random() * 2 * Math.PI;
      const offsetRadius = Math.random() * brushSize;
      const sprayX = x + offsetRadius * Math.cos(offsetAngle);
      const sprayY = y + offsetRadius * Math.sin(offsetAngle);

      ctx.fillRect(sprayX, sprayY, 1, 1);
    } // controls the spray tool

    saveCanvasState(); // Save state after spraying
  };


  const clearCanvas = () => {
    const ctx = getCanvasContext();
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    saveCanvasState(); // Save the cleared state
  }; // controls the clear tool

  // Used for Fill Tool
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

  const fillArea = (x, y, fillColor) => {
    const ctx = getCanvasContext();

    const imageData = ctx.getImageData(0, 0, canvasSize.width, canvasSize.height);
    const data = imageData.data;

    const targetColor = getPixelColor(data, x, y, canvasSize.width);
    if (colorsMatch(targetColor, fillColor)) return; // Avoid redundant fill

    const stack = [[x, y]];

    while (stack.length) {
      const [curX, curY] = stack.pop();
      const idx = (curY * canvasSize.width + curX) * 4;

      if (colorsMatch(getPixelColor(data, curX, curY, canvasSize.width), targetColor)) {
        setPixelColor(data, idx, fillColor);
        stack.push([curX + 1, curY], [curX - 1, curY], [curX, curY + 1], [curX, curY - 1]);
      }
    } // makes sure the fill tool does corect action

    ctx.putImageData(imageData, 0, 0);
    saveCanvasState(); // Save the state after the fill operation
  };

  const colorsMatch = (color1, color2) => {
    return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2];
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const drawOval = (event) => {
    const ctx = getCanvasContext();

    const { x: endX, y: endY } = getMousePosition(event); // Get mouse position
    const { x: startX, y: startY } = startPoint; // Start point from state  

    const centerX = (startX + endX) / 2;
    const centerY = (startY + endY) / 2;
    const radiusX = Math.abs(endX - startX) / 2;
    const radiusY = Math.abs(endY - startY) / 2;

    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.stroke();
  }; // controls the oval tool, makes sure oval is drawn correctly


  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    const currentState = canvas.toDataURL(); // Get current canvas as a data URL
    setHistory((prev) => [...prev, currentState]); // Save state to history
    setRedoStack([]); // Clear redo stack when new changes occur
  };

  const undo = () => {
    if (history.length === 0) return; // Nothing to undo

    const lastState = history.pop(); // Remove the most recent state
    setRedoStack((prev) => [lastState, ...prev]); // Add it to the redo stack
    setHistory([...history]); // Update the history

    const ctx = getCanvasContext();
    const img = new Image();

    // Load the previous state or clear if none
    const previousState = history[history.length - 1] || "";
    img.src = previousState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height); // Clear canvas
      if (previousState) ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
    };
  };

  const redo = () => {
    if (redoStack.length === 0) return; // Nothing to redo

    const nextState = redoStack.shift(); // Remove the most recent redo state
    setHistory((prev) => [...prev, nextState]); // Add it back to the history
    setRedoStack([...redoStack]); // Update redo stack

    const ctx = getCanvasContext();
    const img = new Image();

    img.src = nextState; // Load the redo state
    img.onload = () => {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height); // Clear canvas
      ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
    };
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
        {/* Change color of Brush based on if tools are active */}
        <div className='Brush-Icon'>
          {isAnyActive ? <FaPaintbrush style={{ fontSize: "1.5rem", color: "black" }} /> : <FaPaintbrush style={{ fontSize: "1.5rem", color: "#9C3852" }} />} Brush
        </div>
        <div className="brushSizes">
          {brushSizes.map((size, index) => (
            <button
              className={'brushCanvas' + index}
              key={size}
              onClick={() => setBrushSize(size)}
            >

            </button>
          ))}
        </div>
        <div className='brushOptions'>
          {/* Change color of Tools based on if enabled or not using toggleTool. 
        ToolTip provides a label once hovering over tool  */}
          <Tooltip title="Fill">
            <button className="canvasButton" onClick={() => toggleTool("fill")}>
              {isFilling ? <IoColorFill style={{ fontSize: "2rem", color: "#9C3852" }} /> :
                <IoColorFill style={{ fontSize: "1.5rem" }} />}  Fill
            </button>
          </Tooltip>
          <Tooltip title="Eraser">
            <button className="canvasButton" onClick={() => toggleTool("erase")}>
              {isErasing ? <FaEraser style={{ fontSize: "2rem", color: "#9C3852" }} /> :
                <FaEraser style={{ fontSize: "1.5rem" }} />} Erase
            </button>
          </Tooltip>
          <Tooltip title="Spray">
            <button className="canvasButton" onClick={() => toggleTool("spray")}>
              {isSpraying ? <GiSpray style={{ fontSize: "2rem", color: "#9C3852" }} />
                : <GiSpray style={{ fontSize: "1.5rem" }} />} Spray
            </button>
          </Tooltip>
          <Tooltip title="Oval">
            <button className="canvasButton" onClick={() => toggleTool("oval")}>
              {isOval ? (
                <TbOval style={{ fontSize: "2rem", color: "#9C3852" }} />
              ) : (
                <TbOval style={{ fontSize: "1.5rem" }} />
              )} Oval
            </button>
          </Tooltip>
          {/* Undo and Redo buttons */}

          <Tooltip title="Undo">
            <button className="canvasButton" onClick={undo}><LuUndo2 /></button>
          </Tooltip>
          <Tooltip title="Redo">
            <button className="canvasButton" onClick={redo}><LuRedo /></button>
          </Tooltip>
          <button className="canvasButton" onClick={clearCanvas}>Clear</button>
          <button onClick={handleSubmit} className="canvasButton">
            Submit Drawing
          </button>
        </div>
      </div>
      <div className="canvas-container">
        <h2>Whiteboard</h2>
        <canvas
          className="canvas"
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          onMouseDown={(e) => { isFilling ? handleCanvasClick(e) : startDrawing(e); }}
          onMouseUp={endDrawing}
          onMouseOut={endDrawing}
          onMouseMove={handleMouseMove}
        />
        <div>
          {/* Import Hint Box at bottom of page*/}
          <HintBox />
        </div>
      </div>
    </div>
  );
}

export default Canvas;
