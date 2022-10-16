import React,{ useState ,useEffect} from "react"
import User from "./User"
import UserProfile from "./UserProfile"
import ReactDOM from "react-dom/client"



const Navbar = ({ ref_bfn,ref_price_per_stock,ref_price_per_earning }) => {
  const navbar_links = [
    { name: "Price Per Earnings",refer:ref_price_per_stock},
    { name: "Big Five Numbers",refer:ref_bfn},
    { name: "Price Per Earnings",refer:ref_price_per_earning}
]

  const  reference=(ref)=>{
    ref.current?.scrollIntoView({behavior: 'smooth' })
   }
  const [prof, setProf] = useState(false);

  useEffect(()=>{

      const profile = ReactDOM.createRoot(document.getElementById("profile"))
      profile.render(
        <UserProfile state={prof?'visible':'hidden'}/>

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
            className='antialiased transition transform text-white my-1 mx-4 text-xl font-semibold     hover:text-bluetheme  2xl:my-8 md:my-8 drop-shadow-xl'
            href=''
          >
            {item.name}
          </button>
        ))}
        <div className="container lg:visible ssm:invisible sm:invisible max-h-12  max-w-xs absolute inset-y-0 right-20 top-5 ">
        <input type="search" id="default-search" className="block p-4 pl-7 w-full text-sm border-graylight rounded-lg border bg-gray placeholder-graytext text-white " placeholder="Search by using trading code" required/>
        <button type="submit" className="text-black border-2 border-[#34456b] drop-shadow-md absolute right-2.5 bottom-0.5  hover:bg-bluetheme/50 font-medium rounded-lg text-sm px-4 py-2 dark:bg-bluetheme">Search</button>
        </div>
        <button onClick={()=>{setProf(!prof)}} className="absolute inset-y-0 right-5  top-0 lg:visible ssm:invisible sm:invisible">
        <User />

        </button>


      </div>
    </div>
  )
}

export default Navbar
