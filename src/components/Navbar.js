import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "..";


function Navbar() {
    const {isDark, setIsDark} = useContext(ThemeContext);
  return (
    <header className="header">
        <div className="container">
            <div className="wrapper">
            <span>
                <Link to="/" className="link">WebLog</Link>
            </span>
            <button onClick={() => setIsDark(!isDark)}>{isDark ? '*' : 'o'}</button>
            </div>
          
        </div>
    </header>
  );
}

export default Navbar;