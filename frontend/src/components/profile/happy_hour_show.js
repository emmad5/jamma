import React from 'react';
import './module.css';


class HappyHourShow extends React.Component {
    render() {
        return (
            <div>
                <div className="flex-container-map">
                    <h1>Name of Restaurant</h1>
                    <h3>Days and Times</h3>
                    <p>Monday - Friday</p>
                </div>
            </div>
        )
    }
}

export default HappyHourShow;