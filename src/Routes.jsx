import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import BlogPage from './pages/Blogs';
import BlogDetails from './pages/Blogs/BlogDetails';
import About from './pages/About';
import Trainer from './pages/Trainers';
import Student from './pages/Student';
import School from './pages/School';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/student" element={<Student />} />
        <Route path="/school" element={<School />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
