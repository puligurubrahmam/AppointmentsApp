import './index.css'
import {Component} from 'react'
import AppointmentItem from '../../components/AppointmentItem'
import {v4 as uuidv4} from 'uuid'
class Appointments extends Component {
  state = {appointmentsList: [], name: '', date: '', starItems: false}
  temp = []
  updateName = event => {
    this.setState({name: event.target.value})
  }
  updateDate = event => {
    this.setState({date: event.target.value})
  }
  updateList = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newList = {
      id: uuidv4(),
      name,
      date,
      favorite: false,
    }
    this.setState(prevState => {
      return {
        appointmentsList: [...prevState.appointmentsList, newList],
        name: '',
        date: '',
      }
    })
  }
  updateFavorite = id => {
    const {appointmentsList} = this.state
    const filteredList = appointmentsList.map(each => {
      if (each.id === id) {
        return {...each, favorite: !each.favorite}
      }
      return each
    })
    this.setState({appointmentsList: filteredList})
  }
  favoriteItems = () => {
    const {starItems} = this.state
    this.setState(prevState => {
      return {starItems: !prevState.starItems}
    })
  }
  filteredList = () => {
    const {appointmentsList, starItems} = this.state
    if (starItems) {
      return appointmentsList.filter(favItem => {
        return favItem.favorite === true
      })
    }
    return appointmentsList
  }
  render() {
    const finalList = this.filteredList()
    const {name, date} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="card1">
            <div>
              <form className="card3">
                <h1 className="heading">Add Appointment</h1>
                <label htmlFor="Title">TITLE</label>
                <input
                  placeholder="Title"
                  className="title"
                  onChange={this.updateName}
                  id="Title"
                  value={name}
                />
                <label htmlFor="Date">DATE</label>
                <input
                  id="Date"
                  type="date"
                  onChange={this.updateDate}
                  value={date}
                />
                <button type="submit" className="btn" onClick={this.updateList}>
                  Add
                </button>
              </form>
            </div>
            <div className="card7">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="image"
                alt="appointments"
              />
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="card4">
            <h1 className="heading">Appointments</h1>
            <button className="starredBtn" onClick={this.favoriteItems}>
              Starred
            </button>
          </div>
          <ul className="card5">
            {finalList.map(eachItem => {
              return (
                <AppointmentItem
                  key={eachItem.id}
                  appointmentsDetails={eachItem}
                  updateFavorite={this.updateFavorite}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
