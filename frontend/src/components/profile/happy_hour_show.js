import React from 'react';
import './module.css';
import { removeBusiness } from '../../actions/business_actions';


class HappyHourShow extends React.Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.removeBusiness(this.props.options.business)
      .then(this.props.closeModal())
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

      let startTime = this.props.options.business.startTime === 12 ? 12 : (this.props.options.business.startTime) % 12; 
      let endTime = this.props.options.business.endTime === 12 ? 12 : (this.props.options.business.endTime) % 12; 

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
                  <h2>{endTime}pm</h2>
                </div>
                <h2 className="business-header">Menu</h2>
                <div className="business-menu-container">
                    {prices}
                </div>
            <button onClick={this.remove}>Remove Happy Hour</button>
            </div>
        )
    }
}

export default HappyHourShow;