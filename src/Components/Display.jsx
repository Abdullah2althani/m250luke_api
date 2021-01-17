import axios from "axios"
import { useEffect, useState } from "react"

function Display({ category, id }) {
  const [data, setData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${category}/${id}`)
      .then((response) => {
        setErrorMessage('')
        setData(response.data)
      })
      .catch((error) => {
        setErrorMessage(error)
      })
  }, [category, id])

//   when the URIError 
  if (errorMessage !== '') {
    return (
      <img
        src="https:external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FSnorlax.full.2036297.jpg&f=1&nofb=1"
        alt="error-img"
        style={{width: '400px'}}
      />
    )
  }

  //   people
  if (category === "people") {
    return (
      <div>
        <h2>people</h2>
        {data.name}
        <p>height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>Hair color: {data.hair_color}</p>
        <p>Skin color: {data.skin_color}</p>
      </div>
    )
  }
  
  //   planets
  if (category === "planets") {
    return (
      <div>
        <h2>planets</h2>
        <p>name: {data.name}</p>
        <p>climate: {data.climate}</p>
        <p>terrain: {data.terrain}</p>
        <p>surface water: {data.surface_water}</p>
        <p>population: {data.population}</p>
      </div>
    )
  }
}

export default Display