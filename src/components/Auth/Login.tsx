import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const handleSubmit=(e)=>{
e.preventDefault();
handleLogin(email,password)

setEmail('')
setPassword('')
}

  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-20'>
        <div className='text-5xl '>Login</div>
        <div className='border-2 border-green-400 p-20 rounded-2xl'>
            <form className='flex flex-col items-center justify-center gap-4' onSubmit={(e)=>{
                 handleSubmit(e)
            }}>
                <input
                value={email}
                onChange={(e)=>{
              setEmail(e.target.value)
                }} required className='px-3 py-2 outline-none min-w-[230px] bg-transparent border border-green-400 rounded-xl' type="email" placeholder='Enter your email' />
                <input value={password}
                 onChange={(e)=>{
              setPassword(e.target.value)
            }}
               className='px-3 py-2 outline-none min-w-[230px] bg-transparent border border-green-400 rounded-xl' type="password" placeholder='Enter your password' />
                <button className='px-6 py-2 bg-green-400 border-none rounded-full'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login