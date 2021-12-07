var map = L.map('map').setView([0, 0], 0);

L.tileLayer(`maps/images/{z}/{x}/{y}.jpg`, {
    continuousWorld: false,
    noWrap: true,
    maxZoom: 5,
    minZoom: 2,
    id: 'secretgarden.V1',
    bounds,
    crs: L.CRS.Simple,
    zoomSnap: 0.15,
}).addTo(map);

// Set the bounds
var southWest = L.latLng(-65.98155760646617, -170),
northEast = L.latLng(65.99346179538875, 170);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

// Show the whole map:
map.fitBounds(bounds);

// var marker = L.marker([-49.521, -39.518]).addTo(map);

// marker.bindPopup("Kiwi tunnel").openPopup();

var circle_kiwi_tunnel = L.circle([-47.100, -39.518], {
    color: 'gray',
    fillColor: '#fff',
    fillOpacity: 0.5,
    radius: 220000
}).addTo(map);

var circle_poort = L.circle([-39.775, -9.50], {
    color: 'gray',
    fillColor: '#fff',
    fillOpacity: 0.5,
    radius: 275000,
}).addTo(map);

circle_kiwi_tunnel.bindPopup("Kiwi tunnel");
circle_poort.bindPopup("Poort");