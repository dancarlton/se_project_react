import WeatherCard from '../WeatherCard/WeatherCard'
import './Main.css'
import ItemCard from '../ItemCard/ItemCard'
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext'
import { useContext } from 'react'

function Main({ weatherData, handleCardClick, clothingItems, handleCardLike, isLoggedIn }) {
  // console.log(clothingItems)

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext)

  const temperatureShown =
    currentTemperatureUnit === 'F' ? weatherData.temp.F : weatherData.temp.C

  return (
    <main className='main'>
      <WeatherCard weatherData={weatherData} />
      <section className='cards'>
        <p className='cards__text'>
          Today is {temperatureShown}&deg; {currentTemperatureUnit} / You want
          to wear:{' '}
        </p>
        <ul className='cards__list'>
          {clothingItems
            .filter(item => {
              return item.weather === weatherData.type
            })
            .map((item, index) => {
              return (
                <ItemCard
                  key={`${item._id}-${index}`}
                  item={item}
                  onCardClick={handleCardClick}
                  handleCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                />
              )
            })}
        </ul>
      </section>
    </main>
  )
}

export default Main
