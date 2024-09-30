import './ItemModel.css'

function ItemModal({ activeModal, card, onClose }) {
  console.log(card)
  return (
    <div className={`modal ${activeModal === 'preview' && 'modal_opened'}`}>
      <div className='modal__content_type_image'>
        <button onClick={onClose} className='modal__close'></button>
        <img key={card._id} src={card.link} alt={card.name} className='modal__image' />
        <div className='modal__footer'>
          <p className='modal__name'>{card.name}</p>
          <p className='modal__weather'>Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemModal