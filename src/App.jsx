import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
 
  const [user, setUser] = useState(null)
  const authData=useContext(AuthContext);

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin');
    }
    else if(authData && authData.employees.find((e)=>{email==e.email && password==e.password})){
      setUser('employee');
    }
    else{
      alert("Invalid Credentials ");
    }
  }

  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard />:<EmployeeDashboard />}
    </>
  )
}

export default App