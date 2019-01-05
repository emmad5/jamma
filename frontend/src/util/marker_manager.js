import mapboxgl from 'mapbox-gl';

class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }


    updateMarkers() {
        console.log('time to update');
    }

    createMarkerFromBusiness(business) {
        const position = new mapboxgl.LatLng(business.lat, business.lng);
        const marker = new mapboxgl.Marker({
            position,
            map: this.map,
            businessID: business.id
        });

        this.markers[marker.businessID] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.businessID].setMap(null);
        delete this.markers[marker.businessID];
    }
}

export default MarkerManager;