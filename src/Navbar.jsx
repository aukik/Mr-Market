import React from "react"

const Navbar = ({ ref_bfn,ref_price_per_stock,ref_price_per_earning }) => {
  const navbar_links = [
    { name: "Price Per Earnings",
    refer:()=>{
     ref_price_per_stock.current?.scrollIntoView({behavior: 'smooth' })
    }
  },
    { name: "Big Five Numbers",
    refer:()=>{
      ref_bfn.current?.scrollIntoView({behavior: 'smooth' })
     }
  },{ name: "Price Per Earnings",
  refer:()=>{
    ref_price_per_earning.current?.scrollIntoView({behavior: 'smooth' })
   }
}

  ]
  return (
    <div>
      <div className=' fixed top-0 left-0 right-0 container-fluid  bg-sky-900   flex h-24 '>
        <img
          className='flex-none mx-2 ml-4 my-2 '
          src='https://media.discordapp.net/attachments/886258864289366027/1029856190697570355/mr_market_logo-01.png?width=335&height=487'
        />
        <a className='antialiased   text-slate-100 mr-10  my-3 mx-2 text-2xl font-extralight 2xl:my-7 md:my-7 drop-shadow-xl'>
          Mr Market
        </a>
        {navbar_links.map(item => (
          <button
            onClick={item.refer}
            className='antialiased transition transform text-white my-1 mx-4 text-xl font-semibold     hover:text-cyan-400  2xl:my-8 md:my-8 drop-shadow-xl'
            href=''
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar
