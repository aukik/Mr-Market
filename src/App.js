import "./App.css"
import Navbar from "./Navbar"
import { useRef } from "react"
import { LineChart, BarChart, DoughnutChart } from "./ReactChart"
function App() {
  const ref_bfn = useRef(null)
  const ref_price_per_stock = useRef(null)
  const ref_price_per_earning = useRef(null)

  return (
    <div className='App'>
      <Navbar
        ref_bfn={ref_bfn}
        ref_price_per_stock={ref_price_per_stock}
        ref_price_per_earning={ref_price_per_earning}
      />
      <div className='container mx-auto my-10 lg:px-40'>
        <LineChart ref_price_per_stock={ref_price_per_stock} />
        <BarChart ref_bfn={ref_bfn} />
        <DoughnutChart ref_price_per_earning={ref_price_per_earning} />
      </div>
    </div>
  )
}

export default App
