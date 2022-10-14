import "./App.css"
import Navbar from "./Navbar"
import { LineChart, BarChart } from "./ReactChart"
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container mx-auto my-10 lg:px-40 '>
        <LineChart />
      </div>
    </div>
  )
}

export default App
