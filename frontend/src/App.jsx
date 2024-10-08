import Forecast from "./components/Forecast/Forecast"
import Inputs from "./components/Inputs/Inputs"
import Navbar from "./components/Navbar/Navbar"
import TempAndDetails from "./components/TempAndDetails/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation"

function App() {
  return (
    <>
      <div className="container shadow-2xl">
        <Navbar />
        <Inputs />
        <TimeAndLocation />
        <TempAndDetails />
        <Forecast
          isHourly={true}
        />
        <Forecast
          isHourly={false}
        />
      </div>
    </>
  )
}

export default App