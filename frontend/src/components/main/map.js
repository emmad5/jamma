import React from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYWRlYXMiLCJhIjoiY2pxZmlqemU2MjVycjN4cW9mYmh1ZWl2cCJ9.z-IDAJYR6Am8oyctbpvfhw';
class Map extends React.Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 12,
            center: [-122.431297, 37.773972]
        });
    }

    componentWillUnmount() {
        this.map.remove();
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

export default Map