import React from 'react';
import ReactDOM  from 'react-dom';
import {withRouter} from 'react-router-dom';
import './map.css';
import MarkerManager from '../../util/marker_manager';
import {styleOptions} from './mapstyle'


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.addHappyHour = this.addHappyHour.bind(this);
    }

    componentDidMount(){
      
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13,
            styles: [
            {
                elementType: 'geometry',
                stylers: [
                {
                    color: '#ebe3cd'
                }
                ]
            },
            {
                elementType: 'labels',
                stylers: [
                {
                    visibility: 'off'
                }
            ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#523735'
                    }
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#f5f1e6'
                        }
                ]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#c9b2a6'
                        }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#dcd2be'
                    }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#ae9e90'
                        }
                ]
            },
            {
                featureType: 'administrative.neighborhood',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae'
                    }
                ]
            },
            {
                featureType: 'poi',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#93817c'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#a5b076'
                        }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#447530'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f1e6'
                        }
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#fdfcf8'
                        }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        'color': '#f8c967'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#e9bc62'
                        }
                ]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e98d58'
                    }
                ]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#db8555'
                        }
                ]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#806b63'
                    }
                ]
            },
            {
                featureType: 'transit',
                stylers: [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae'
                    }
                ]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#8f7d77'
                        }
                ]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#ebe3cd'
                    }
                ]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dfd2ae'
                    }
                ]
            },
            {
                featureType: 'water',
                stylers: [
                    {
                        color: '#4f86ec'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#96b4b6'
                        }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#92998d'
                    }
                ]
            }
            ]
        }
        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)

        this.listenForMove();
        this.props.happyHours.forEach(this.addHappyHour);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.bussinesses);
    }
    addHappyHour(happyHour) {
        const pos = new window.google.maps.LatLng(happyHour.lat, happyHour.lng);
        const marker = new window.google.maps.Marker({
            position: pos,
            map: this.map
        });
        marker.addListener('click', () => {
            alert(`clicked on: ${happyHour.name}`);
        });
    }

    listenForMove() {
        window.google.maps.event.addListener(this.map, 'idle', () => {
            const bounds = this.map.getBounds();
        

            console.log('center',
                bounds.getCenter().lat(),
                bounds.getCenter().lng());
            console.log("north east",
                bounds.getNorthEast().lat(),
                bounds.getNorthEast().lng());
            console.log("south west",
                bounds.getSouthWest().lat(),
                bounds.getSouthWest().lng());
        });
    }


    render() {
        return (< div className="map" ref = { map => this.mapNode = map }></div>)
    }
}

export default Map;