import React from "react";
import Post from "./Post";

function Blender() {
    const source = "blender.md";
  return (
    <div className="page-content">

        <h1>Blender</h1>
        <Post filename={source}/>
       
    </div>
  );
}

export default Blender;