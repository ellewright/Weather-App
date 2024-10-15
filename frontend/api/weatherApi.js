import { DateTime } from "luxon"

function getWeatherData(infoType, searchParams) {
    const url = new URL(import.meta.env.VITE_API_URL + infoType)
    url.search = new URLSearchParams({
        ...searchParams,
        appid: import.meta.env.VITE_API_KEY
    })

    return fetch(url)
        .then((res) => res.json())
}

function formatCurrentWeather(data) {
    const {
        coord: {
            lat,
            lon
        },
        weather,
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity
        },
        wind: {
            speed
        },
        dt,
        sys: {
            country,
            sunrise,
            sunset
        },
        name,
    } = data

    const {
        main: details,
        icon
    } = weather[0]

    return {
        lat, lon, details, icon, temp, feels_like, temp_min, temp_max, humidity, speed, dt, country, sunrise, sunset, name
    }
}

// function formatForecastWeather(data) {
//     let {
//         timezone,
//         daily,
//         hourly
//     } = data

//     daily = daily.slice(1, 6).map((day) => {
//         return {
//             title: formatToLocalTime(day.dt, timezone, "ccc"),
//             temp: day.temp.day,
//             icon: day.weather[0].icon
//         }
//     })

//     hourly = hourly.slice(1, 6).map((hour) => {
//         return {
//             title: formatToLocalTime(hour.dt, timezone, "hh:mm a"),
//             temp: hour.temp,
//             icon: hour.weather[0].icon
//         }
//     })

//     return { timezone, daily, hourly }
// }

export function formatDate(seconds, zone, format = "cccc, LLL dd yyyy") {
    return DateTime
        .fromSeconds(seconds)
        .setZone(zone)
        .toFormat(format)
}

export function formatToLocalTime(seconds, zone, format = "h:mm a") {
    return DateTime
        .fromSeconds(seconds)
        .setZone(zone)
        .toFormat(format)
}

export function iconUrlFromCode(code) {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
}

export default function getFormattedWeatherData(searchParams) {
    const formattedCurrentWeather = getWeatherData("weather", searchParams)
        .then((data) => formatCurrentWeather(data))

    const { lat, lon } = formattedCurrentWeather

    // const formattedForecastWeather = getWeatherData("onecall", {
    //     lat,
    //     lon,
    //     exclude: "current, minutely, alerts",
    //     units: searchParams.units
    // })
    //     .then((data) => formatForecastWeather(data))

    return formattedCurrentWeather
}