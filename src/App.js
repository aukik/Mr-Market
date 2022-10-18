import "./App.css"
import Navbar from "./Navbar"
import { useState, useEffect } from "react"
import { useRef } from "react"
import { LineChart, BarChart, DoughnutChart } from "./ReactChart"
function App() {
  const ref_bfn = useRef(null)
  const ref_price_per_stock = useRef(null)
  const ref_price_per_earning = useRef(null)
  const initial_data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  const [ chartData, setChartData ] = useState({
    roic              : initial_data,
    eps               : initial_data,
    sales             : initial_data,
    equity            : initial_data,
    freeCash          : initial_data,
    operatingFreeCash : initial_data,
  })
  return (
    <div className='App bg-blue'>
      <Navbar
        chartData={chartData}
        setChartData={setChartData}
        ref_bfn={ref_bfn}
        ref_price_per_stock={ref_price_per_stock}
        ref_price_per_earning={ref_price_per_earning}
      />
      <div className='container mx-auto   lg:w-1/2  lg:px-8 ssm:px-1 ssm:w-full sm:px-1 sm:w-full'>
        <LineChart
          ref_price_per_stock={ref_price_per_stock}
          chartData={chartData}
          setChartData={setChartData}
        />
        <BarChart
          ref_bfn={ref_bfn}
          chartData={chartData}
          setChartData={setChartData}
        />
        {/* <DoughnutChart
          ref_price_per_earning={ref_price_per_earning}
          chartData={chartData}
          setChartData={setChartData}
        /> */}
      </div>
      <div
        id='profile'
        className='container fixed inset-y-[100px] right-3 max-w-[140px] '
      />
    </div>
  )
}

export default App
