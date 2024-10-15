import {
    MagnifyingGlassIcon,
    MapPinIcon
} from '@heroicons/react/24/outline'
import "./Inputs.css"
import { useState } from 'react'

export default function Inputs({ setQuery, units, setUnits }) {

    const [city, setCity] = useState("")

    function handleSearch() {
        if (city !== "") {
            setQuery({
                q: city
            })
        }
    }

    function handleLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({ lat, lon })
            })
        }
    }

    function handleUnits(e) {
        const selectedUnit = e.target.name
        if (units !== selectedUnit) {
            setUnits(selectedUnit)
        }
    }

    return (
        <div className="input-container">
            <div className="search-container">
                <input
                    value={city}
                    type="text"
                    className="search-input shadow-xl"
                    placeholder="Search..."
                    onChange={(e) => {
                        setCity(e.target.value)
                    }}
                />
                <MagnifyingGlassIcon
                    className="icon"
                    onClick={handleSearch}
                />
                <MapPinIcon
                    className="icon"
                    onClick={handleLocation}
                />
            </div>
            <div className="f-or-c">
                <button
                    name="imperial"
                    className="fahrenheit"
                    onClick={handleUnits}
                >
                    °F
                </button>
                <p className="pipe mx-1">|</p>
                <button
                    name="metric"
                    className="celsius"
                    onClick={handleUnits}
                >
                    °C
                </button>
            </div>
        </div>
    )
}