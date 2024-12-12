import { useEffect, useState } from "react"
import getFormattedWeatherData from "../api/weatherApi"
import Forecast from "./components/Forecast/Forecast"
import Inputs from "./components/Inputs/Inputs"
import Navbar from "./components/Navbar/Navbar"
import TempAndDetails from "./components/TempAndDetails/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [query, setQuery] = useState({ q: "Chicago" })
  const [units, setUnits] = useState("imperial")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      let message = `Fetching weather for ${query.q ? query.q : "current location"}.`
      toast.info(message)
      try {
        await getFormattedWeatherData({
          ...query,
          units
        })
          .then((data) => {
            toast.success(`Successfully fetched weather for ${data.name}.`)
            setWeather(data)
          })
      } catch (error) {
        message = `Cannot fetch weather for ${query.q ? query.q : "current location"}. Please try again.`
        toast.error(message)
        console.error(error)
      }
    }

    fetchWeather()
  }, [query, units])

  function handleBackground() {
    const lowThreshold = units === "imperial" ? 32 : 0
    const highThreshold = units === "imperial" ? 60 : 20

    if (!weather) {
      return "linear-gradient(to bottom right, var(--cyan), var(--blue))"
    }

    if (weather.details === "Rain") {
      return "linear-gradient(to bottom right, var(--storm-gray), var(--storm-dark-gray))"
    }

    if (weather.temp > highThreshold) {
      return "linear-gradient(to bottom right, var(--yellow), var(--orange))"
    } else if (weather.temp > lowThreshold) {
      return "linear-gradient(to bottom right, var(--cyan), var(--blue))"
    }
    return "linear-gradient(to bottom right, var(--bright-cyan), var(--cyan))"
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
              units={units}
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
      <ToastContainer
        autoClose={1000}
        theme="colored"
        newestOnTop={true}
      />
    </>
  )
}

export default App