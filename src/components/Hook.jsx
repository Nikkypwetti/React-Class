import React, { useState } from "react";
const Hook = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [studentArray, setstudentArray] = useState([]);
  
  const submit = () =>{
    let newStudent ={firstname,lastname,email,password}
    console.log(newStudent);
    setstudentArray([...studentArray,newStudent])
    console.log(studentArray);
  };
  
  return (
    <>

  <div className="container-fluid col-6 mt-lg-5 shadow py-2 px-4">

    <h1 className="text-center my-3">Sign Up</h1>

    <div className="form-group my-3">
      <input type="text" className="form-control" placeholder="firstname" onChange={(e)=>setfirstname(e.target.value)} />
    </div>

    <div className="form-group my-3">
      <input type="text" className="form-control" placeholder="lastname" onChange={(e)=>setlastname(e.target.value)} />
    </div>

    <div className="form-group my-3">
      <input type="text" className="form-control" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
    </div>

    <div className="form-group my-3">
      <input type="text" className="form-control" placeholder="password" onChange={(e)=>setpassword(e.target.value)} />
    </div>

    <div className="form-group my-3">
      <button onClick={submit} className="btn btn-success w-100">Submit</button>
    </div>

  </div>

  {
    studentArray.map((item,index)=>(
      <>
      <div>{index+1}</div>
      <div>{item.firstname}</div>
      
      </>
    ))
  }

  </>
)
};
export default Hook;

