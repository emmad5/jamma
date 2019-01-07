import React from 'react';

class HappyHourShow extends React.Component {
    
    render() {
        console.log(this.props.options)
        return (
            <div>
                <h2>{this.props.options.business.name}</h2>
                <h2>{this.props.options.business.address}</h2>
                <h2>{this.props.options.business.days}</h2>
            </div>
        )
    }
}

export default HappyHourShow;