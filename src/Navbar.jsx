import React,{ useState ,useEffect} from "react"
import User from "./User"

import ReactDOM from "react-dom/client"
import Fade from "@mui/material/Fade"
import Slide from "@mui/material/Slide"
import Zoom from "@mui/material/Zoom"


const Navbar = ({ ref_bfn,ref_price_per_stock,ref_price_per_earning,chartData,setChartData }) => {
  const navbar_links = [
    { name: "Price Per Earnings",refer:ref_price_per_stock},
    { name: "Big Five Numbers",refer:ref_bfn},
    { name: "Price Per Earnings",refer:ref_price_per_earning}
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
.then((res) => {console.log(res.roic);setChartData(


  {
    "roic" :  res.roic.slice(1,res.roic.length-1).split(","),
    "eps" : res.eps.slice(1,res.roic.length-1).split(","),
    "sales":  res.sales.slice(1,res.roic.length-1).split(","),
    "equity" :  res.equity.slice(1,res.roic.length-1).split(","),
    "freeCash":  res.free_cash_flow.slice(1,res.roic.length-1).split(","),
    "operatingFreeCash":  res.operating_cash_flow.slice(1,res.roic.length-1).split(","),
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

  postReq({"tradecode":defaultSearch},"http://localhost:7000")
    }

   },[search])




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
    <div>
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
        {navbar_links.map(item => (
          <button
            onClick={()=>{reference(item.refer)}}
            className='antialiased transition delay-50 duration-500 ease-in-out transform text-white my-1 mx-4 text-xl font-semibold     hover:text-indigolight  2xl:my-8 md:my-8 drop-shadow-xl'
            href=''
          >
            {item.name}
          </button>
        ))}
        <div  className="container lg:visible ssm:invisible sm:invisible max-h-12  max-w-xs absolute inset-y-0 right-20 top-5 ">
        <input type="search" id="default-search" className="block p-4 pl-7 w-full focus:bg-gray text-sm border-graylight rounded-lg border bg-gray placeholder-graytext text-white " placeholder="Search by using trading code" required/>

        <button onClick={()=>{setStart(true);setSearch(!search)}} type="submit" className= "transition delay-50 duration-500 ease-in-out   text-black border-2 hover:border-indigodark border-[#34456b] drop-shadow-md absolute right-2.5 bottom-0.5  hover:bg-indigolight font-medium rounded-lg text-sm px-4 py-2 bg-bluetheme">Search</button>

        </div>
        <button onClick={()=>{setProf(!prof)}} className="absolute inset-y-0 right-5  top-0 lg:visible ssm:invisible sm:invisible">
        <User />

        </button>


      </div>
    </div>
  )
}

export default Navbar
