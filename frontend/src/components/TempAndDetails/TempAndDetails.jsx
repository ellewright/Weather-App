import {
    SunIcon,
    MoonIcon,
    EyeDropperIcon,
    CloudIcon,
    ArrowUpIcon,
    ArrowDownIcon
} from '@heroicons/react/24/outline'
import "./TempAndDetails.css"

export default function TempAndDetails() {
    return (
        <>
            <div className="main-detail-container">
                <p>Sunny</p>
            </div>
            <div className="sub-detail-container">
                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt="Sunny icon."
                    className="weather-icon"
                />
                <p className="temp">
                    60°
                </p>
                <div className="temp-details">
                    <div className="feels-like">
                        <SunIcon className="sun" />
                        Feels like:
                        <span>
                            65°
                        </span>
                    </div>
                    <div className="humidity">
                        <EyeDropperIcon className="eye-dropper" />
                        Humidity:
                        <span>
                            30%
                        </span>
                    </div>
                    <div className="wind">
                        <CloudIcon className="cloud" />
                        Wind:
                        <span>
                            11 mph
                        </span>
                    </div>
                </div>
            </div>
            <div className="more-details-container space-x-2">
                <SunIcon className="sunrise-icon" />
                <p>Sunrise: <span>6:30 AM</span></p><p>|</p>
                <MoonIcon className="sunset-icon" />
                <p>Sunset: <span>8:30 PM</span></p><p>|</p>
                <ArrowUpIcon className="max-temp-icon" />
                <p>High: <span>75°</span></p><p>|</p>
                <ArrowDownIcon className="min-temp-icon" />
                <p>Low: <span>55°</span></p>
            </div>
        </>
    )
}