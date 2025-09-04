import React, {useState}from 'react'

const Login = () => {
    const [email, setEmail] = useState('' )
    const [password, setPassword] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        setEmail("");
        setPassword("");
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        {/* <h1 className='font-bold text-2xl text-emerald-800 p-3'>Welcome to StaffTrack</h1> */}
        <div className='border-2 text-white-800 text-bold  text-2xl rounded-xl border-emerald-600 p-20 justify-center'>
            
            <form onSubmit={(e)=>{submitHandler(e)}} className='mt-3 flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='outline-none bg-transparent border-2 px-5 text-xl py-4 border-emerald-600 rounded-full placeholder:text-gray-400'type="email"  placeholder='Enter your Email'/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}required className='mt-5 bg-transparent border-2 px-5 py-4 text-xl  border-emerald-600 rounded-full  placeholder:text-gray-400'type="password" placeholder='Enter your password'/>
                <button className='text-white mt-5 w-full border-none px-5 py-4 text-xl  bg-emerald-600 py-2 px-8 hover:bg-emerald-700 font-semibold rounded-full'>LogIn</button>
            </form>
        </div>
    </div>
  )
}

export default Login