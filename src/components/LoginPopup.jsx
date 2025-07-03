import React, { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import TiltedCard from './TiltedCard'

function LoginPopup({ setShowLogin }) {
  const {url, setToken} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  }

  // 👇 Scroll lock effect
  useEffect(() => {
    document.body.classList.add('overflow-hidden') // Lock scroll

    return () => {
      document.body.classList.remove('overflow-hidden') // Unlock scroll on unmount
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[100] w-full h-full backdrop-blur-2xl bg-black/60 flex items-center justify-center">
      <TiltedCard containerHeight="auto" containerWidth="auto" scaleOnHover={1.03} rotateAmplitude={7}>
        <form onSubmit={onLogin} className='bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 place-self-center shadow-2xl backdrop-blur-xl rounded-2xl w-[max(28vw,330px)] border-2 border-orange-100 text-gray-700 flex flex-col gap-6 py-8 px-8 sm:px-10 text-[15px] transition-all duration-300'>
          <div className='flex justify-between items-center text-gray-800'>
            <h2 className='text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent'>{currState}</h2>
            <img
              className='w-5 cursor-pointer hover:scale-110 transition-transform'
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>
          <div className='flex flex-col gap-5'>
            {currState === "Login" ? null : (
              <input
                name='name'
                onChange={onChangeHandler}
                value={data.name}
                className='outline-none border border-orange-200 rounded-lg p-3 bg-white/80 focus:border-orange-400 transition-colors font-medium'
                type="text"
                placeholder='Your name'
                required
              />
            )}
            <input
              name='email'
              onChange={onChangeHandler}
              value={data.email}
              className='outline-none border border-orange-200 rounded-lg p-3 bg-white/80 focus:border-orange-400 transition-colors font-medium'
              type="email"
              placeholder='Your email'
              required
            />
            <input
              name='password'
              onChange={onChangeHandler}
              value={data.password}
              className='outline-none border border-orange-200 rounded-lg p-3 bg-white/80 focus:border-orange-400 transition-colors font-medium'
              type="password"
              placeholder='Password'
              required
            />
          </div>
          <button type='submit' className='border-none p-3 rounded-lg text-white font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 shadow-md text-[16px] cursor-pointer hover:scale-105 transition-transform'>
            {currState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className='flex items-start gap-2 mt-[-10px]'>
            <input className='mt-[5px]' type="checkbox" required />
            <p className='text-xs text-gray-600'>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {currState === "Login" ? (
            <p className='text-sm text-gray-700'>
              Create a new account?{' '}
              <span
                className='text-orange-600 font-bold cursor-pointer hover:underline'
                onClick={() => setCurrState("Sign Up")}
              >
                Click here
              </span>
            </p>
          ) : (
            <p className='text-sm text-gray-700'>
              Already have an account?{' '}
              <span
                className='text-orange-600 font-bold cursor-pointer hover:underline'
                onClick={() => setCurrState("Login")}
              >
                Login here
              </span>
            </p>
          )}
        </form>
      </TiltedCard>
    </div>
  )
}

export default LoginPopup
