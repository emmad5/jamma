import React from 'react';
import './module.css';


class SmallHappyHourShow extends React.Component {
    constructor(props) {
        super(props)
        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.closeModal();
        this.props.removeBusiness(this.props.options.business)
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
        if (Number(startHour[0]) === 0) {
            startTime = "12:" + startHour[1] + "am"
        } else if (Number(startHour[0]) < 12) {
            startTime = Number(startHour[0]) % 12 + ":" + startHour[1] + "am"
        } else if (Number(startHour[0]) === 12) {
            startTime = "12:" + startHour[1] + "pm"
        } else {
            startTime = Number(startHour[0]) % 12 + ":" + startHour[1] + "pm"
        }

        let endHour = endTimeString.split(":")
        let endTime;
        if (Number(endHour[0]) === 0) {
            endTime = "12:" + endHour[1] + "am"
        } else if (Number(endHour[0]) < 12) {
            endTime = Number(endHour[0]) % 12 + ":" + endHour[1] + "am"
        } else if (Number(endHour[0]) === 12) {
            endTime = "12:" + endHour[1] + "pm"
        } else {
            endTime = Number(endHour[0]) % 12 + ":" + endHour[1] + "pm"
        }


        // let startTime = this.props.options.business.startTime === 12 ? 12 : (this.props.options.business.startTime) % 12; 
        // let endTime = this.props.options.business.endTime === 12 ? 12 : (this.props.options.business.endTime) % 12; 


        return (

            <div className="business-info">
                <h2 className="business-name">{this.props.options.business.name.toUpperCase()}</h2>
                <div className="img-container">
                    <img className="img-show-small" src={this.props.options.business.imageUrl} alt='happy-hour' />
                </div>
              
            </div>
        )
    }
}

export default SmallHappyHourShow;