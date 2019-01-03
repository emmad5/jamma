import React from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYWRlYXMiLCJhIjoiY2pxY2pidXM0MWZieDQ5b2czZGp1azF1aSJ9.vAlafNdCqofi8OdqKUGr5g';
class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/emmadeas/cjqgxj0j6lcuz2smyu9mmve85',
            zoom: 12,
            center: [-122.431297, 37.773972],
            pitch: 45,
            bearing: -17.6
        });
        map.on('load', function () {
            var layers = map.getStyle().layers;
            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }

            map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "height"]
                    ],
                    'fill-extrusion-base': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "min_height"]
                    ],
                    'fill-extrusion-opacity': .6
                }
            }, labelLayerId);
        });
        
    }

    componentWillUnmount() {
        // map.remove();
    }

    render() {
        
        const style = {
            position: 'absolute',
            top: 300,
            bottom: 0,
            width: '100%'
    };

        return <div style={style} ref={el => this.mapContainer = el} />;
    }
}

export default Map;