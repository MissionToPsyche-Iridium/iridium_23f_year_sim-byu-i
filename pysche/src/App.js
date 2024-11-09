import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import DrawingPage from './pages/drawingPage';
import TriviaPage from './pages/triviaPage';
import ExamplePage from './pages/examplePage';
function App() {
  return (
<Router>
  <Layout>
    <Routes>
      <Route path='/' elements = {<h1>Home Page</h1>} />
      <Route path='/ExamplePage' element={<ExamplePage />} />
      <Route path="/Faq" element={<h1>FAQ</h1>} />
      <Route path="/DrawingPage" element={<DrawingPage />} />
      <Route path="/TriviaPage" element={<TriviaPage />} />
    </Routes>
  </Layout>
</Router>
  );
}

export default App;
// Change the routes for home page and faq into actual react pages instead of <h1>....