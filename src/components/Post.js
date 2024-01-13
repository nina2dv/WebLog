import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import Code from "./Code";

function Post({filename}) {
    
    const [postContent, setPostContent] = useState("");
    // console.log(postContent);
    useEffect(() => {
        import(`../markdown/${filename}`)
        .then(res => {
            fetch(res.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.error(err))
        })
    }, []);
  return (
   <article className="article">
    <div className="container">
        <div className="post-wrapper">
            <Markdown options={{
                overrides: {
                    Code: {
                        component: Code
                    },
                  
                }
            }}>
                {postContent}
            </Markdown>
        </div>
    </div>
   </article>
  );
}

export default Post;