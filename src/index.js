import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Verilog from './components/Verilog';
import Layout from './components/Layout';
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import Java from './components/Java';
import { useState, React, createContext } from 'react';
import Blender from './components/Blender';
import Flstudio from './components/Flstudio';
export const ThemeContext = createContext();

export default function App() {

  const [isDark, setIsDark] = useState(true);
  const value = {
      isDark, setIsDark
  }
  return (
    <ThemeContext.Provider value={value}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="verilog" element={<Verilog />} />
          <Route path="java" element={<Java />} />
          <Route path="blender" element={<Blender />} />
          <Route path="flstudio" element={<Flstudio />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);