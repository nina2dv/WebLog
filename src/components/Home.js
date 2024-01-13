import Markdown from "markdown-to-jsx";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import ChatBot from "./ChatBot.js";
import Bot from "./Bot.js";
function Home() {

  return (
    <div className="home-content" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 50 }}>
      <div>
      <h1>Home</h1>
        <p>
        Welcome!
        </p>
        <Link to="/chat" className="link">ChatBot</Link>

        <Markdown>---</Markdown>
        <h1>Programming</h1>
        <div className="links">
        <ul>
          <li>
            <Link to="/verilog" className="link">Verilog</Link>
          </li>
          <li>
            <Link to="/java" className="link">Java</Link>
          </li>
        </ul>
        </div>

        <Markdown>---</Markdown>
        <h1>Software</h1>
        <div className="links">
        <ul>
          <li>
            <Link to="/blender" className="link">Blender</Link>
          </li>
          <li>
            <Link to="/flstudio" className="link">FL Studio</Link>
          </li>
        </ul>
        </div>
      
      
      </div>
       
    </div>
  );
}

export default Home;