import "./App.css"
import Navbar from "./Navbar"
import { useState, useEffect } from "react"
import { useRef } from "react"
import { LineChart, BarChart, DoughnutChart } from "./ReactChart"
function App() {

  const ref_all={
    roic : useRef(null),
    equity: useRef(null),
    eps :useRef(null),
    sales :useRef(null),
    fcf :useRef(null),
    ofcf :useRef(null),

  }


  const initial_data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  const [ chartData, setChartData ] = useState({
    roic   : initial_data,
    eps    : initial_data,
    sales  : initial_data,
    equity : initial_data,
    fcf    : initial_data,
    ofcf   : initial_data,
  })
  const information = [
    {
      labelUp         : "ROIC",
      chartData       : chartData.roic,
      name            : "Return on Invested Capital (ROIC)",
      nameBar         : " ",
      chartDataGrowth : chartData.roic_growth,
      labelUpBar      : "ROIC Growth",
      refer           : ref_all.roic,
    },
    {
      labelUp         : "Equity",
      chartData       : chartData.equity,
      name            : "Equity",
      nameBar         : " ",
      chartDataGrowth : chartData.equity_growth,
      labelUpBar      : "Equity Growth",
      refer           : ref_all.equity,
    },
    {
      labelUp         : "EPS",
      chartData       : chartData.eps,
      name            : "Earnings Per Share (EPS)",
      nameBar         : " ",
      chartDataGrowth : chartData.eps_growth,
      labelUpBar      : "EPS Growth",
      refer           : ref_all.eps,
    },
    {
      labelUp         : "Sales",
      chartData       : chartData.sales,
      name            : "Sales",
      nameBar         : " ",
      chartDataGrowth : chartData.sales_growth,
      labelUpBar      : "Sales Growth",
      refer           : ref_all.sales,
    },
    {
      labelUp         : "Free Cash Flow",
      chartData       : chartData.fcf,
      name            : "Free Cash Flow",
      nameBar         : " ",
      chartDataGrowth : chartData.fcf_growth,
      labelUpBar      : "Free Cash Flow Growth",
      refer           : ref_all.fcf,
    },
    {
      labelUp         : "Operating Free Cash Flow",
      chartData       : chartData.ofcf,
      name            : "Operating Free Cash Flow",
      nameBar         : " ",
      chartDataGrowth : chartData.ofcf_growth,
      labelUpBar      : "Operating Free Cash Flow Growth",
      refer           : ref_all.ofcf,
    },
  ]
  return (
    <div className='App bg-blue min-w-[640px]'>
      <Navbar
        chartData={chartData}
        setChartData={setChartData}
        ref_all={ref_all}

      />
      {/* root div of chart */}
      <div className='container min-w-full mt-20'>
        <div>
          <div className='flex flex-col align-center my-4 pt-8 mx-10'>
            {/* roic */}
            {information.map(items => {
              return (
                <>
                  <div ref={items.refer}className='flex flex-row justify-center min-w-full  my-4  mx-10 '>
                    <div className='container pr-10'>
                      <LineChart
                        // ref_price_per_stock={items.refer}
                        chartData={items.chartData}
                        label_up={items.labelUp}
                        name={items.name}
                      />
                    </div>
                    <div className={`container ${items.labelUp=='ROIC'?'pt-8':''} ssm:pt-14 sm:pt-6 md:pt-6 lg:pt-6  mr-16`}>
                      <BarChart
                        // ref_bfn={items.refer}
                        chartData={items.chartDataGrowth}
                        label_up={items.labelUpBar}
                        name={""}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-20 justify-center'>
                    <DoughnutChart
                      // ref_price_per_earning={items.refer}
                      chartDataOne={items.chartData}
                      chartDataTwo={items.chartDataGrowth}
                      label_up={items.labelUp}
                      name={items.name}
                      label_up_two={items.labelUpBar}
                    />
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div
          id='profile'
          className='container fixed inset-y-[100px] right-3 max-w-[140px] '
        />
         <div
          id='bfnDrop'
          className='container  fixed inset-y-[100px] left-56 max-w-[190px] '
        />
      </div>
    </div>
  )
}

export default App
