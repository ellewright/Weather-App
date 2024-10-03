import Inputs from "./components/Inputs/Inputs"
import Navbar from "./components/Navbar/Navbar"
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation"

function App() {
  return (
    <>
      <div className="container shadow-2xl">
        <Navbar />
        <Inputs />
        <TimeAndLocation />
      </div>
    </>
  )
}

export default App