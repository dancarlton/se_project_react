import { useContext } from 'react'
import './ToggleSwitch.css'
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext'

function ToggleSwitch() {
  // const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F')

  // const handleChange = () => {
  //   if (currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F')
  //   if (currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C')
  // }

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext( CurrentTemperatureUnitContext)


  return (
    <label className='switch'>
      <input type='checkbox' className='switch-box' onChange={handleToggleSwitchChange} />
      <span
        className={
          currentTemperatureUnit === 'F'
            ? 'switch__slider switch__slider-F'
            : 'switch__slider switch__slider-C'
        }
      ></span>
      <p className={`switch__temp-F ${currentTemperatureUnit === 'F' && 'switch__active'}`}>F</p>
      <p className={`switch__temp-C ${currentTemperatureUnit === 'C' && 'switch__active'}`}>C</p>
    </label>
  )
}

export default ToggleSwitch
