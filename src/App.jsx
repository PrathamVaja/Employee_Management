import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user,setUser] = useState(null)

  const handleLogin = (email,password)=>{
    if (email == 'admin@m.com' && password == '123') {
        console.log("This is Admin");
        
    }else{
      alert("Invalid Credentials ")
    }
      
  }

  handleLogin()
  
  return (
    <>
      {!user ? <Login/> : ' '}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
