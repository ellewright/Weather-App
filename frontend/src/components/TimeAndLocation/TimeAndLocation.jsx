import { formatDate, formatToLocalTime } from "../../../api/weatherApi"
import "./TimeAndLocation.css"

export default function TimeAndLocation({ weather: { dt, timezone, name } }) {
    return (
        <>
            <div className="time-container">
                <p className="date">
                    {formatDate(dt, timezone)}
                </p>
                <br />
                <p className="time">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>
            <div className="location-container">
                <p className="location">
                    {`${name}`}
                </p>
            </div>
        </>
    )
}