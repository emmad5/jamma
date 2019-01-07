import React from 'react';
import './module.css';


class HappyHourShow extends React.Component {
    
    render() {
        console.log(this.props.options)
        return (
            <div>
                <h2>Name: {this.props.options.business.name}</h2>
                <h2>Address: {this.props.options.business.address}</h2>
                <h2>Days: {this.props.options.business.days}</h2>

            </div>
        )
    }
}

export default HappyHourShow;