import "./App.css"
import Navbar from "./Navbar"
import UserProfile from "./UserProfile"
import { useRef } from "react"
import { LineChart, BarChart, DoughnutChart } from "./ReactChart"
function App() {
  const ref_bfn = useRef(null)
  const ref_price_per_stock = useRef(null)
  const ref_price_per_earning = useRef(null)

  return (
    <div className='App bg-blue'>
      <Navbar
        ref_bfn={ref_bfn}
        ref_price_per_stock={ref_price_per_stock}
        ref_price_per_earning={ref_price_per_earning}
      />
      <div className='container mx-auto   lg:w-1/2  lg:px-8 ssm:px-1 ssm:w-full sm:px-1 sm:w-full'>
        <LineChart ref_price_per_stock={ref_price_per_stock} />
        <BarChart ref_bfn={ref_bfn} />
        <DoughnutChart ref_price_per_earning={ref_price_per_earning} />
      </div>
      <div
        id='profile'
        className='container fixed inset-y-[100px] right-3 max-w-[140px] '
      />
    </div>
  )
}

export default App
