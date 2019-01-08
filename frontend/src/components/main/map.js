import React from 'react';
import './map.css';
import {styleOptions} from './mapstyle';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.addHappyHour = this.addHappyHour.bind(this);
        this.handleLocationError = this.handleLocationError.bind(this)
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
                this.handleLocationError(true, that.infoWindow, that.map.getCenter());
            });
        } else {
            this.handleLocationError(false, that.map.getCenter());
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
                let pos = new window.google.maps.LatLng(this.props.businesses[i].longLat[1], this.props.businesses[i].longLat[0]);
                const marker = new window.google.maps.Marker({
                    position: pos,
                    map: this.map,
                });
                marker.addListener('click', () => {
                    this.props.openModal({ business: this.props.businesses[i]});
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