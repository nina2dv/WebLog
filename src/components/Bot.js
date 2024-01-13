import Markdown from "markdown-to-jsx";
import React, { useState }  from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Bot() {
  const [output, setOutput] = useState("")
  const [docs, setDocs] = useState("")
  const [text, setText] = useState("")
  const [chatHistory, setChatHistory] = useState([]);
  const [course, setCourse] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  var note = "#Keep in mind:\n- Chat bot responses may be incorrect (access them thoroughly)\n- Chat bot doesn't have memory yet\n- LLM is Cohere command-nightly\n- Embedding model is Cohere embed-multilingual-v3.0 (Can answer queries in [100+ languages](https://docs.cohere.com/docs/supported-languages))\n- Retrieved documents or background info comes from textbooks\n- Must enter course code without space in between (eecsxxxx or EECSxxxx)\n- Query and course should be related (or else unexpected answers may occur)\n- Supports EECS2001, EECS2021, MATH1025, MATH2030, MATH1090 so far\n";


  function handleChangeText(e) {
    setText(e.target.value);
  };
  function handleChangeCourse(e) {
    setCourse(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable further submissions
    const queryValue = document.getElementById("query").value.trim();
    const courseValue = document.getElementById("course").value.trim().toLowerCase();

    if (queryValue) {
        axios.post("http://localhost:5000/query", {
            query: queryValue, 
            course: courseValue, 
        })
        .then((res) => {
            const newEntry = {
                query: queryValue,
                response: res.data.message,
            };
            console.log(res.data);
            setChatHistory([...chatHistory, newEntry]); // Add new entry to chat history
            setOutput(res.data.message); // 'message' is the key in the response
            setDocs(res.data.docs);
        })
        .catch((error) => {
            console.error("There was an error!", error);
            setOutput("Error: " + error.message);
            setDocs("Error: " + error.message);
        })
        .finally(() => {
            setIsSubmitting(false); // Re-enable submission after request completion
        });
    } else {
        console.error("Query must not be empty");
        setOutput("Query must not be empty");
    }};

  return (
<div className="chat-content">
    <div>
        <Markdown># ChatBot</Markdown>

    <div>
        {chatHistory.map((entry, index) => (
            <div key={index}>
                <Markdown>{"**You: **" + entry.query + "\n\n"}</Markdown>
                <Markdown>{"**Bot: **" + entry.response}</Markdown>
            </div>
        ))}
    </div>

    <form onSubmit={handleSubmit} method="post">
        <p>
        <textarea type="text" rows="5" cols="100" id="query" name="query"  placeholder="Enter query here: " onChange={handleChangeText} value={text}/>
        </p>
        <p>
        <input type="text" id="course" name="course" size="35" placeholder="Enter course (eecsxxxx) here: " onChange={handleChangeCourse} value={course}/>
        </p>
        <p>
        <input type="submit" className="w3-button w3-blue" value="Enter" disabled={isSubmitting} />
        </p>
    </form>

    {/* <Markdown>{output + "\n\n---"}</Markdown> */}
    <Markdown>{docs}</Markdown>


    </div>
<div className="note">

    {note.split("\n").map((i,note) => {
            return  <Markdown options={{ wrapper: 'div',  forceWrapper: true }} key={note}>{i}</Markdown>;
        })
    }
   

    <li>
        <Link to="/chat/textbook" className="link">All textbook references here</Link>
    </li>

  
</div>

  </div>

   
  );
}

export default Bot;