# Production README

Live site: [Jamma](https://jamma-llama.herokuapp.com)

Jamma is a single-page web application that displays happy hour pins on a map using Google Maps API. Clicking on pins bring happy hour information on a modal. It's built with MongoDB, Express.js, React.js, and Node.js. 

![IntroPng](./app/assets/images/readme/jamma_homepage.png)

# Feature and Implementation
### Happy Hour viewing

Users can login and browse through the map to find/get information about different happy hours. 

![ViewGif](./app/assets/images/readme/viewing_happyhour.gif)


### Adding Happy Hour

Users can share their own happy hour information and add a pin to the map.

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


## Technologies and Technical Challenges

`MongoDB` `Express.js` `React.js` `Redux` `Node.js` `CSS` `HTML5` `JavaScript` `FourSquare API` `Google Maps API` or `Mapbox API`

## Things Accomplished Over the Break

* Proposal
* Group Meeting
* Solid timeline of each MVP and what each member is responsible for 
* Research APIs

## Group Members and Work Breakdown
 
Joshua Choi, Anthony Kumasaka, Emma Deas

Primary responsibilities

Emma: map, styling

Anthony: user auth, styling

Joshua: businesses

## Day-by-day breakdown for each individual.

### Day 1
Emma: Work on 3D map

Anthony: User Auth

Josh: Businesses

### Day 2
Emma: Continue on 3D map

Anthony: Finish user auth

Josh: Continue Busineses 

### Day 3

Emma: Finish map and style

Anthony: Logo / CSS

Josh: Finish businesses and start tips 

### Day 4

Emma: Favorites

Anthony: Logo / CSS 

Josh: Finish tips 

### Day 5

Emma: Favorites

Anthony: Styling / CSS

Josh: Finish tips 

### Day 6

Emma: Filter by 'happening now'

Anthony: Start business accounts

Josh: Start thumbs up / down

### Day 7

Emma: Finish filter 'happening now'

Anthony: Finish business accounts

Josh: Finish thumbs up / down
