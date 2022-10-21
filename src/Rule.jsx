import React from "react"

const Rule = () => {
  const part1 =
    "There are five numbers that we have to look at to determine whether a business has a moat. A moat, of course, is some sort of protection by which a business automatically wards off competitors. Protection comes in a lot of flavors. We're going to move up to a better class of management that does their fighting with their brains, not their bullets. It's a lot safer and has a much more consistent success rate. So we want some sort of brand (when you want a Coke, a Pepsi just won't do), secret (patents and trade secrets), switching cost (too much hassle and expense to switch from Windows to a Macintosh), toll bridge (can't advertise to all of Washington, D.C. without buying ad space in the Post), or low price moat (Walmart). Any of these offers protection without a lot of fighting. The Big Five numbers are a clue that there is a big moat in place. And if the Big Five are bad, there ain't no moat. If you want to defend that castle, you better count your ammo."
  const part2 = "The Big Five are just:"
  const part3 = [
    "Return on Invested Capital (ROIC); and the growth rates for",
    "Equity",
    "EPS",
    "Sales",
    "Free Cash",
  ]
  const part4 =
    "We want to see all of these at 10% or better and not drop. Of these, ROIC (you can also find it here on MSN) and equity growth rate are the most important. ROIC tells us that the CEO is doing the most important thing a CEO can do—wisely investing the surplus from profits. If ROIC is below 10% or is dropping, run away. It's a sign the CEO is more interested in building an empire than giving the owners a great return on their investment. Equity is the surplus from profits. We love to see steady equity growth,especially if the business is not giving back some of the equity to us owners (that's called a dividend). We love a business that can use all that surplus to grow, and it keeps the ROIC high. That is an awesome business. And then we want to see EPS and sales and free cash grow at around the same rate as equity. And we want to see them be linear and consistent. By that, I mean they go straight up, not bouncing all over the place, and the growth rate is consistent across the years. I usually look at 10 years, 5 years, 3 years, and 1 year. The goal is to determine whether they are high enough in the long run and then whether they are improving or declining. We want 10% or better and to hold steady or improve. Below you will get the big five numbers of the company, including 10,5,3, and a 1 year average. By judging those numbers, we can be sure whether we want to invest in that company or not."
  return (
    <div>
      <p className='text-bluematte text-4xl text-start'>The Rule</p>
      <p className='text-graytext2 text-justify font-sans text-xl my-4'>
        {part1}
      </p>
      <p className='text-graytext2 font-sans text-xl text-start my-4'>
        {part2}
      </p>
      {part3.map(items => (
        <ul className='list-disc text-graytext2 text-justify text-xl mx-10 my-4 '>
          <li>{items}</li>
        </ul>
      ))}
      <p className='text-graytext2 text-justify font-sans text-xl my-4'>
        {part4}
      </p>
    </div>
  )
}

export default Rule
