import React from "react";
import Post from "./Post";

function Verilog() {
    const source = "verilog.md";
    return (
      <div className="page-content">
  
          <h1>Verilog</h1>
          <Post filename={source}/>
         
      </div>
    );
}

export default Verilog;