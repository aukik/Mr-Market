/** @type {import('tailwindcss').Config} */
module.exports = {
  content : [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme   : {
    colors     : {
      transparent : "transparent",
      current     : "currentColor",
      bluetheme   : "#17C0FF",
      bluedark    : "#0F172A",
      bluematte   : "#529FD7",
      blue        : "#1B2640",
      white       : "#FFFFFF",
      gray        : "#374151",
      graylight   : "#4b5563",
      graytext    : "#9ca3af",
      black       : "#000000",
      graytext2   : "#dfe2e1",
      indigolight : "rgb(99 102 241)",
      indigodark  : " rgb(49 46 129)",
    },
    screens    : {
      ssm : "320px",
      sm  : "640px",

      md  : "768px",

      lg  : "1186px",
    },
    extend     : {},
    fontFamily : {},
  },
  plugins : [],
}
