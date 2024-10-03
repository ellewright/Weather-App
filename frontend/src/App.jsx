import Inputs from "./components/Inputs/Inputs"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <div className="container shadow-2xl">
        <Navbar />
        <Inputs />
      </div>
    </>
  )
}

export default App