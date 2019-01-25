# Production README

Live site: [Jamma](https://jamma-llama.herokuapp.com)

Jamma is a single-page web application that displays happy hour pins on a map using Google Maps API. Clicking on pins bring happy hour information on a modal. It's built with MongoDB, Express.js, React.js, and Node.js. 

![IntroPng](./app/assets/images/readme/jamma_homepage.png)

# Feature and Implementation
### Happy Hour viewing

Users can login and browse through the map to find/get information about different happy hours. We utilized a modal to display individual happy hours in a clean and distinct fashion. 
```javascript
function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    let modal_class;
    switch (modal.type) {
        case 'happyhour':
            modal_class = 'modal-background';
            component = <HappyHourShowContainer options={modal.options}/>
            break;
        default:
            return null;
    }
    return (
        <div className={modal_class} onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}
```
![ViewGif](./app/assets/images/readme/viewing_happyhour.gif)


### Adding Happy Hour

Users can share their own happy hour information and add a pin to the map. We used Google's Geocode API to pull the GPS Coordinates from the user's input address to correctly display the happy hour location on the map. 


```javascript
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
```
![AddGif](./app/assets/images/readme/adding_happyhour.gif)


### Removing Happy Hour

Users can remove happy hours they've added by clicking Remove button on the happy hour modal.

For this feature, we made sure to reset the pins each time a happy hour is removed so that changes could be reflected in real time.

```javascript
componentDidUpdate(prevProps) {
    if (prevProps.businesses.length > this.props.businesses.length) {
        const mapOptions = {
            center: {
                lat: 37.7758,
                lng: -122.435
            },
            zoom: 13,
            styles: styleOptions
        }
        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.infoWindow = new window.google.maps.InfoWindow;
        this.listenForMove();
        let that = this;

        this.addHappyHour();
    }
}
```

![RemoveGif](./app/assets/images/readme/remove_happyhour.gif)
