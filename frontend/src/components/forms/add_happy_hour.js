import React from 'react';
import Geocode from "react-geocode";
import './form.css';

Geocode.setApiKey("AIzaSyBqwVIzzxEVM3LVo-wrdv9So1P1SB857H8");


class AddHappyHour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            days: [],
            vibe: '',
            startTime: '',
            endTime: '',
            menu: {},
            longLat: [],
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    update(field) {
        if (field === 'address' && this.state.address.length > 1) {
            Geocode.fromAddress(this.state.address).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    this.setState({lngLat: [lng, lat]})
                },
                error => {
                    console.error(error);
                }
                );
            }
            return e => this.setState({
                [field]: e.currentTarget.value
            });
        }

    updateDays() {
        return e => this.setState({
            days: this.state.days += (e.currentTarget.value)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let business = {
            name: this.state.name,
            address: this.state.address,
            days: this.state.days,
            vibe: this.state.vibe,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            menu: this.state.menu,
            imageUrl: this.state.imageUrl,
        };
    
        this.props.addBusiness(business);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (<div>
            <div className="form-title">
                <h1>Add a Happy Hour Near You</h1>
            </div>
            <div className="add-form" >
                <div className="add-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="inputs">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                placeholder="Name"
                            />
                            <br />
                            <br />
                            <input
                                type="text"
                                value={this.state.address}
                                onChange={this.update('address')}
                                placeholder="Address"
                            />
                            <br />
                            <br />
                            <input
                                type="text"
                                value={this.state.vibe}
                                onChange={this.update('vibe')}
                                placeholder="vibe"
                            />
                            <br />
                            <br />
                            <div className="add-inputs">
                            <label className="checks-label">
                                M
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays('days')}
                                value={['Mon']}
                            />
                            </label>
                            <label className="checks-label">
                                T
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays('days')}
                                value={['Tues']}
                            />
                            </label>
                            <label className="checks-label">
                                W
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays('days')}
                                value={['Wed']}
                            />
                            </label>
                            <label className="checks-label">
                                T
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays('days')}
                                value={['Thurs']}
                            />
                            </label>
                            <label className="checks-label">
                                F
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays('days')}
                                value={['Fri']}
                            />
                            </label>
                            <label className="checks-label">
                                S
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays('days')}
                                value={['Sat']}
                            />
                            </label>
                            <label className="checks-label">
                                S
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays('days')}
                                value={['Sun']}
                            />
                            </label>
                            </div>
             
                            <input
                                type="text"
                                value={this.state.startTime}
                                onChange={this.update('startTime')}
                                placeholder="startTime"
                            />
                            <br />
                            <br />
                            <input
                                type="text"
                                value={this.state.endTime}
                                onChange={this.update('endTime')}
                                placeholder="endTime"
                            />
                            <br />
                            <br />
                            <input
                                type="text"
                                value={this.state.menu}
                                onChange={this.update('menu')}
                                placeholder="menu"
                            />
                            <br />
                            <br />
                            <input
                                type="text"
                                value={this.state.imageUrl}
                                onChange={this.update('imageUrl')}
                                placeholder="imageUrl"
                            />
                            <br />
                            <br />
                            <input className="submit-btn"
                                type="submit"
                                value="Submit"
                            />
                            {this.renderErrors()}
                        </div>
                    </form>
                    <br />
               
                   
                </div>
                <div className="add-menu-form-container">
                    <input
                        type="text"
                        value={this.state.menu}
                        onChange={this.update('menu')}
                        placeholder="menu"
                    />
                    <input className = "submit-btn"
                        type = "submit"
                        value = "Submit"
                    />
                </div>
            </div>
        </div>) 
    }
}

export default AddHappyHour