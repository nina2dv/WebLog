import APIService from "./APIService.js";
import { useState } from 'react';


const Form = (props) => {
    const [query, setQuery] = useState('')

    
    const insertArticle = () =>{
      APIService.GetResponse({query})
      .then((response) => props.insertedArticle(response))
      .catch(error => console.log('error',error))
    }
    
    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setQuery('')
    }
    
      return (
       <div>
       <p>{query}</p>
       </div>
      )}
    
    export default Form;