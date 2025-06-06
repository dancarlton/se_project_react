import './WeatherCard.css'
import { weatherOptions, defaultWeatherOptions  } from '../../utils/constants'
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext'
import { useContext } from 'react'

function WeatherCard({ weatherData }) {
  // debugger
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext) // {currentTemperatureUnit: "F", handleToggleSwitchChange: ()=>{sdf}}

  const filteredOptions = weatherOptions.filter(option => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    )
  })
  let weatherOption
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? 'day' : 'night']
  } else {
    weatherOption = filteredOptions[0]
  }

  const tempatureShown = currentTemperatureUnit === 'F' ? weatherData.temp.F : weatherData.temp.C

  return (
    <section className='weather-card'>
      <p className='weather-card__temp'>{tempatureShown}&deg; {currentTemperatureUnit}</p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? 'day' : 'night'}time${
          weatherOption?.condition ? ` ${weatherOption.condition}` : ''
        } weather`}
        className='weather-card__image'
      />
    </section>
  )
}

export default WeatherCard
