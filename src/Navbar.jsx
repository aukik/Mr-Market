import React,{ useState ,useEffect} from "react"
import User from "./User"
import ArrowDropDownIcon  from '@mui/icons-material/ArrowDropDown'
import ReactDOM from "react-dom/client"
import Fade from "@mui/material/Fade"
import Slide from "@mui/material/Slide"
import { useDetectClickOutside } from 'react-detect-click-outside';
import Zoom from "@mui/material/Zoom"
const getGrowthRate = (arr) =>{


let new_arr=[]
for (let i = 0; i < arr.length-1; i++) {
  new_arr.push(((arr[i+1]-arr[i])/arr[i])*100)
}
return new_arr
}

const stockPriceApi=(name) =>{



const url = 'https://dhaka-stock-exchange-dse.p.rapidapi.com/monthly_company_price/'+name+'?month=120';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ff49371471mshb75e23687f3ce5dp180923jsn4fc4532d658f',
    'X-RapidAPI-Host': 'dhaka-stock-exchange-dse.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
}

const Navbar = ({ ref_all,chartData,setChartData }) => {




  const [dropFive,setDropFive] = useState(false)

  // close dropdown on click outside
  const reference_drop = useDetectClickOutside({ onTriggered: ()=>{
    setDropFive(false)

  }})

  useEffect(() =>{
    const bigFiveNumberDrop = ReactDOM.createRoot(document.getElementById("bfnDrop"))
    bigFiveNumberDrop.render(

      <Zoom in={dropFive} style={{ transitionDelay: '100ms' }}>
       <div className='border flex flex-col divide-y divide-bluetheme/[.30]  max-h-full py-2 drop-shadow-lg  border-bluematte/[.80]  rounded-lg   bg-bluedark/[.90] '>
       {navbar_links.map(item => (
        <>
         <button
            onClick={()=>{reference(item.refer)}}
            className='antialiased transition delay-50 duration-500 ease-in-out transform text-graytext2 my-1 mx-4 text-lg hover:text-xl font-semibold     hover:text-indigolight   drop-shadow-xl'
            href=''
          >
            {item.name}
          </button>

        </>

        ))}
  </div>
        </Zoom>


    )



  },[dropFive])
  const navbar_links = [
    { name: "ROIC",refer:ref_all.roic},
    { name: "Equity",refer:ref_all.equity},
    { name: "EPS",refer:ref_all.eps},
    { name: "Sales",refer:ref_all.sales},
    { name: "Free Cash",refer:ref_all.fcf},
    { name: "Operating Cash",refer:ref_all.ofcf},
]
const postReq=(data,url)=>(


fetch(url, {
  method: 'POST',
  headers: {
     'Accept': 'application/json',
    // 'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then((response) => response.json())
.then((res) => {
  let roic =  res.roic.slice(1,res.roic.length-1).split(",")
  let eps= res.eps.slice(1,res.eps.length-1).split(",")
  let sales=  res.sales.slice(1,res.sales.length-1).split(",")
  let equity=  res.equity.slice(1,res.equity.length-1).split(",")
  let fcf= res.free_cash_flow.slice(1,res.free_cash_flow.length-1).split(",")
  let ofcf=  res.operating_cash_flow.slice(1,res.operating_cash_flow.length-1).split(",")

  let roic_growth=getGrowthRate(roic)
  let eps_growth=getGrowthRate(eps)
  let sales_growth=getGrowthRate(sales)
  let equity_growth=getGrowthRate(equity)
  let fcf_growth=getGrowthRate(fcf)
  let ofcf_growth=getGrowthRate(ofcf)
  console.log(res.roic)

  setChartData(



  {
    "roic" : roic,
    "eps" : eps,
    "sales":  sales,
    "equity" :  equity,

    "fcf": fcf,
    "ofcf":  ofcf,
    "roic_growth":getGrowthRate(roic),
    "eps_growth":getGrowthRate(eps),
    "sales_growth":getGrowthRate(sales),
    "equity_growth":getGrowthRate(equity),
    "fcf_growth":getGrowthRate(fcf),
    "ofcf_growth":getGrowthRate(ofcf),

  }


)


})

)

  const  reference=(ref)=>{
    ref.current?.scrollIntoView({behavior: 'smooth' })
   }
  const [prof, setProf] = useState(false);
  const [start, setStart] = useState(false);
  const [search, setSearch] = useState(true);


  // useEffect(() =>{
  //   if(start){
  //    console.log("first")
  //   }
  //  },[])

   useEffect(() =>{
    if(start){
  //     fetch("http://localhost:5000")
  //     .then((response) => response.json())
  // .then((data) => console.log(data.gg));
  const defaultSearch = document.getElementById("default-search").value
  console.log("fjhsdlkfjlds")
  stockPriceApi("BEXIMCO")
  postReq({"tradecode":defaultSearch},"http://localhost:7000")
    }

   },[search])


   const reference_drop_profile = useDetectClickOutside({ onTriggered: ()=>{
    setProf(false)

  }})

  useEffect(()=>{
    const button = [
    {
      name : "Profile",
      href : "#",
    },
    {
      name : "History",
      href : "#",
    },
    {
      name : "SignOut",
      href : "#",
    },
  ]

      const profile = ReactDOM.createRoot(document.getElementById("profile"))
      profile.render(

        <Zoom in={prof} style={{ transitionDelay: prof ? '50ms' : '0ms' }}>
         <div className='border drop-shadow-lg  border-bluematte  rounded-lg   bg-bluedark '>
      {button.map(items => (
        <div className='my-2'>
          <a className='text-graytext2 transition delay-50 duration-500 ease-in-out  drop-shadow-md hover:text-xl hover:text-bluematte' href={items.href}>
            {items.name}
          </a>
          <br />
        </div>
      ))}
    </div>
          </Zoom>


      )


  },[prof])


  return (
    <>
      <div className=' fixed navbar top-0 left-0 right-0 container-fluid  bg-bluedark   flex h-24 '>
       <a className='flex-none mx-2 ml-4  my-2' href="http://localhost:3000">
       <img
          className=' max-w-[50px]'
          src='https://media.discordapp.net/attachments/886258864289366027/1029856190697570355/mr_market_logo-01.png?width=335&height=487'
        />
       </a>

        <a href="http://localhost:3000" className='antialiased   text-white mr-10  my-3 mx-2 text-2xl font-extralight 2xl:my-7 md:my-7 drop-shadow-xl'>
          Mr Market
        </a>
        {/* {navbar_links.map(item => (
          <button
            onClick={()=>{reference(item.refer)}}
            className='antialiased transition delay-50 duration-500 ease-in-out transform text-white my-1 mx-4 text-xl font-semibold     hover:text-indigolight  2xl:my-8 md:my-8 drop-shadow-xl'
            href=''
          >
            {item.name}
          </button>
        ))} */}
        <div className="flex flex-row  my-1 mx-4 2xl:my-8 md:my-8" ref={reference_drop}>
        <button
            onMouseEnter={() => setDropFive(true)} onClick={() => setDropFive(false)}
            className='antialiased transition delay-50 duration-500 ease-in-out transform text-white  text-xl font-semibold     hover:text-indigolight   drop-shadow-xl'
            href=''
          >
            Big Five Numbers
          </button>
          <div className="relative top-1">
          <ArrowDropDownIcon color="primary"/>
          </div>



        </div>


        <div  className="container lg:visible ssm:invisible sm:invisible max-h-12  max-w-xs absolute inset-y-0 right-20 top-5 ">
        <input type="search" id="default-search" className="block p-4 pl-7 w-full focus:bg-gray text-sm border-graylight rounded-lg border bg-gray placeholder-graytext text-white " placeholder="Search by using trading code" required/>

        <button  type="submit" onClick={() =>{setStart(true);setSearch(!search)}} className= "transition delay-50 duration-500 ease-in-out   text-black border-2 hover:border-indigodark border-[#34456b] drop-shadow-md absolute right-2.5 bottom-0.5  hover:bg-indigolight font-medium rounded-lg text-sm px-4 py-2 bg-bluetheme">Search</button>

        </div>
        <div ref={reference_drop_profile}>
        <button onClick={()=>{setStart(true);setProf(!prof)}} className="absolute inset-y-0 right-5  top-0 lg:visible ssm:invisible sm:invisible">
        <User />

        </button>
        </div>

      </div>
    </>
  )
}

export default Navbar
