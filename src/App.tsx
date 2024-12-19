import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Login from './components/auth/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ForgotPassword from './components/auth/ForgotPssword';
import Register from './components/auth/registration';
import Dashboard from './components/dashboard/user/dashboard';


function App() {

  return (
    <MantineProvider >
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>    
    </MantineProvider>
  )
}

export default App
