import React from 'react';
import './module.css';
import { unlink } from 'fs';


class HappyHourShow extends React.Component {
    
    render() {
        // console.log(this.props.options)
        let days = this.props.options.business.days.map(day => {
          return `${day} `; 
        })

        let menu = this.props.options.business.menu 

        let prices = Object.keys(this.props.options.business.menu).map(price => {
          return (
            <div> 
              {/* <div className="menu-item-space" />  */}
              ${price} {menu[price].join(",  ")}
            </div>
          )
        })

        let menuItems = Object.values(this.props.options.business.menu).map(item => {
          return (
            <ul>
              <li>{`${item}`} </li>
              <div className="menu-item-space"/> 
            </ul>
          ); 
        })

        return (

            <div className="business-info">

                {/* Name */}
                <h2 className="business-name">{this.props.options.business.name.toUpperCase()}</h2>

                {/* image */}
                <div>
                  {/* <img src={"{this.props.options.business.imageUrl}"} /> */}
                </div>

                {/* Address */}
                <h2 className="business-header">Address: </h2>
                <h2 className="business-address">{this.props.options.business.address}</h2>
                
                {/* Days and Time   */}
                <h2 className="business-header">Days and Time: </h2>
                <div className="business-time-container">
                  <h2>{days}:</h2>
                  <h2>{this.props.options.business.startTime}</h2>
                  <h2>-</h2>
                  <h2>{this.props.options.business.endTime}</h2>
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