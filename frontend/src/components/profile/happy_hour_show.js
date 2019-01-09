import React from 'react';
import './module.css';
import { removeBusiness } from '../../actions/business_actions';


class HappyHourShow extends React.Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.closeModal();
    this.props.removeBusiness(this.props.options.business);
  }
    
    render() {

        let days = this.props.options.business.days.map(day => {
          return `${day} `; 
        })

        if (!this.props.options.business.menu) {
       this.props.options.business.menu = {}
     }

        let menu = this.props.options.business.menu 

        let prices = Object.keys(this.props.options.business.menu).map(price => {
          return (
            <div> 
              ${price} {menu[price].join(",  ")}
            </div>
          )
        })

      let startTimeString = this.props.options.business.startTime;
      let endTimeString = this.props.options.business.endTime; 

      let startHour = startTimeString.split(":")
      let startTime; 
      if (Number(startHour[0]) < 12) {
        startTime = Number(startHour[0]) % 12 + ":" + startHour[1] + "am"
      } else {
        startTime = Number(startHour[0]) % 12 + ":" + startHour[1] + "pm"        
      }

      let endHour = endTimeString.split(":")
      let endTime; 
      if (Number(endHour[0]) < 12) { 
        endTime = Number(endHour[0]) % 12 + ":" + endHour[1] + "am"
      } else {
        endTime = Number(endHour[0]) % 12 + ":" + endHour[1] + "pm"
      }

      
      // let startTime = this.props.options.business.startTime === 12 ? 12 : (this.props.options.business.startTime) % 12; 
      // let endTime = this.props.options.business.endTime === 12 ? 12 : (this.props.options.business.endTime) % 12; 
      

        return (

            <div className="business-info">
                <h2 className="business-name">{this.props.options.business.name.toUpperCase()}</h2>
                <div className="img-container">
                  <img className="img-show" src={this.props.options.business.imageUrl} alt='happy-hour' />
                </div>
                <h2 className="business-header">Address: </h2>
                <h2 className="business-address">{this.props.options.business.address}</h2>
                <h2 className="business-header">Days and Time: </h2>
                <div className="business-time-container">
                  <h2>{days}:</h2>
                  <h2>{startTime}</h2>
                  <h2>-</h2>
                  <h2>{endTime}</h2>
                </div>
                <h2 className="business-header">Menu</h2>
                <div className="business-menu-container">
                    {prices}
                </div>
            <button className="remove-btn" onClick={this.remove}>Remove</button>
            </div>
        )
    }
}

export default HappyHourShow;