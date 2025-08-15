import React, { useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import TiltedCard from './TiltedCard'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

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
    if (currState === "Login") newUrl += "/api/user/login"; else newUrl += "/api/user/register";

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => { document.body.classList.remove('overflow-hidden') }
  }, [])

  return (
    <Dialog open onOpenChange={(open)=>{ if(!open) setShowLogin(false) }}>
      <DialogContent className="max-w-lg p-0 border-0 bg-transparent shadow-none [&>button]:hidden">
        <TiltedCard containerHeight="auto" containerWidth="auto" scaleOnHover={1.03} rotateAmplitude={7}>
          <form onSubmit={onLogin} className='bg-card text-card-foreground place-self-center shadow-2xl backdrop-blur-xl rounded-2xl w-[min(92vw,480px)] border p-6 sm:p-8 text-[15px]'>
            <div className='flex justify-between items-center'>
              <h2 className='text-2xl font-extrabold'>{currState}</h2>
              <img
                className='w-5 cursor-pointer hover:scale-110 transition-transform'
                onClick={() => setShowLogin(false)}
                src={assets.cross_icon}
                alt="Close"
              />
            </div>

            <div className='mt-6 space-y-4'>
              {currState === "Login" ? null : (
                <div className='space-y-2'>
                  <Label htmlFor='name'>Your name</Label>
                  <Input id='name' name='name' onChange={onChangeHandler} value={data.name} required />
                </div>
              )}
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' type='email' onChange={onChangeHandler} value={data.email} required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password' onChange={onChangeHandler} value={data.password} required />
              </div>
            </div>

            <Button type='submit' className='mt-6 w-full bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-primary-foreground'>
              {currState === "Sign Up" ? "Create account" : "Login"}
            </Button>

            <div className='flex items-start gap-2 mt-3'>
              <input className='mt-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm' type="checkbox" required />
              <p className='text-xs text-muted-foreground'>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>

            {currState === "Login" ? (
              <p className='text-sm mt-4'>
                Create a new account?{' '}
                <span
                  className='text-primary font-bold cursor-pointer hover:underline'
                  onClick={() => setCurrState("Sign Up")}
                >
                  Click here
                </span>
              </p>
            ) : (
              <p className='text-sm mt-4'>
                Already have an account?{' '}
                <span
                  className='text-primary font-bold cursor-pointer hover:underline'
                  onClick={() => setCurrState("Login")}
                >
                  Login here
                </span>
              </p>
            )}
          </form>
        </TiltedCard>
      </DialogContent>
    </Dialog>
  )
}

export default LoginPopup
