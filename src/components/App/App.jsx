// App.jsx
import { useEffect, useState } from 'react'

import './App.css'
import '../../../src/vendor/fonts.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import ItemModal from '../ItemModal/ItemModal'

import { getWeather, filterWeatherData } from '../../utils/weatherAPI'
import { coordinates} from '../../utils/constants'

const App = () => {
  const [weatherData, setWeatherData] = useState({
    type: '',
    temp: { F: 999 },
    city: '',
  })
  const [activeModal, setActiveModal] = useState('')
  const [selectedCard, setSelectedCard] = useState('')

  const handleCardClick = card => {
    setActiveModal('preview')
    setSelectedCard(card)
  }

  const handleAddClick = () => {
    setActiveModal('add-garmet')
  }

  const closeActiveModal = () => {
    setActiveModal('')
  }

  useEffect(() => {
    getWeather(coordinates)
      .then(data => {
        const filteredData = filterWeatherData(data)
        setWeatherData(filteredData)
        // debugger
      })
      .catch(console.error)
  }, [])

  return (
    <div className='page'>
      <div className='page__content'>
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main handleCardClick={handleCardClick} weatherData={weatherData} />
        <Footer />
      </div>

      <ModalWithForm
        title='New garment'
        buttonText='Add garmet'
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <label htmlFor='name' className='modal__label'>
          Name{' '}
          <input
            type='text'
            className='modal__input'
            id='name'
            placeholder='Name'
          />
        </label>
        <label htmlFor='imageURL' className='modal__label'>
          Image{' '}
          <input
            type='text'
            className='modal__input'
            id='imageURL'
            placeholder='Image URL'
          />
        </label>
        <fieldset className='modal__radio-buttons'>
          <legend className='modal__legend'>Select the weather type:</legend>
          <label htmlFor='hot' className='modal__label modal__label_type_radio'>
            <input id='hot' type='radio' className='modal__radio-input' /> Hot
          </label>
          <label
            htmlFor='warm'
            className='modal__label modal__label_type_radio'
          >
            <input id='warm' type='radio' className='modal__radio-input' /> Warm
          </label>
          <label
            htmlFor='cold'
            className='modal__label modal__label_type_radio'
          >
            <input id='cold' type='radio' className='modal__radio-input' /> Cold
          </label>
        </fieldset>
      </ModalWithForm>

      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  )
}

export default App
