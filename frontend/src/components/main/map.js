import React from 'react';

import './map.css';
import MarkerManager from '../../util/marker_manager';
import {styleOptions} from './mapstyle';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.addHappyHour = this.addHappyHour.bind(this);

    
    }

    componentDidMount(){
        this.props.getBusinesses();

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13,
            styles: styleOptions
        }
        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)
        this.listenForMove();
       
    }

    
    addHappyHour() {
        if (this.props.businesses.length) {
            for (let i = 0; i < this.props.businesses.length; i++) {
                let pos = new window.google.maps.LatLng(this.props.businesses[i].longLat[1], this.props.businesses[i].longLat[0]);
                const marker = new window.google.maps.Marker({
                    position: pos,
                    map: this.map
                });
                marker.addListener('click', () => {
                    this.props.openModal('happyhour');
                });
            }
        } 
    }

    listenForMove() {
        window.google.maps.event.addListener(this.map, 'idle', () => {
            const bounds = this.map.getBounds();
        });
    }


    render() {
        this.props.happyHours.forEach(this.addHappyHour);
        return (< div className="map" ref = { map => this.mapNode = map }></div>)
    }
}

export default Map;