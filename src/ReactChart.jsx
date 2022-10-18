import React from "react"
import Chart from "chart.js/auto"
import { Line, Bar, Radar } from "react-chartjs-2"

const labels = [
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
]

const dataRound = {
  labels   : labels,
  datasets : [
    {
      label           : "P/E last 10 years",
      backgroundColor : "rgb(23, 192, 255,0.5)",

      borderColor     : "rgb(23, 192, 255)",

      data            : [ 0, 10, 5, 2, 20, 30, 45, 2, 4, 6 ],
    },
    {
      label           : "P/E last 10 years",
      backgroundColor : "rgb(255, 99, 132,0.5)",

      borderColor     : "rgb(255, 99, 132)",

      data            : [ 73, 52, 72, 55, 30, 42, 43, 64, 12, 45 ],
    },
  ],
}
const options = {
  elements   : {
    point : {
      pointStyle : "triangle",
      radius     : 6,
    },
  },
  responsive : true,
  plugins    : {
    title  : {
      display : true,
    },
    legend : {
      labels : {
        color : "rgb(255,255,255)",
      },
    },
  },

  scales     : {
    x : {
      grid  : {
        display         : true,
        drawBorder      : true,
        drawOnChartArea : true,
        drawTicks       : true,
        drawBorder      : false,
        color           : "rgb(255 ,255 ,255,0.5)",
      },
      ticks : {
        color : "rgb(255, 255, 255)",
      },
    },
    y : {
      grid  : {
        drawBorder : false,
        color      : "rgb(255, 255, 255,0.5)",
      },
      ticks : {
        color : "rgb(255, 255, 255)",
      },
    },
  },
  animations : {
    tension : {
      duration : 1000,
      easing   : "easeInQuint",
      from     : 1,
      to       : 0.5,
      loop     : true,
    },
  },
}
const optionBar = {
  responsive : true,
  plugins    : {
    title  : {
      display : true,
    },
    legend : {
      labels : {
        color : "rgb(255,255,255)",
      },
    },
  },

  scales     : {
    x : {
      grid  : {
        display         : true,
        drawBorder      : true,
        drawOnChartArea : true,
        drawTicks       : true,
        drawBorder      : false,
        color           : "rgb(255 ,255 ,255,0.5)",
      },
      ticks : {
        color : "rgb(255, 255, 255)",
      },
    },
    y : {
      grid  : {
        drawBorder : false,
        color      : "rgb(255, 255, 255,0.5)",
      },
      ticks : {
        color : "rgb(255, 255, 255)",
      },
    },
  },
}
const optionRadar = {
  responsive : true,
  plugins    : {
    legend : {
      labels : {
        color : "rgb(255,255,255)",
      },
    },
  },
  scales     : {
    r : {
      angleLines  : {
        color : "rgb(255, 255, 255,0.5)",
      },
      grid        : {
        color : "rgb(255, 255, 255,0.5)",
      },
      pointLabels : {
        color : "rgb(255, 255, 255)",
      },
    },
  },
}
const LineChart = ({ ref_price_per_stock, chartData }) => {
  const data = {
    labels   : labels,
    datasets : [
      {
        label           : "Stock Price last 10 years",
        backgroundColor : "rgb(21 45 71)",
        borderColor     : "rgb(23, 192, 255)",
        color           : "rgb(255 0 0)",
        data            : chartData.roic,
      },
    ],
  }
  return (
    <div className=' mt-24 '>
      <div className='flex flex-col my-1 '>
        <div className='flex justify-start mt-4'>
          <p
            ref={ref_price_per_stock}
            className='text-xl font-semibold text-white rounded-lg border-2  border-bluedark  subpixel-antialiased  px-8 py-5'
          >
            {"Return on Invested Capital (ROIC) for last 10 years"}
          </p>
        </div>

        <Line data={data} options={options} />
      </div>
    </div>
  )
}
const BarChart = ({ ref_bfn, chartData }) => {
  const dataBar = {
    labels   : labels,
    datasets : [
      {
        label           : "Big Five Numbers Last 10 years",
        backgroundColor : [
          "rgb(54, 162, 235,0.7)",
          "rgb(255, 205, 86,0.7)",
          "rgb(255, 99, 132,0.7)",
          "rgb(54, 62, 235,0.7)",
          "rgb(55, 99, 132,0.7)",
          "rgb(54, 166, 180,0.7)",
        ],
        borderColor     : [
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
          "rgb(54, 62, 235)",
          "rgb(55, 99, 132)",
          "rgb(54, 166, 180)",
        ],
        borderWidth     : "3",
        color           : "rgb(255 0 0)",
        data            : chartData.equity,
      },
    ],
  }

  return (
    <div ref={ref_bfn} className='flex flex-col py-20 '>
      <div className='flex justify-start'>
        <p className='text-xl text-white rounded-lg border-2 border-bluedark font-semibold subpixel-antialiased  px-8 py-5'>
          Big Five Numbers
        </p>
      </div>

      <Bar data={dataBar} options={optionBar} />
    </div>
  )
}
const DoughnutChart = ({ ref_price_per_earning }) => {
  return (
    <div ref={ref_price_per_earning} className='flex flex-col py-20 '>
      <div className='flex justify-start '>
        <p className='text-xl text-white rounded-lg border-2 border-bluedark font-semibold  subpixel-antialiased  px-8 py-5'>
          Price Per Earnings
        </p>
      </div>
      <div className='px-36'>
        <Radar data={dataRound} options={optionRadar} />
      </div>
    </div>
  )
}

export { LineChart, BarChart, DoughnutChart }
