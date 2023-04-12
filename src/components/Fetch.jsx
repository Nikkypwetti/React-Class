import axios from "axios";
import React, { useState } from "react";

const Fetch = () => {
    const endpoint = "https://jsonplaceholder.typicode.com/users";
    const endpoint2 = "https://jsonplaceholder.typicode.com/posts";
    const endpoint3 = "https://api.github.com/users";


    const [response,setresponse] = useState([])

    const getData = () => {
        axios.get(endpoint3)
        .then((result) =>{
            console.log(result.data);
            setresponse(result.data);
        })
        .catch((err) => {
            console.log(err);
        })

    };
  return (
    <>
      <div>Fetch API</div>
      <button onClick={getData}>Get info</button>

      {
        response.map((item,index) =>(
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.login}</div>
            <img src={item.avatar_url} alt="" />
          </div>
        ))
      }  
      
    </>
        
  )
}
export default Fetch;
