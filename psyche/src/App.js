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
import SourcesPage from './pages/sourcesPage.js';


function App() {
  const [submittedImage, setSubmittedImage] = useState(null); // State to hold the submitted image

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Example' element={<ExamplePage />} />
          <Route path='/Drawing'
            element={<DrawingPage onSubmit={setSubmittedImage} />}
          />
          <Route path='/Preview'
            element={<PreviewPage image={submittedImage} />} />
          <Route path='/Trivia' element={<TriviaPage />} />
          <Route path='/Credits' element={<CreditsPage />} />
          <Route path='/Sources' element={<SourcesPage/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;