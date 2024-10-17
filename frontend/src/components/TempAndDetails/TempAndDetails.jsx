import { formatToLocalTime, iconUrlFromCode } from '../../../api/weatherApi'
import {
    SunIcon,
    MoonIcon,
    EyeDropperIcon,
    CloudIcon,
    ArrowUpIcon,
    ArrowDownIcon
} from '@heroicons/react/24/outline'
import "./TempAndDetails.css"

export default function TempAndDetails({ weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}, units }) {

    function handleColor() {
        const lowThreshold = units === "imperial" ? 32 : 0
        const highThreshold = units === "imperial" ? 60 : 20

        if (details === "Rain") {
            return "white"
        }

        if (temp > highThreshold) {
            return "orange"
        } else if (temp > lowThreshold) {
            return ""
        }
        return "white"
    }

    return (
        <>
            <div className="main-detail-container">
                <p
                    style={{
                        color: `${handleColor()}`
                    }}
                >{details}</p>
            </div>
            <div className="sub-detail-container">
                <img
                    src={iconUrlFromCode(icon)}
                    alt="Weather icon."
                    className="weather-icon"
                />
                <p className="temp">
                    {`${temp.toFixed()}°`}
                </p>
                <div className="temp-details">
                    <div className="feels-like">
                        <SunIcon
                            className="sun"
                            style={{
                                color: `${handleColor()}`
                            }}
                        />
                        Feels like:
                        <span>
                            {feels_like.toFixed()}°
                        </span>
                    </div>
                    <div className="humidity">
                        <EyeDropperIcon
                            className="eye-dropper"
                            style={{
                                color: `${handleColor()}`
                            }}
                        />
                        Humidity:
                        <span>
                            {humidity}%
                        </span>
                    </div>
                    <div className="wind">
                        <CloudIcon
                            className="cloud"
                            style={{
                                color: `${handleColor()}`
                            }}
                        />
                        Wind:
                        <span>
                            {speed.toFixed()} mph
                        </span>
                    </div>
                </div>
            </div>
            <div className="more-details-container">
                <SunIcon
                    className="sunrise-icon"
                    style={{
                        color: `${handleColor()}`
                    }}
                />
                <p>
                    Sunrise: <span>{formatToLocalTime(sunrise, timezone, "h:mm a")}</span>
                </p>
                <MoonIcon
                    className="sunset-icon"
                    style={{
                        color: `${handleColor()}`
                    }}
                />
                <p>
                    Sunset: <span>{formatToLocalTime(sunset, timezone, "h:mm a")}</span>
                </p>
                <ArrowUpIcon
                    className="max-temp-icon"
                    style={{
                        color: `${handleColor()}`
                    }}
                />
                <p>
                    High: <span>{temp_max.toFixed()}°</span>
                </p>
                <ArrowDownIcon
                    className="min-temp-icon"
                    style={{
                        color: `${handleColor()}`
                    }}
                />
                <p>
                    Low: <span>{temp_min.toFixed()}°</span>
                </p>
            </div>
        </>
    )
}