import React, { useState } from 'react'
const Second = () => {
    let myName = "Olanike"
    let mySchool = "SQI"
    let number = 9
          //variable name(first), setvariable name(it act like function(setfirst)),useState (act like an array of variable names),
    const [first, setfirst] = useState(0)
   
    const increment = () => {
        setfirst(first+1);
        console.log(first);
    }

    let allStudents = [
      {name: "OLA", school: "LAUTECH"},
      {name: "NIKE", school: "SQI"},
      {name: "BASIRAT", school: "OOU"}

    ]

  return (
    <>
      {number==9?<div>even number</div>:<div>odd number</div>}
      <button onClick={increment}>increase</button>
      <div>{first}</div>

     <table className='table table-striped table-dark table-bordered'>
         <thead>
          <tr>
            <td>S/N</td>
            <td>NAME</td>
            <td>SCHOOL</td>
          </tr>
        </thead>

      {

       allStudents.map((item,index)=>(
        <>
      
          <tbody>
            <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.school}</td>
            </tr>
          </tbody>
         
         </>
       ))
       }
      </table>

    </>
  )}


export default Second;