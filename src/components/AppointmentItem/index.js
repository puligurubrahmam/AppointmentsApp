import './index.css'
import {format} from 'date-fns'
const AppointmentItem = props => {
  const {appointmentsDetails, updateFavorite} = props
  const {id, name, date, favorite} = appointmentsDetails
  const resultDate=format(new Date(date), 'dd MMMM yyyy, EEEE')
  const favorite1 = () => {
    updateFavorite(id)
  }
  const favoriteImg = favorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="listItem">
      <div className="card6">
        <p>{name}</p>
        <button className="starBtn" data-testid="star" onClick={favorite1}>
          <img src={favoriteImg} className="starImg" alt="star"/>
        </button>
      </div>
      <p>Date:{resultDate}</p>
    </li>
  )
}
export default AppointmentItem
