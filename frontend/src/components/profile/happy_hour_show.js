import React from 'react';
import './module.css';


class HappyHourShow extends React.Component {
    
    render() {
        // console.log(this.props.options)
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
              {/* <div className="menu-item-space" />  */}
              ${price} {menu[price].join(",  ")}
            </div>
          )
        })

      let startTime = this.props.options.business.startTime === 12 ? 12 : (this.props.options.business.startTime) % 12; 
      let endTime = this.props.options.business.endTime === 12 ? 12 : (this.props.options.business.endTime) % 12; 

        return (

            <div className="business-info">

                {/* Name */}
                <h2 className="business-name">{this.props.options.business.name.toUpperCase()}</h2>

                {/* image */}
                <div className="img-container">
                  <img className="img-show" src={this.props.options.business.imageUrl} alt='happy-hour' />
              {/* <img src="http://villagevino.com/wp-content/uploads/2013/02/happy-hour-wine.jpg" alt=""/> */}
                </div>

                {/* Address */}
                <h2 className="business-header">Address: </h2>
                <h2 className="business-address">{this.props.options.business.address}</h2>
                
                {/* Days and Time   */}
                <h2 className="business-header">Days and Time: </h2>
                <div className="business-time-container">
                  <h2>{days}:</h2>
                  <h2>{startTime}</h2>
                  <h2>-</h2>
                  <h2>{endTime}pm</h2>
                </div>

                {/* menu */}
                <h2 className="business-header">Menu</h2>
                <div className="business-menu-container">
                    {prices}
                </div>

            </div>
        )
    }
}

export default HappyHourShow;