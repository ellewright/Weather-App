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

  function handleBackground() {
    if (!weather) {
      return "linear-gradient(to bottom right, var(--cyan), var(--blue))"
    }
    const threshold = units === "metric" ? 20 : 60
    if (weather.temp <= threshold) {
      return "linear-gradient(to bottom right, var(--cyan), var(--blue))"
    }

    return "linear-gradient(to bottom right, var(--yellow), var(--orange))"
  }

  return (
    <>
      <div
        className="container shadow-2x"
        style={{
          backgroundImage: `${handleBackground()}`
        }}
      >
        <Navbar
          setQuery={setQuery}
        />
        <Inputs
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
        />
        {weather && (
          <>
            <TimeAndLocation
              weather={weather}
            />
            <TempAndDetails
              weather={weather}
            />
            {/* <Forecast
              isHourly={true} items={weather.hourly}
            /> */}
            {/* <Forecast
              isHourly={false} items={weather.daily}
            /> */}
          </>
        )}
      </div>
    </>
  )
}

export default App