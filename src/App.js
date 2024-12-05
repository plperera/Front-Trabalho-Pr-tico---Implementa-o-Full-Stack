import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import styled from 'styled-components';
const App = () => (
  <Container>
    <Navbar />
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Container>
);

export default App;


const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: repeating-linear-gradient(45deg, #d6eaf8, #d6eaf8 20px, #eaf3fc 20px, #eaf3fc 40px);
`;