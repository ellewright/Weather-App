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
} }) {
    return (
        <>
            <div className="main-detail-container">
                <p>{details}</p>
            </div>
            <div className="sub-detail-container">
                <img
                    src={iconUrlFromCode(icon)}
                    alt="Sunny icon."
                    className="weather-icon"
                />
                <p className="temp">
                    {`${temp.toFixed()}°`}
                </p>
                <div className="temp-details">
                    <div className="feels-like">
                        <SunIcon className="sun" />
                        Feels like:
                        <span>
                            {feels_like.toFixed()}°
                        </span>
                    </div>
                    <div className="humidity">
                        <EyeDropperIcon className="eye-dropper" />
                        Humidity:
                        <span>
                            {humidity}%
                        </span>
                    </div>
                    <div className="wind">
                        <CloudIcon className="cloud" />
                        Wind:
                        <span>
                            {speed.toFixed()} mph
                        </span>
                    </div>
                </div>
            </div>
            <div className="more-details-container space-x-2">
                <SunIcon className="sunrise-icon" />
                <p>Sunrise: <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p><p>|</p>
                <MoonIcon className="sunset-icon" />
                <p>Sunset: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p><p>|</p>
                <ArrowUpIcon className="max-temp-icon" />
                <p>High: <span>{temp_max.toFixed()}°</span></p><p>|</p>
                <ArrowDownIcon className="min-temp-icon" />
                <p>Low: <span>{temp_min.toFixed()}°</span></p>
            </div>
        </>
    )
}