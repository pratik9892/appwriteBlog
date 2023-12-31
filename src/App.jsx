import './App.css'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux' 
import { login,logout } from './store/authSlice'
import authService from './appwrite/auth'
import { Footer } from './components'
import {Header} from "./components"
import { Outlet } from 'react-router-dom'



function App() {

  
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect( () => {
  authService.getCurrentUser()
  .then( (userData) => {
   if(userData){
    dispatch(login({userData}))
   } else{
    dispatch(logout())
   }
  })
  .finally( () => setLoading(false))
}, [])

return !loading ? (
  <div className=' '>
    <div className="font-mono bg-white">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
) : null
  
}

export default App
