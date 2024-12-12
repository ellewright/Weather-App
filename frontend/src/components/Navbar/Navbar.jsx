import "./Navbar.css"

export default function Navbar({ setQuery }) {

    const cities = [
        {
            id: 1,
            title: "Sacramento"
        },
        {
            id: 2,
            title: "Kansas City"
        },
        {
            id: 3,
            title: "Boston"
        },
        // {
        //     id: 4,
        //     title: "Nashville"
        // },
        // {
        //     id: 5,
        //     title: "Seattle"
        // },
    ]

    return (
        <div className="options-container">
            {cities.map(city => (
                <button
                    key={city.id}
                    className="option"
                    onClick={() => setQuery({
                        q: city.title
                    })}
                >
                    {city.title}
                </button>
            ))}
        </div>
    )
}