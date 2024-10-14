import { useEffect, useState } from "react"
import getFormattedWeatherData from "../api/weatherApi"
import Forecast from "./components/Forecast/Forecast"
import Inputs from "./components/Inputs/Inputs"
import Navbar from "./components/Navbar/Navbar"
import TempAndDetails from "./components/TempAndDetails/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation"

function App() {

  const [query, setQuery] = useState({ q: "Kansas City" })
  const [units, setUnits] = useState("imperial")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      await getFormattedWeatherData({
        ...query,
        units
      })
        .then((data) => {
          setWeather(data)
        })
    }

    fetchWeather()
  }, [query, units])

  return (
    <>
      <div className="container shadow-2xl">
        <Navbar />
        <Inputs />

        {weather && (
          <>
            <TimeAndLocation
              weather={weather}
            />
            <TempAndDetails
              weather={weather}
            />
            {/* <Forecast
              isHourly={true}
            />
            <Forecast
              isHourly={false}
            /> */}
          </>
        )}
      </div>
    </>
  )
}

export default App