import React from "react"
import Chart from "chart.js/auto"
import { Line, Bar, Radar } from "react-chartjs-2"

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
      title  : {
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
      suggestedMin : 0,

      angleLines   : {
        color : "rgb(255, 255, 255,0.5)",
      },
      grid         : {
        color : "rgb(255, 255, 255,0.5)",
      },
      pointLabels  : {
        color : "rgb(255, 255, 255)",
      },
    },
  },
}
const LineChart = ({
  ref_price_per_stock,
  chartData,
  label_up,
  name,
  labels,
}) => {
  const data = {
    labels   : labels,
    datasets : [
      {
        label           : label_up,
        backgroundColor : "rgb(21 45 71)",
        borderColor     : "rgb(23, 192, 255)",
        color           : "rgb(255 0 0)",
        data            : chartData,
      },
    ],
  }
  return (
    <div className='flex flex-col  '>
      <div className='flex justify-start '>
        <p className='text-xl font-semibold text-graytext2    subpixel-antialiased  px-8 py-5'>
          {name}
        </p>
      </div>

      <Line data={data} options={options} />
    </div>
  )
}
const BarChart = ({ ref_bfn, chartData, name, label_up, labels }) => {
  const dataBar = {
    labels   : labels,
    datasets : [
      {
        label           : label_up + " %",
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
        data            : chartData,
      },
    ],
  }

  return (
    <div className='flex flex-col  '>
      <div className='flex justify-start'>
        <p className='text-xl text-white  font-semibold subpixel-antialiased  px-8 py-5'>
          {name}
        </p>
      </div>

      <Bar data={dataBar} options={optionBar} />
    </div>
  )
}
const DoughnutChart = ({
  ref_price_per_earning,
  chartDataOne,
  chartDataTwo,
  name,
  label_up,
  label_up_two,
  labels,
}) => {
  const dataRound = {
    labels   : labels,
    datasets : [
      {
        label           :
          label_up === "ROIC"
            ? label_up + " Average %"
            : label_up + " Growth Average %",
        backgroundColor : "rgb(23, 192, 255,0.5)",

        borderColor     : "rgb(23, 192, 255)",

        data            : chartDataOne,
      },
      // {
      //   label           : label_up_two,
      //   backgroundColor : "rgb(255, 99, 132,0.5)",

      //   borderColor     : "rgb(255, 99, 132)",

      //   data            : chartDataTwo,
      // },
    ],
  }
  return (
    <div className='flex flex-row justify-center'>
      <div className='container justify-center px-36  max-w-4xl'>
        <div className='flex justify-self-start '>
          <p className='text-xl text-white font-semibold  subpixel-antialiased  px-8 py-5'>
            {label_up === "ROIC" ? (
              "Average of ROIC"
            ) : (
              "Growth Rate Average of " + name
            )}
          </p>
        </div>
        <Radar data={dataRound} options={optionRadar} />
      </div>
    </div>
  )
}

export { LineChart, BarChart, DoughnutChart }
