import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [show,setShow]=useState(false)
  const nav = useNavigate()

  const login = async ()=>{
    const res = await axios.post("http://localhost:5000/login",{email,password})

    if(res.data.msg==="Login Success"){
      nav("/dashboard")
    } else {
      alert(res.data.msg)
    }
  }

  return(
    <div className="login-container">

      <div className="login-box">
        <h2>Login</h2>

        <label>Email:</label>
        <input
          placeholder="Enter email"
          onChange={e=>setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          onChange={e=>setPassword(e.target.value)}
        />

        <div className="show-pass">
          <input type="checkbox" onChange={()=>setShow(!show)}/>
          <span>Show Password</span>
        </div>

        <button onClick={login}>SIGN IN</button>

        <p className="link">Forgot Username / Password?</p>
        <p className="link" onClick={()=>nav("/signup")}>
          Don't have an account? <b>Sign up</b>
        </p>

      </div>
    </div>
  )
}

export default Login