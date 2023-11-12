import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import axios from "axios";

function ChatBot() {
    const [output, setOutput] = useState("")
    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState('');
  
    function handleChange(e) {
      setText(e.target.value);
    };
  
    function handleSubmit(e) {
      e.preventDefault();
      setSubmitted(text);
      setText("");
  
      axios({
        method: 'POST',
        url: 'https://api.cohere.ai/v1/generate',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer API_KEY'
        },
        data: {
          truncate: 'END',
          return_likelihoods: 'NONE',
          prompt: submitted,
          model: 'command-nightly'
        }
      }).then((response) => {
        console.log(response.data.generations[0].text);
        setOutput(response.data.generations[0].text);
      });
    };
  
    return(
    <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <input type="submit" value="Enter" />
          </form>
          <Markdown>{output}</Markdown>
        </div>
    );
  }
  export default ChatBot;