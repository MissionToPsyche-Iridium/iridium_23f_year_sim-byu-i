import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import DrawingPage from './pages/drawingPage';
import TriviaPage from './pages/triviaPage';
import ExamplePage from './pages/examplePage';
import CreditsPage from './pages/creditsPage';
import HomePage from './pages/homePage';
import PreviewPage from './pages/previewPage'; // Import the PreviewPage

function App() {
  const [submittedImage, setSubmittedImage] = useState(null); // State to hold the submitted image

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Example' element={<ExamplePage />} />
          <Route 
            path='/Drawing' 
            element={<DrawingPage onSubmit={setSubmittedImage} />} 
          /> {/* Pass the setter function to DrawingPage */}
          <Route 
            path='/Preview' 
            element={<PreviewPage image={submittedImage} />} 
          /> {/* Pass the image to PreviewPage */}
          <Route path='/Trivia' element={<TriviaPage />} />
          <Route path='/Credits' element={<CreditsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
