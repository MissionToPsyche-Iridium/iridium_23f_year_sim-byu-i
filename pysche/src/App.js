import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
<Router>
  <Header />
  <main>
    <h1>Hello</h1>
    <Routes>
      <Route path='/' elements = {<h1>Home Page</h1>} />
      <Route path="/Faq" element={<h1>FAQ</h1>} />
    </Routes>
  </main>
  <Footer />
</Router>
  );
}

export default App;
