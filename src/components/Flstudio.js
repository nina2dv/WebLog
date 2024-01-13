import React from "react";
import Post from "./Post";

function Flstudio() {
    const source = "flstudio.md";
  return (
    <div className="page-content">

        <h1>FL Studio</h1>
        <Post filename={source}/>
       
    </div>
  );
}

export default Flstudio;