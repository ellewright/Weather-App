import { iconUrlFromCode } from "../../../api/weatherApi"
import "./Forecast.css"

const hourlyForecast = [
    {
        id: 0,
        time: "6:30 PM",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "60°"
    },
    {
        id: 1,
        time: "7:30 PM",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "55°"
    },
    {
        id: 2,
        time: "8:30 PM",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "50°"
    },
    {
        id: 3,
        time: "9:30 PM",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "45°"
    },
    {
        id: 4,
        time: "10:30 PM",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "40°"
    },
]

const dailyForecast = [
    {
        id: 0,
        day: "Sunday",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "50°"
    },
    {
        id: 1,
        day: "Monday",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "60°"
    },
    {
        id: 2,
        day: "Tuesday",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "70°"
    },
    {
        id: 3,
        day: "Wednesday",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "80°"
    },
    {
        id: 4,
        day: "Thursday",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "70°"
    },
    {
        id: 5,
        day: "Friday",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "60°"
    },
    {
        id: 6,
        day: "Saturday",
        img: {
            src: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        temperature: "50°"
    },
]

export default function Forecast({ isHourly, items }) {
    return (
        <>
            <div className="forecast-title-container">
                <p className="forecast-title">
                    {isHourly ? "Hourly Forecast" : "Daily Forecast"}
                </p>
            </div>
            <hr className="divider" />
            <div className="forecast-details-container">
                {item.map((item) => (
                    <div key={item.id} className="forecast-detail">
                        <p className="forecast-time">
                            {item.title}
                        </p>
                        <img
                            src={iconUrlFromCode(item.icon)}
                            className="forecast-icon"
                            alt="Forecast icon." />
                        <p className="forecast-temperature">
                            {`${item.temp.toFixed()}°`}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}