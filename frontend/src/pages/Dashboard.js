import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell
} from "recharts"

function Dashboard(){

  const nav = useNavigate()

  const [history,setHistory]=useState([])
  const [status,setStatus]=useState([])

  useEffect(()=>{
    let arr=[]
    for(let i=1;i<=15;i++){
      arr.push({
        day:`Day ${i}`,
        value:Math.floor(Math.random()*30)+5
      })
    }
    setHistory(arr)

    setStatus([
      {name:"Normal", value:60},
      {name:"Warning", value:20},
      {name:"Alert", value:20}
    ])
  },[])

  const colors=["#22c55e","#f59e0b","#ef4444"]

  return(
    <div className="layout">

      {/* 🔥 SIDEBAR */}
      <div className="sidebar">
        <h2>Monitor</h2>

        <ul>
          <li>Dashboard</li>
          <li>Sensors</li>
          <li>Reports</li>
          <li>Alerts</li>
          <li>Settings</li>
        </ul>

        <button onClick={()=>nav("/")}>Logout</button>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="content">

        <h2>Structural Health Dashboard</h2>

        <div className="grid">

          <div className="card">
            <h3>Displacement over time</h3>
            <LineChart width={400} height={250} data={history}>
              <CartesianGrid stroke="#444"/>
              <XAxis dataKey="day"/>
              <YAxis/>
              <Tooltip/>
              <Line dataKey="value" stroke="#3b82f6"/>
            </LineChart>
          </div>

          <div className="card">
            <h3>Sensor status</h3>
            <PieChart width={250} height={250}>
              <Pie data={status} dataKey="value" innerRadius={60}>
                {status.map((d,i)=><Cell key={i} fill={colors[i]}/>)}
              </Pie>
            </PieChart>
          </div>

        </div>

        <div className="grid">

          <div className="card">
            <h3>Recent alerts</h3>
            <p className="red">● Crack width exceeded</p>
            <p className="yellow">● Temp spike detected</p>
            <p className="yellow">● Humidity rising</p>
            <p className="green">● All sensors normal</p>
          </div>

          <div className="card">
            <h3>Sensor log</h3>

            <table>
              <tr><th>Sensor</th><th>Value</th><th>Status</th></tr>
              <tr><td>Temp</td><td>31°C</td><td className="yellow">Warning</td></tr>
              <tr><td>Humidity</td><td>68%</td><td className="green">Normal</td></tr>
              <tr><td>Crack</td><td>0.4mm</td><td className="red">Alert</td></tr>
            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard