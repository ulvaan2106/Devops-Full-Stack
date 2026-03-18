const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/devops")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log("DB Error:", err))

// Import User Model
const User = require("./models/User")

// ---------------- SIGNUP ----------------
app.post("/signup", async (req,res)=>{
    try{
        console.log("BODY RECEIVED:", req.body)

        const {name,email,password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({msg:"All fields required"})
        }

        const existing = await User.findOne({email})
        if(existing){
            return res.json({msg:"User already exists"})
        }

        const user = new User({name,email,password})
        await user.save()

        res.json({msg:"Registered Successfully"})
    }
    catch(err){
        console.log("ERROR:", err)
        res.status(500).json({msg:"Server Error"})
    }
})

// ---------------- LOGIN ----------------
app.post("/login", async (req,res)=>{
    try{
        const {email,password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.json({msg:"Not Registered"})
        }

        if(user.password !== password){
            return res.json({msg:"Wrong Password"})
        }

        res.json({msg:"Login Success"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:"Server Error"})
    }
})

// ---------------- DASHBOARD DATA ----------------
app.get("/data",(req,res)=>{
    res.json([
        {sensor:"Temperature", value:30},
        {sensor:"Humidity", value:65},
        {sensor:"Crack Width", value:4}
    ])
})

// ---------------- START SERVER ----------------
app.listen(5000,()=>{
    console.log("Server running on port 5000")
})