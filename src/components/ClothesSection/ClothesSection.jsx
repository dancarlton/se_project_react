import ItemCard from '../ItemCard/ItemCard'
import './ClothesSection.css'

function ClothesSection({ onCardClick, handleAddClick, clothingItems }) {
  return (
    <div className='clothes-section'>
      <div className='clothes-section__header'>
        <p className='clothes-section__title'>Your items</p>
        <button
          onClick={handleAddClick}
          type='button'
          className='clothes-section__button'
        >
          + Add new
        </button>
      </div>
      <ul className='clothes-section__items'>
        {clothingItems.map(item => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          )
        })}
      </ul>
    </div>
  )
}

export default ClothesSection
