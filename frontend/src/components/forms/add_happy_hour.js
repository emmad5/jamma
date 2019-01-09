import React from 'react';
import Geocode from "react-geocode";
import './form.css';
import { Redirect } from 'react-router'

Geocode.setApiKey("AIzaSyBqwVIzzxEVM3LVo-wrdv9So1P1SB857H8");


class AddHappyHour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            days: [],
            startTime: '',
            endTime: '',
            menu: {},
            lngLat: [],
            menuErrors: [],
            formErrors: [],
            menuItem: "",
            menuPrice: "",
            menuPriceWithId: [],
            menuItemWithId: [],
            menuId: 0,
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMenuSubmit = this.handleMenuSubmit.bind(this);
        this.updateMenu = this.updateMenu.bind(this);
        this.renderMenuErrors = this.renderMenuErrors.bind(this);
        this.updateDays = this.updateDays.bind(this);
    }
    
    update(field) {
        if (field === 'address' && this.state.address.length > 1) {
            
            Geocode.fromAddress(this.state.address).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    this.setState({
                        lngLat: [lng, lat]
                    });
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


    updateDays(e) {
        let newDays = this.state.days;

        if (!this.state.days.includes(e.currentTarget.value)) {
            newDays.push(e.currentTarget.value)
            this.setState({days: newDays});
        } else {
            newDays = newDays.filter(day => day !== e.currentTarget.value)
            this.setState({days: newDays})
        }
    }
    
    renderRedirect() {
        if (this.state.redirect) {
            return (<Redirect to='/profile' />)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let business = {
            name: this.state.name,
            address: this.state.address,
            days: this.state.days,
            longLat: this.state.lngLat,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            menu: this.state.menu,
            imageUrl: this.state.imageUrl,
        };

        if (this.state.name.length === 0) {
            this.setState({formErrors: ["Name can't be blank"]})
        } else if (this.state.address.length === 0){
            this.setState({formErrors: ["Address can't be blank"]})
        } else if (this.state.startTime.length === 0 || this.state.endTime.length === 0) {
            this.setState({formErrors: ["Time can't be blank"]})
        } else if (Number(this.state.startTime) > Number(this.state.endTime)) {
            this.setState({formErrors: ["Start time can't be after end time"]})      
        } else if (this.state.days.length === 0){
            this.setState({formErrors: ["Days can't be blank"]})      
        } else {
            this.props.addBusiness(business)
            this.setState({redirect: true}) 
            this.setState({formErrors: []})
        }
    }

    renderFormErrors() {
        return (
            <ul>
                {Object.keys(this.state.formErrors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.formErrors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    renderMenuErrors() {
        return (
            <ul>
                {Object.keys(this.state.menuErrors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.menuErrors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    renderMenuOptions(){
        return (
            <form 
                onSubmit={this.handleMenuSubmit}
                className="add-menu-form-container"
            >
                <input
                    type="text"
                    className = "menu-inputs"
                    onChange={this.updateMenu('menuPrice')}
                    placeholder="price"
                    value={this.state.menuPrice}
                />
                <br/>
                <input
                    type="text"
                    className = "menu-inputs"
                    onChange={this.updateMenu('menuItem')}
                    placeholder="item"
                    value={this.state.menuItem}
                />
                <br/>
                <input 
                    className="menu-inputs"
                    className="menu-submit-btn"
                    type = "submit"
                    value = "Add Menu Item"
                />
                <br/>
                <div className="menu-items-div">
                    {this.renderEnteredMenu()}
                </div>
                <div className="happy-hour-errors">
                    {this.renderMenuErrors()}
                </div>
            </form>
        )
    }

    renderEnteredMenu(){
        let prices = Object.keys(this.state.menu).map((price, i) => {
          return (
            <label className="menu-items" key={`menu-${i}`}> 
                <label className="menu-price">
                    ${price}
                </label>
                <label className="menu-item">
                    {this.state.menu[price].join(",  ")}
                </label>
            </label>
          )
        })

        return prices;
    }

    updateMenu(field) {
        if (field === 'menuPrice') {
            return e => {
                this.setState({menuPrice: e.currentTarget.value})
            }
        }
        if (field === "menuItem") {
            return e => {
                this.setState({menuItem: e.currentTarget.value})
            }
        }
    }

    handleMenuSubmit(e){
        e.preventDefault();

        const { menu, menuPrice, menuItem } = this.state;
        const newMenu = menu

        if (menuPrice.length === 0 || menuItem.length === 0) {
            this.setState({menuErrors: ["Price/item can't be empty"]})
        } else if (newMenu[menuPrice]) {
            newMenu[menuPrice].push(menuItem);
            this.setState({ menu: newMenu });
            this.setState({ menuPrice: "" });
            this.setState({ menuItem: "" });
            this.setState({menuErrors: []})
        } else {
            newMenu[menuPrice] = [menuItem];
            this.setState({ menu: newMenu });
            this.setState({ menuPrice: "" });
            this.setState({ menuItem: "" });
            this.setState({menuErrors: []})
        }
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
                            <div className="add-inputs">
                            <label className="checks-label">
                                M
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays}
                                value={['Mon']}
                            />
                            </label>
                            <label className="checks-label">
                                T
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays}
                                value={['Tues']}
                            />
                            </label>
                            <label className="checks-label">
                                W
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays}
                                value={['Weds']}
                            />
                            </label>
                            <label className="checks-label">
                                T
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays}
                                value={['Thurs']}
                            />
                            </label>
                            <label className="checks-label">
                                F
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays}
                                value={['Fri']}
                            />
                            </label>
                            <label className="checks-label">
                                S
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays}
                                value={['Sat']}
                            />
                            </label>
                            <label className="checks-label">
                                S
                            <input
                                className="checks"
                                type="checkbox"
                                onChange={this.updateDays}
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
                            <div className="form-errors-div">
                                {this.renderFormErrors()}
                            </div>
                        </div>
                    </form>
                    <br />
               
                   
                </div>
                {this.renderMenuOptions()}
                {this.renderRedirect()}
            </div>
        </div>) 
    }
}

export default AddHappyHour