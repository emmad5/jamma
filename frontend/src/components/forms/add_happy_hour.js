import React from 'react';


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
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
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
            <div className="session-title">
                <h1>Add a Happy Hour Near You</h1>
            </div>
            <div className="session-form" >
                <div className="session-form-container">
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
                            <input
                                type="text"
                                value={this.state.days}
                                onChange={this.update('days')}
                                placeholder="days"
                            />
                            <br />
                            <br />
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
            </div>
        </div>) 
    }
}

export default AddHappyHour