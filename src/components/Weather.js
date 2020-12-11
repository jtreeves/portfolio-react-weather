import { useState } from 'react'
import axios from 'axios'

import WeatherReport from './WeatherResult'

function Weather() {
    const [zip, setZip] = useState('')
    const [weather, setWeather] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
        axios
            .get(url)
            .then(result => {
                setWeather(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Find Weather Results</h1>
                <label htmlFor='zip'>Zipcode: </label>
                <input name='zip' id='zip' type='text' onChange={event => setZip(event.target.value)} />
                <input type='submit' value='Find Weather' />
            </form>
        </div>
    )
}

export default Weather