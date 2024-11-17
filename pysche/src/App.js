import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import DrawingPage from './pages/drawingPage';
import TriviaPage from './pages/triviaPage';
import ExamplePage from './pages/examplePage';
import CreditsPage from './pages/creditsPage';
import HomePage from './pages/homePage';
function App() {
  return (
<Router>
  <Layout>
    <Routes>
      <Route path='/' element= {<HomePage />} />
      <Route path='/Example' element={<ExamplePage />} />
      <Route path="/Drawing" element={<DrawingPage />} />
      <Route path="/Trivia" element={<TriviaPage />} />
      <Route path="/Credits" element={<CreditsPage />} />
    </Routes>
  </Layout>
</Router>
  );
}

export default App;
