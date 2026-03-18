import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup(){

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirm,setConfirm]=useState("")

  const nav = useNavigate()

  const signup = async ()=>{

    if(password !== confirm){
      alert("Passwords do not match")
      return
    }

    const res = await axios.post("http://localhost:5000/signup",{
      name,email,password
    })

    alert(res.data.msg)

    if(res.data.msg==="Registered Successfully"){
      nav("/")
    }
  }

  return(
    <div className="signup-container">

      <div className="signup-box">

        <h2>Create Account</h2>

        <label>Name:</label>
        <input
          placeholder="Enter name"
          onChange={e=>setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          placeholder="Enter email"
          onChange={e=>setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={e=>setPassword(e.target.value)}
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm password"
          onChange={e=>setConfirm(e.target.value)}
        />

        <button onClick={signup}>SIGN UP</button>

        <p className="link" onClick={()=>nav("/")}>
          Already have an account? <b>Login</b>
        </p>

      </div>

    </div>
  )
}

export default Signup