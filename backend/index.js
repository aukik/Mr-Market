import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

//import routers
import useRoutes from "./routes/route.js"

//initialize
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
//routers
app.use("/", useRoutes)

//mongodb server
const CONNECTION_URL =
  "mongodb+srv://aukikaurnab:VbZ2dNdsgIJ6Xl7F@cluster0.7tlhubd.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server on  ${PORT}`)))
  .catch(error => console.log(error.message))
// mongoose.set("useFindAndModify", false)
