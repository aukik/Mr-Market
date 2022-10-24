import React from "react"
const mos1 = "What is the Margin of Safety?"
const mos2 =
  "The Margin of Safety is the discount rate you can buy a wonderful business at as a Rule One investor, which is generally 50% off the Sticker Price, or fair value of the company’s share price.Because the Margin of Safety is just 50% of the Sticker Price, it allows you the ability to purchase into the business with lower risk. Setting this limitation on the price of a business before you buy it helps protect you by providing an extra 50% cushion off the value of the company. Since RULERS do a lot of research into businesses before buying into them, it should always be something you’re confident in purchasing. However, anything can happen with the stock market, and it makes sense to allot yourself an extra measure of protection. Buying at 50% off does just that."
const mos3 = "The Margin of Safety Formula"
const mos4 =
  "To find the Margin of Safety, you first need to find the Sticker Price of a business and its stock. In order to evaluate the Sticker Price you want to find the Future Growth Rate, the P/E Ratio, and your Minimum Acceptable Rate of Return. The Future Growth Rate is always an estimate, the other numbers you can find on financial statements and plug them into the calculator above to see the value, or Sticker Price, of the company's stock. Next, you simply cut that price in half (or take 50%) and that is your Margin of Safety price. For example, if you wanted to buy into a business that was worth $80 per share (Sticker Price), you would look for a Margin of Safety of $40. If the company cannot be bought at $40 then you should add it to your watchlist, update your calculations periodically as new information becomes available, and exercise patience."
const Mos = () => {
  return (
    <div className='flex flex-col pb-28 '>
      <div className='flex flex-row self-start  my-4'>
        <p className='text-bluematte text-4xl ml-24'>
          Sticker Price and Margin of Safety
        </p>
        <img
          className='max-w-[50px] mx-3'
          src='http://cdn.discordapp.com/attachments/886258864289366027/1033792360603209819/Untitled-1-01_1.png'
        />
      </div>
      <div>
        <p className='text-graytext2 text-justify  my-4  mx-24  font-sans text-2xl font-bold'>
          {mos1}
        </p>
        <p className='text-graytext2 text-justify mt-4 mb-12 mx-24 font-sans text-xl'>
          {mos2}
        </p>
        <p className='text-graytext2 text-justify my-4 mx-24  font-sans text-2xl font-bold'>
          {mos3}
        </p>
        <p className='text-graytext2 text-justify my-4  mx-24 font-sans text-xl'>
          {mos4}
        </p>
      </div>
      <div class='flex flex-col self-center w-full lg:w-7/12 bg-bluedark mt-14 p-5 rounded-lg'>
        <div className='self-center my-6'>
          <p className='text-bluematte text-4xl font-semibold'>
            Calculate Sticker Price and Margin of Safety
          </p>
        </div>
        <div className='flex flex-row my-2'>
          <div className='container max-w-half '>
            <div className='flex flex-row pl-12'>
              <p className='text-graytext2 text-2xl font-sans'>
                Minimum Acceptable Rate of Return
              </p>
              <img
                className='max-w-[30px] mx-2'
                src='https://cdn.discordapp.com/attachments/886258864289366027/1033783260267958302/Untitled-1-01.png'
              />
            </div>
          </div>
          <div className='container  max-w-half '>
            <div className='flex flex-row pl-8'>
              <p className='text-graytext2 text-2xl font-sans'>
                Number of Years
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center my-2 ml-8'>
          <div className='container flex    max-w-half  pl-4'>
            <input
              placeholder='Usually 15%...'
              className='bg-gray text-white rounded-lg border pl-6  border-graylight min-w-[90%] min-h-[50px]'
            />
          </div>
          <div className='container flex max-w-half pl-4'>
            <input
              placeholder='Usually 10...'
              className='bg-gray text-white rounded-lg border pl-6 border-graylight min-w-[90%] min-h-[50px]'
            />
          </div>
        </div>
        <div className='container flex justify-end pr-12 my-2'>
          <button className='transition  delay-50 duration-500 ease-in-out   text-black border-2 hover:border-indigodark border-[#34456b] drop-shadow-md  hover:bg-indigolight font-medium rounded-lg text-sm px-4 py-2 bg-bluetheme'>
            Calculate
          </button>
        </div>
        <div className='container flex flex-row mt-6 pr-4'>
          <div className='container max-w-half'>
            <p className='text-graytext2 font-sans text-3xl font-semibold'>
              Sticker Price
            </p>
          </div>
          <div className='container max-w-half'>
            <p className='text-graytext2 font-sans text-3xl font-semibold'>
              Margin of Safety
            </p>
          </div>
        </div>
        <div className='container flex flex-row my-2 pr-4'>
          <div className='container max-w-half'>
            <p className='text-bluetheme font-sans text-3xl '>0</p>
          </div>
          <div className='container max-w-half'>
            <p className='text-bluetheme font-sans text-3xl'>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mos
