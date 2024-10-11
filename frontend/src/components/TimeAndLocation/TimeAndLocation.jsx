import { formatToLocalTime } from "../../../api/weatherApi"
import "./TimeAndLocation.css"

export default function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
    return (
        <>
            <div className="time-container">
                <p className="time">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>
            <div className="location-container">
                <p className="location">
                    {`${name}`}, {`${country}`}
                </p>
            </div>
        </>
    )
}