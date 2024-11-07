import { useState } from "react";


const Login = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
            
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)

  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);  

  }

  

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <div className=" flex flex-col h-screen w-full items-center justify-center ">
      <div  className=" h-80 w-80  border-2 border-blue-400 rounded-md">
       <form 
       className="flex flex-col"
       onSubmit={(e)=>{
        submitHandler(e);
        console.log("email is ",email);
        console.log("password is ",password);

        setEmail("");
        setPassword("");
        
       }}
       >

       <input 
       value={email}
       onChange={(e)=>{
        emailHandler(e);
       }}
      required
       className="bg-transparent text-white   outline-none border-2 border-blue-300 m-5 placeholder:text-gray-400 px-4 py-3" type="email" placeholder="Enter Your Email" />
       
        <input 
        value={password}
        onChange={(e)=>{
          passwordHandler(e);
        }}
       
        className="bg-transparent text-white  outline-none border-2 border-blue-300 ml-5 mr-5 placeholder:text-gray-400  px-4 py-3" type="password" placeholder="Enter password" />

      <button className="outline-none bg-blue-600 w-28 flex justify-center m-auto py-2 mt-12 rounded-full text-white font-bold text-xl">Log in</button>
       </form>
      </div>
    </div>
  )
}

export default Login
