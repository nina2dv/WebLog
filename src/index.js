import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Verilog from './components/Verilog';
import Layout from './components/Layout';
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, React, createContext } from 'react';
import Blender from './components/Blender';
import Flstudio from './components/Flstudio';
import Post from './components/Post';
import Bot from './components/Bot';
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
          <Route path="verilog" element={<Post filename={"verilog.md"}/>} />
          <Route path="chat" element={<Bot />} />
          <Route path="chat/textbook" element={<Post filename={"textbook.md"}/>} />
          <Route path="java" element={<Post filename={"java.md"}/>} />
          <Route path="blender" element={<Post filename={"blender.md"}/>} />
          <Route path="flstudio" element={<Post filename={"flstudio.md"}/>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);