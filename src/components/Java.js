import React from "react";
import Post from "./Post";

function Java() {
    const source = "java.md";
  return (
    <div className="page-content">

        <h1>Java</h1>
        <Post filename={source}/>
       
    </div>
  );
}

export default Java;