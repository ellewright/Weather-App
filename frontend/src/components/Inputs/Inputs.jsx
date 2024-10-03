import {
    MagnifyingGlassIcon,
    MapPinIcon
} from '@heroicons/react/24/outline'
import "./Inputs.css"

export default function Inputs() {
    return (
        <div className="input-container">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input shadow-xl"
                    placeholder="Search..."
                />
                <MagnifyingGlassIcon className="icon" />
                <MapPinIcon className="icon" />
            </div>
            <div className="f-or-c">
                <button
                    name="imperial"
                    className="fahrenheit"
                >
                    °F
                </button>
                <p className="pipe mx-1">|</p>
                <button
                    name="metric"
                    className="celsius"
                >
                    °C
                </button>
            </div>
        </div>
    )
}