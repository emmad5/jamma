import React from 'react';
import './map.css';
import {styleOptions} from './mapstyle';

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.addHappyHour = this.addHappyHour.bind(this);
        this.handleLocationError = this.handleLocationError.bind(this)
    }
    componentWillUnmount() {
        this.props.closeModal()
    }

    componentDidMount(){
        this.props.getBusinesses();

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13,
            styles: styleOptions
        }
        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.infoWindow = new window.google.maps.InfoWindow;
        this.listenForMove();
        let that = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                that.infoWindow.setPosition(pos);
                that.infoWindow.setContent('You are here!');
                that.infoWindow.open(that.map);
            
            }, function () {
                that.handleLocationError(true, that.infoWindow, that.map.getCenter());
            });
        } else {
            that.handleLocationError(false, that.map.getCenter());
        }
    
    }

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

    
    handleLocationError(browserHasGeolocation, pos) {
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        this.infoWindow.open(this.map);
    }

    
    addHappyHour() {
      
        if (this.props.businesses.length) {
         
            for (let i = 0; i < this.props.businesses.length; i++) {
                let biz = this.props.businesses[i]
                let pos = new window.google.maps.LatLng(this.props.businesses[i].longLat[1], this.props.businesses[i].longLat[0]);
                const marker = new window.google.maps.Marker({
                    position: pos,
                    map: this.map,
                    color: "white",
             
                });
                marker.addListener('click', () => {
                    this.props.openModal('happyhour', { business: this.props.businesses[i]});
                });
                // marker.addListener('mouseover', () => {   
                //     this.props.openModal('smallhappyhour', { business: this.props.businesses[i] });
                // })
                // marker.addListener('mouseout', () => {
                //     this.props.closeModal('smallhappyhour', { business: this.props.businesses[i] });
                    
                // })
                marker.addListener('mouseover', function (event) {
                    let label = {
                        text: biz.name,
                        color: '#8FB5B7',
                        labelClass: 'label',
                        fontSize: '20px',
                        fontFamily: 'Symbol',
                        fontWeight: "bold",
                     
                    }
                    this.setLabel(label);
                    // var icon = { 
                    //     url: 'https://st2.depositphotos.com/1368414/10995/v/950/depositphotos_109950466-stock-illustration-vodka-martini-cocktail-glass.jpg', 
                    //     scaledSize: new window.google.maps.Size(100, 100),
                      
                    // };
                    // this.setIcon(icon)
                    // this.setIcon(biz.imageUrl)
                });
                marker.addListener('mouseout', function (event) {
                    this.setLabel(null);
                });
            }
        } 
    }
   
    listenForMove() {
        window.google.maps.event.addListener(this.map, 'idle', () => {
            this.map.getBounds();
        });
    }


    render() {
        this.addHappyHour();
        return (< div className="map" ref = { map => this.mapNode = map }></div>)
    }
}

export default Map;