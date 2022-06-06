<template>
    <section class="map">
        <div id="mapContainer"></div>
    </section>
</template>

<script>
import L from 'leaflet'  
import 'leaflet/dist/leaflet.css' 
import icon from '@/assets/icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

export default {
    name: "Map",
    data () {
        return {
            centerCoordinates: [-43.9509, -34.4618],
            map: null,
            tileLayer: null,
        }
    },
    props: {
        
    },
    mounted() {        
        this.initMap();
    },  
    methods: {
        initMap() {                
                this.map = L.map('mapContainer')
                this.map.setView(this.centerCoordinates, 2);                
                this.tileLayer = L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 18,
                    id: "mapbox/satellite-v9",                    
                    }
                );
                this.tileLayer.addTo(this.map);
            },
        renderMarkers(items,template) {
            let markers = L.layerGroup();            
            items.forEach(item => {
                let lat = item.lat;
                let lng = item.lng;                
                let marker = L.marker({lat,lng}).bindPopup(template(item));
                markers.addLayer(marker);
            });
            this.map.addLayer(markers);
        },

    },
}
</script>

<style lang="sass">
#mapContainer
    cursor: pointer
    width: 100%
    height: 500px
    z-index: 1
</style>