import React from "react"
import Chart from "chart.js/auto"
import { Line, Bar, Bubble } from "react-chartjs-2"

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

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  )
}
const BarChart = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  )
}

export { LineChart, BarChart }
