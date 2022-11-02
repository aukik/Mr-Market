import "./App.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import 'react-loading-skeleton/dist/skeleton.css'
import Navbar from "./Navbar"
import Rule from "./Rule"
import { useState, useEffect } from "react"
import { useRef } from "react"
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import Literature from "./Literature.jsx"
import { LineChart, BarChart, DoughnutChart } from "./ReactChart"
import Mos from "./Mos.jsx"
function App() {

  const ref_all={
    roic : useRef(null),
    equity: useRef(null),
    eps :useRef(null),
    sales :useRef(null),
    fcf :useRef(null),
    ofcf :useRef(null),
    rule:useRef(null),
    mos:useRef(null),

  }

  const labelNormal= [
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
  const labelGrowth= [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",

  ]
  const labelOther= [
    "1 Year",
    "3 Years",
    "5 Years",
    "Maximum Years",
  ]


  const initial_data = []
  const initial_data_bar = [ ]
  const initial_data_dough = []
  const [loadingState,setLoadingState]=useState(false)
  const [loadingMos,setLoadingMos]=useState(false)
  const [ chartData, setChartData ] = useState({
    roic   : initial_data,
    eps    : initial_data,
    sales  : initial_data,
    equity : initial_data,
    fcf    : initial_data,
    ofcf   : initial_data,
    roic_growth   : initial_data_bar,
    eps_growth    : initial_data_bar,
    sales_growth  : initial_data_bar,
    equity_growth : initial_data_bar,
    fcf_growth    : initial_data_bar,
    ofcf_growth   : initial_data_bar,
    roic_avg   : initial_data_dough,
    eps_avg    : initial_data_dough,
    sales_avg  : initial_data_dough,
    equity_avg : initial_data_dough,
    fcf_avg    : initial_data_dough,
    ofcf_avg   : initial_data_dough,
    tradecode:""
  })
  const information = [
    { chartDataAvg    : chartData.roic_avg,
      labelUp         : "ROIC",
      chartData       : chartData.roic,
      name            : "Return on Invested Capital (ROIC)",
      nameBar         : " ",
      chartDataGrowth : chartData.roic_growth,
      labelUpBar      : "ROIC Growth",
      refer           : ref_all.roic,

      describe        : "ROIC is Return on Invested Capital, the single most important number to tell you if a business is being run well or not. The number should be equal to or greater than 10% per year, but the real key is seeing if the ROIC number is going up over time. If it's at the same level or going up, then the business is probably well run. If the ROIC number is going down, it means that the CEO is reinvesting the surplus cash and getting a smaller return on it than in previous years."
    },
    {chartDataAvg    : chartData.equity_avg,
      labelUp         : "Equity",
      chartData       : chartData.equity,
      name            : "Equity",
      nameBar         : " ",
      chartDataGrowth : chartData.equity_growth,
      labelUpBar      : "Equity Growth",
      refer           : ref_all.equity,
      describe:"The Equity Growth rate is the rate at which a company is growing its equity. It is important to see that this number is steadily growing over time. This is one of the Rule #1 Big 5 Numbers required to determine whether a company may be a Rule #1 'wonderful business'."
    },
    { chartDataAvg    : chartData.eps_avg,
      labelUp         : "EPS",
      chartData       : chartData.eps,
      name            : "Earnings Per Share (EPS)",
      nameBar         : " ",
      chartDataGrowth : chartData.eps_growth,
      labelUpBar      : "EPS Growth",
      refer           : ref_all.eps,
      describe:"EPS stands for Earnings per Share. The Rule #1 EPS Growth Rate calculator determines the rate at which a company has grown its earnings per share. EPS Growth Rate is one of the 'Big 5 Numbers' required to determine whether a company may be a Rule #1 'wonderful business.'"
    },
    {chartDataAvg    : chartData.sales_avg,
      labelUp         : "Sales",
      chartData       : chartData.sales,
      name            : "Sales",
      nameBar         : " ",
      chartDataGrowth : chartData.sales_growth,
      labelUpBar      : "Sales Growth",
      refer           : ref_all.sales,
      describe:"The Sales Growth Rate of a business is the the rate at which it is growing its sales year over year. The Rule #1 Sales Growth Rate calculator helps you determine this rate of growth. Sales Growth Rate is one of the Big 5 Numbers required to determine whether a company may be a Rule #1 'wonderful business'."
    },
    {chartDataAvg    : chartData.fcf_avg,
      labelUp         : "Free Cash Flow",
      chartData       : chartData.fcf,
      name            : "Free Cash Flow",
      nameBar         : " ",
      chartDataGrowth : chartData.fcf_growth,
      labelUpBar      : "Free Cash Flow Growth",
      refer           : ref_all.fcf,
      describe:"Free cash flow (FCF) is the cash a company generates after taking into consideration cash outflows that support its operations and maintain its capital assets. Amount we get on dividend can depend on this surplus cash but free cash flow in general could be very volatile. So if we see its getting up and down randomly throughout the years in a company we can check Operating Free Cash Flow which is relatively stable to get a better understanding about the flow of cash."
    },
    {chartDataAvg    : chartData.ofcf_avg,
      labelUp         : "Operating Free Cash Flow",
      chartData       : chartData.ofcf,
      name            : "Operating Free Cash Flow",
      nameBar         : " ",
      chartDataGrowth : chartData.ofcf_growth,
      labelUpBar      : "Operating Free Cash Flow Growth",
      refer           : ref_all.ofcf,
      describe:"The Operating Cash Flow Growth Rate (aka Cash Flow From Operations growth rate) is the long term rate of growth of operating cash, the money that is actually coming into the bank from business operations. This can be substantially different than EPS since it is real money (as opposed to earnings which can be somewhat theoretical). Knowing the growth rate helps you determine if the trend of 'operating cash' within a company is good enough to make the business 'wonderful' by Rule #1 standards."
    },
  ]
  return (
    <div className='App bg-blue min-w-[640px] '>
      <Navbar
        chartData={chartData}
        setChartData={setChartData}
        ref_all={ref_all}
        setLoadingState={setLoadingState}
        setLoadingMos={setLoadingMos}

      />
      <div ref={ref_all.rule} className="flex flex-col  mt-32 mb-14 mx-20 ">
        <Element name="rule" className="element">
        <Rule/>
        </Element>

         </div>
      <hr class="my-8 mx-20 h-[2px] bg-bluematte opacity-[.60] "/>
      <SkeletonTheme baseColor="#2b3b5e" highlightColor="#1B2640">
      <div className='container min-w-full '>
        <div>


          <div className='flex flex-col align-center my-2  mx-10'>

            {information.map(items => {
              return (
                <>
                <Element name={items.labelUp} className="element">
                <div ref={items.refer} className='flex flex-col self-start mx-12 my-4'>

                    <div className='self-start my-2'>


                     <p className='text-graytext2 text-6xl font-semibold '> {items.labelUp=='ROIC'?chartData.tradecode.toUpperCase():''}</p>

                     </div>
                      <div className='flex flex-row self-start my-2'>
                      <div className='self-center'> <p className='text-bluematte text-4xl'>{items.name}</p></div>

                      <div className='self-center mx-3 mt-1 max-w-[50px]'> <img src="https://cdn.discordapp.com/attachments/886258864289366027/1033783260267958302/Untitled-1-01.png"/></div>

                      </div>

                      <Literature describe={items.describe}/>
                  </div>

                  <div className='flex flex-row justify-center min-w-full  my-4  mx-10 '>

                    <div className='container pr-10'>
                      <LineChart
                        // ref_price_per_stock={items.refer}

                        setLoadingState={loadingState}
                        chartData={items.chartData}
                        label_up={items.labelUp}
                        name={items.name}
                        labels={labelNormal}
                      />
                    </div>

                    <div className={`container ${items.labelUp=='ROIC'?'pt-8':''} ssm:pt-14 sm:pt-6 md:pt-6 lg:pt-6  mr-16`}>
                      <BarChart
                        // ref_bfn={items.refer}
                        setLoadingState={loadingState}
                        chartData={items.chartDataGrowth}
                        label_up={items.labelUpBar}
                        name={""}
                        labels={labelGrowth}
                      />
                    </div>
                  </div>

                  <div className='flex flex-col py-20 justify-center'>
                    <DoughnutChart
                      // ref_price_per_earning={items.refer}
                      setLoadingState={loadingState}
                      chartDataOne={items.chartDataAvg}
                      chartDataTwo={items.chartDataGrowth}
                      label_up={items.labelUp}
                      name={items.name}
                      label_up_two={items.labelUpBar}
                      labels={labelOther}
                    />
                    <p className="text-white font-lg font-sans">NB: If its blue then all good but check the number twice if this radar chart  appears to be red or orange. Red means all growth rates are less than 10% and Orange means one or more growth rates are less than 10%</p>
                  </div>
                  </Element>
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
          className='container  fixed inset-y-[100px] left-72 max-w-[190px] '
        />
      </div>
      </SkeletonTheme>
        <div ref={ref_all.mos}>
        <Element name="mos" className="element">
        <Mos eps={chartData.eps} setLoadingMos={setLoadingMos} loadingMos={loadingMos} equity={chartData.equity_growth} tradecode={chartData.tradecode}/>
        </Element>
        </div>

      </div>

  )
}

export default App
