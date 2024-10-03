import "./Navbar.css"

export default function Navbar() {

    const cities = [
        {
            id: 1,
            title: "Cincinnati"
        },
        {
            id: 2,
            title: "Louisville"
        },
        {
            id: 3,
            title: "Chicago"
        },
        {
            id: 4,
            title: "Nashville"
        },
        {
            id: 5,
            title: "Seattle"
        },
    ]

    return (
        <div className="options-container">
            {cities.map(city => (
                <div
                    key={city.id}
                    className="option"
                >
                    {city.title}
                </div>
            ))}
        </div>
    )
}