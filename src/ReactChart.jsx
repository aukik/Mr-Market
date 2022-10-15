import React from "react"
import Chart from "chart.js/auto"
import { Line, Bar, Doughnut } from "react-chartjs-2"

const labels = [ "January", "February", "March", "April", "May", "June" ]

const data = {
  labels   : labels,
  datasets : [
    {
      label           : "Stock Price last 10 years",
      backgroundColor : "rgb(12 74 110)",
      borderColor     : "rgb(56 189 248)",
      data            : [ 0, 10, 5, 2, 20, 30, 45 ],
    },
  ],
}

const LineChart = ({ ref_price_per_stock }) => {
  return (
    <div ref={ref_price_per_stock} className='flex flex-col my-10 mt-28'>
      <div className='flex justify-start'>
        <p className='text-xl font-semibold subpixel-antialiased  px-8 py-5'>
          Price of Stock of this company
        </p>
      </div>

      <Line data={data} />
    </div>
  )
}
const BarChart = ({ ref_bfn }) => {
  return (
    <div ref={ref_bfn} className='flex flex-col py-10'>
      <div className='flex justify-start'>
        <p className='text-xl font-semibold subpixel-antialiased  px-8 py-5'>
          Big Five Numbers
        </p>
      </div>

      <Bar data={data} />
    </div>
  )
}
const DoughnutChart = ({ ref_price_per_earning }) => {
  return (
    <div ref={ref_price_per_earning} className='flex flex-col   py-10'>
      <div className='flex justify-start '>
        <p className='text-xl font-semibold subpixel-antialiased  px-8 py-5'>
          Price Per Earnings
        </p>
      </div>
      <div className='flex w-3/5 '>
        <Doughnut data={data} />
      </div>
    </div>
  )
}

export { LineChart, BarChart, DoughnutChart }
