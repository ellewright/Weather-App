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
        timezone
    } = data

    const {
        main: details,
        icon
    } = weather[0]

    return {
        lat, lon, details, icon, temp, feels_like, temp_min, temp_max, humidity, speed, dt, country, sunrise, sunset, name, timezone
    }
}

export function formatDate(seconds, timezoneOffset, format = "cccc, LLL dd yyyy") {
    const timezone = timezoneOffset / 3600;
    const zone = timezone >= 0 ? `UTC+${timezone}` : `UTC${timezone}`;

    return DateTime
        .fromSeconds(seconds)
        .setZone(zone)
        .toFormat(format)
}

export function formatToLocalTime(seconds, timezoneOffset, format = "h:mm a") {
    const timezone = timezoneOffset / 3600;
    const zone = timezone >= 0 ? `UTC+${timezone}` : `UTC${timezone}`;

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

    return formattedCurrentWeather
}