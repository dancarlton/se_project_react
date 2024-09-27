import WeatherCard from '../WeatherCard/WeatherCard'
import './Main.css'
import { defaultClothingItems } from '../../utils/constants'
import ItemCard from '../ItemCard/ItemCard'
import ModalWithForm from '../ModalWithForm/ModalWithForm'

function Main({ weatherData }) {
  return (
    <main className='main'>
      <WeatherCard />
      <section className='cards'>
        <p className='cards__text'>Today is 75 &deg; F/ You want to wear: </p>
        <ul className='cards__list'>
          {defaultClothingItems
            // .filter(item => {
            //   return item.weather === weatherData.type
            // })
            .map(item => {
              return <ItemCard key={item._id} item={item} />
            })}
        </ul>
        <ModalWithForm />
      </section>
    </main>
  )
}

export default Main
