export default class APIService{
    // Get llm response
    static GetResponse(body){
        return fetch(`http://localhost:5000/query`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }
    
}